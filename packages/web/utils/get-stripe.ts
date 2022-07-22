import { loadStripe, Stripe } from "@stripe/stripe-js";
import { nextPublicStripePublishableKey } from "./config";

let stripePromise: Promise<Stripe | null>;

const getStripe = () => {
  if(!stripePromise) {
    stripePromise = loadStripe(nextPublicStripePublishableKey)
  }
  return stripePromise;
}

export default getStripe;