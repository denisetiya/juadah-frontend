import React from "react"
import Button from "../widgets/Button"


interface CardProps {
    url : string | undefined
    title: string | undefined
    desc : string | undefined
    price : string | undefined
}


const Card =()=> {
  return (
    <div>
      
    </div>
  )
}

const CardExclusive:React.FC<CardProps> =({url,title,desc,price})=> {
  return (
    <div className="flex flex-col border rounded-3xl shadow-xl pb-8">
      <img src={url} alt="" className="rounded-3xl"/>
      <div className="flex justify-between items-center px-4 py-8">
        <div>
            <div className="text-poppins font-semibold ">{title}</div>
            <div className="text-slate-500 text-sm font-light">{desc}</div>
        </div>

        <div className=" border p-3 rounded-xl">{price}</div>
      </div>

        <div className="w-[142px] mx-4 ">
            <Button name="Order Now" color="#1B6270" hover="#1d7283" />
        </div>

    </div>
  )
}

export  {
  Card,
  CardExclusive
}
