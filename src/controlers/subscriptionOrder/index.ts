import { Request, Response } from "express"
import logger from "../../utils/logger"
import { ApiError } from "../../middleware/errorHandler"
import { createSubscriptionOrderSchema } from "../../utils/validatons/subscriptionOrder"
import { prisma } from "../../db/prisma"
import { PaymentGateway } from "../../generated/prisma"
import { stripe } from "../../config/stripe"
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/client"

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not set")
}

export const createSubscriptionOrder = async (req: Request, res: Response) => {
  logger.info("hit create subscription order")

  try {
    if (!req?.user?.id) {
      return res.status(401).json({ message: "unauthorized" })
    }
    const alreadySubscribed=await prisma.subscriptionOrder.findFirst({where:{userId:req?.user?.id,status:"COMPLETED",periodEnd:{gte :new Date()}}})
    if(!alreadySubscribed){
    if (alreadySubscribed) {
  return res.status(409).json({
    success: false,
    message: "User already has an active subscription",
  });
}
    }
    const vr = createSubscriptionOrderSchema.safeParse(req.body)
    if (!vr.success) {
      return res.status(400).json({
        message: "input validation error",
        error: vr.error.flatten().fieldErrors,
      })
    }

    const orderData = vr.data

    const existingOrder = await prisma.subscriptionOrder.findFirst({
      where: { userId: req.user.id, status: "COMPLETED" },
    })
    if (existingOrder) {
      return res.status(400).json({ message: "user already has an active subscription" })
    }

    const subscriptionPlan = await prisma.subscriptionModel.findUnique({
      where: { id: orderData.subscriptionModelId },
    })
    if (!subscriptionPlan) {
      return res.status(404).json({ message: "subscription plan not found" })
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(subscriptionPlan.price*100),
      currency: subscriptionPlan.currency,
      automatic_payment_methods: { enabled: true, allow_redirects: "never" },
      receipt_email: req.user.email,
      metadata: {
        userId: req.user.id,
        subscriptionModelId: orderData.subscriptionModelId,
      },
    })

    const periodStart = new Date()
    const periodEnd = new Date(periodStart)

    const isYearly = subscriptionPlan.planName.toLowerCase().includes("year")
    if (isYearly) {
      periodEnd.setFullYear(periodEnd.getFullYear() + 1)
    } else {
      periodEnd.setMonth(periodEnd.getMonth() + 1)
    }

    const newSubscriptionOrder = await prisma.subscriptionOrder.create({
      data: {
        subscriptionModelId: orderData.subscriptionModelId,
        userId: req.user.id,
        periodStart,
        periodEnd,
        stripePaymentIntentId: paymentIntent.id,
        stripeCustomerId: paymentIntent.customer as string ?? null,
        stripeClientSecret: paymentIntent.client_secret,
        paymentGateway: PaymentGateway.STRIPE,
        amount: paymentIntent.amount,
        currency: paymentIntent.currency.toUpperCase(),
        status: "PENDING",
        ipAddress: req.ip,
        userAgent: req.headers["user-agent"] ?? null,
      },
    })
    return res.status(201).json({
      success: true,
      message: "subscription order created",
      data: {
        orderId: newSubscriptionOrder.id,
        clientSecret: paymentIntent.client_secret,
        paymentIntentId: paymentIntent.id,
        status: paymentIntent.status,
      },
    })
  } catch (e) {
    logger.error("error while creating subscription order", e)
    throw new ApiError("internal server error", 500)
  }
}




export const checkPaymentStatus=async(req:Request,res:Response)=>{
  logger.info('hit check payment status')
  try{
  const {paymentIntentId}=req.body
  if(!paymentIntentId){
   return res.status(400).json({message:"input validation error",error:"paymentIntentId is required"})
  }
const intent=await stripe.paymentIntents.retrieve(paymentIntentId)
res.status(200).json({
success:true,
message:"successfully fetched payment status",
data:{
  paymentStatus:intent.status,
  amount:intent.amount,
  currency:intent.currency.toUpperCase
}
})
}catch(e){
    logger.error("error while checking subscription status", e)
    throw new ApiError("internal server error", 500)
}
}


export const confirmPayment=async(req:Request,res:Response)=>{
try{
  const {paymentIntentId}=req.body
  if(!paymentIntentId){
    res.status(400).json({message:"input validation error",error:"paymentIntentId is required"})
  }
  const intent=await stripe.paymentIntents.retrieve(paymentIntentId)
  if(intent.status!=="succeeded"){
    return res.status(400).json({paymentStatus:intent.status,message:"payment not confirm"
    ,amount:intent.amount,
    currency:intent.currency.toUpperCase})
  }
  const confirmOrder=await prisma.subscriptionOrder.update({where:{
    amount:intent.amount,
    currency:intent.currency.toUpperCase(),
    userId:req?.user?.id,
    stripePaymentIntentId:paymentIntentId
  },data:{status:"COMPLETED"}}
  )
  await prisma.user.update({where:{id:confirmOrder.id},data:{role:"SUBSCRIBER"}})

  return res.status(200).json({message:"payment confirmed",data:{
    paymentStatus:intent.status,
    amount:intent.amount,
    currency:intent.currency.toUpperCase,
    subscriptionOrder:confirmOrder
  }})
}catch(e){
  if(e instanceof PrismaClientKnownRequestError&&e.code==="P2025"){
    return res.status(404).json("subscription order not found")
  }
    logger.error("error while confirming subscription", e)
    throw new ApiError("internal server error", 500)
  }
}
export const getOrders=async(req:Request,res:Response)=>{
  try{
    const orders=await prisma.subscriptionOrder.findMany()
    return res.status(200).json({message:"fetched all orders",data:orders})
  }catch(e){
    logger.error("error while fetching orders")
    throw new ApiError("internal server error", 500)
  }
}