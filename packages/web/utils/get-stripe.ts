import { loadStripe, Stripe } from "@stripe/stripe-js";
import { NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY } from "./config";

let stripePromise: Promise<Stripe | null>;

const getStripe = () => {
  if(!stripePromise) {
    stripePromise = loadStripe(NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  }
  return stripePromise;
}

export default getStripe;