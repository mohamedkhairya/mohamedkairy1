"use server"

import { myAddcartToken } from "@/utilities";





export async function addCart (productId : string){


const token = await myAddcartToken();

if (!token) {
        return null; 
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

if (!token) {
        return null; 
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

if (!token) {
        return null; 
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

if (!token) {
        return null; 
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

if (!token) {
        return null; 
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




