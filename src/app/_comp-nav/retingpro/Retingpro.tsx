"use client"
import React from 'react'
import { Rating } from 'react-simple-star-rating'

const Retingpro = ({value}: {value: number}) => {
  return (
    <>
    <div className="flex items-center gap-2">
      <Rating
        initialValue={value}   
        readonly={true}      
        allowFraction={true} 
        size={25}            
        fillColor="#ffb300"  
        emptyColor="#cbd5e1" 
        SVGclassName="inline-block" 
      />
      
      <span className="text-gray-600 font-medium text-sm mt-1">
       {value.toFixed(1)} 
      </span>
    </div>
    </>
  )
}

export default Retingpro