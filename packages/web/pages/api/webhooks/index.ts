import Cors from 'micro-cors'
import { NextApiRequest, NextApiResponse } from 'next'
import { buffer } from 'micro'
import Stripe from 'stripe'
import { STRIPE_SECRET_KEY, STRIPE_WEBHOOK_TOKEN } from '../../../utils/config'

const stripe = new Stripe(STRIPE_SECRET_KEY, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: '2020-08-27',
})

const webhookSecret: string = STRIPE_WEBHOOK_TOKEN

export const config  = {
  api: {
    bodyParser: false
  }
}

const webhookHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if(req.method === 'POST') {
    const buf = await buffer(req)
    const sig: any = req.headers['stripe-signature']
    let event: Stripe.Event
    try {
      event = stripe.webhooks.constructEvent(buf.toString('utf8'), sig, webhookSecret)
    } catch (err) {
      console.log(err)
      res.status(400).send('Webhook Error')
    }
    console.log("Success")
  }
}


const cors = Cors({
  allowMethods: ['HEAD', 'POST'],
})

export default cors(webhookHandler as any)