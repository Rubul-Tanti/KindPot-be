import "express";
import { SubscriptionOrder } from "../generated/prisma";

declare module "express-serve-static-core" {
  interface Request {
    user?:{
      id:string,
      email:string,
      role:'VIEWER'|'ADMIN'|'SUBSCRIBER'
      subscriptionOrder:SubscriptionOrder|null
    }
  }
}