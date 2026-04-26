"use server"

import { myAddcartToken } from "@/utilities";





export async function addCart (productId : string){


const token = await myAddcartToken();

if(!token){
    throw new Error("please login first .....")
}

const res = await fetch('https://ecommerce.routemisr.com/api/v2/cart', {
    method : "post" ,
    headers:{
        token : token as string ,
      "Content-Type": "application/json"
    } ,
    body : JSON.stringify({productId :  productId})

})


const data = await res.json();
return data
}



export async function getCartAction (){


const token = await myAddcartToken();

if(!token){
    throw new Error("please login first .....")
}

const res = await fetch('https://ecommerce.routemisr.com/api/v2/cart', {
    method : "GET" ,
    headers:{
        token : token as string ,
      "Content-Type": "application/json"
    } ,

})


const data = await res.json();
return data
}

export async function getUpdateAction (productId : string , count:number){


const token = await myAddcartToken();

if(!token){
    throw new Error("please login first .....")
}

const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart/${productId}`, {
    method : "PUT" ,
    headers:{
        token : token as string ,
      "Content-Type": "application/json"
    } ,
    body : JSON.stringify({count :  count})

})


const data = await res.json();
return data
}



export async function getDELETEAction (productId : string){


const token = await myAddcartToken();

if(!token){
    throw new Error("please login first .....")
}

const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart/${productId}`, {
    method : "DELETE" ,
    headers:{
        token : token as string ,
      "Content-Type": "application/json"
    } ,

})


const data = await res.json();
return data
}


export async function getClearAction (){


const token = await myAddcartToken();

if(!token){
    throw new Error("please login first .....")
}

const res = await fetch("https://ecommerce.routemisr.com/api/v2/cart", {
    method : "DELETE" ,
    headers:{
        token : token as string ,
      "Content-Type": "application/json"
    } ,

})


const data = await res.json();
return data
}


export async function addToWishlistAction(productId: string) {
  const token = await myAddcartToken();

  if (!token) {
    return { status: "fail", message: "Please login first" };
  }

  try {
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/wishlist', {
      method: "POST",
      headers: {
        "token": token as string,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ productId: productId })
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Wishlist Error:", error);
    return { status: "error", message: "Network error" };
  }
}


export async function removeFromWishlistAction(productId: string) {
    const token = await myAddcartToken();
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`, {
        method: "DELETE",
        headers: { "token": token || "" }
    });
    return await res.json();
}