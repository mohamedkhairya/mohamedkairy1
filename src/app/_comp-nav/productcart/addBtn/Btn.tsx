"use client"
import { addCart } from '@/actionsRegister/cart.action';
import React, { useContext, useTransition } from 'react'
import { toast } from 'sonner'; 
import { contextcreat } from '@/context/Craetcontext';


interface BtnProps {
  classes: string;
  word: string;
  icon?: React.ReactNode;
  id: string;
}

const Btn = ({ classes, word, icon, id }: BtnProps) => {
  
  const [isPending, startTransition] = useTransition();

const { navNumber, setnavNumber } = useContext(contextcreat);


  async function handleAddCart() {



    const toastId = toast.loading("Adding to cart...");

    startTransition(async () => {
      try {

        const res = await addCart(id);

        if (res.status === "success") {
          toast.success("Success!", {
            id: toastId, 
            description: res.message || "Product added successfully!",
            duration: 3000,
            unstyled: false, 
            style: {
              padding: '16px 20px',
              borderRadius: '16px',
              background: '#2b9348',
              color: '#ffffff',
              border: 'none'
            },
          });
          setnavNumber(navNumber +1)
        } else {
          toast.error("Error", {
            id: toastId,
            description: res.message || "Something went wrong",
            duration: 4000,
            style: {
              padding: '16px 20px',
              borderRadius: '16px',
              background: '#c1121f',
              color: '#ffffff',
              border: 'none'
            },
          });
        }
      } catch (error) {
        toast.error("Authentication Required", {
        id: toastId,
        description: "Please login first to manage your cart",
        duration: 6000,
        action: {
          label: "Go to Login",
          onClick: () => window.location.href = "/login"
        },
        style: {
          padding: '16px 20px',
          borderRadius: '16px',
          background: '#191C2D', 
          color: '#ffffff',
        },
        });
      }
    });

    
  }

  return (
    <button
      onClick={handleAddCart}
      disabled={isPending}
      className={`${classes} ${isPending ? 'opacity-70 cursor-wait' : ''}`}
    >
      <span className="sm:hidden font-bold text-xl">+</span>
      {icon && <span className="hidden sm:block">{icon}</span>}
      <span className="hidden sm:block text-sm font-bold">{word}</span>
    </button>
  )
}

export default Btn