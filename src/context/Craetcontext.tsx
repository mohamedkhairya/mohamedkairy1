"use client"

import { createContext, useEffect, useState } from "react";
import { getCartAction } from '@/actionsRegister/cart.action';
import { ReactNode } from "react";
import { product} from "@/app/cart/dataType";



export const contextcreat = createContext({navNumber : 0 , setnavNumber(mun : number){}})




export default  function Contextcreatprovider({children}:{children : ReactNode}){


  const [navNumber, setnavNumber] =  useState(0)

  async function Cart(){
    try{
          const magec = await getCartAction()

      let sum = 0 ;
      magec.data.products.forEach((product : product) => {
        sum+=product.count
      });
      setnavNumber(sum)

    }catch(erorr  : unknown){
        if (erorr instanceof Error){
          console.log(erorr.message)
        }
    }

    }


    useEffect(()=>{
    Cart()

    },[])

    return <contextcreat.Provider value={{navNumber , setnavNumber }}>
        {children}
    </contextcreat.Provider>

}

