import nodemailer,{TransportOptions} from 'nodemailer'
import {env} from '../config/config.env'

export const emailTransporter = nodemailer.createTransport({
  host: env.SMTP_HOST,
  port: Number(env.SMTP_PORT),
  secure: Number(env.SMTP_PORT) === 465,
  auth: {
    user: env.EMAIL,
    pass: env.EMAILPASS,
  },
} as TransportOptions);