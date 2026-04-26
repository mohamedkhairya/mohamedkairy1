"use server" // تصحيح الكلمة هنا

import { CheckoutForm } from "@/CheckoutSchemas/Checkout.Schemas"
import { myAddcartToken } from "@/utilities"

export async function getCheckout(productId: string, url: string = process.env.NEXTAUTH_URL!, formvalue: CheckoutForm) {
  try {
    const token = await myAddcartToken()

    const req = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${productId}?url=${url}`, {
      method: "POST",
      headers: {
        token: token as string,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ shippingAddress: formvalue })
    })

    const data = await req.json();
    return data;

  } catch (error) {

  }
}