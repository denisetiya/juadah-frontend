import React from "react"
import Button from "../widgets/Button"
import { User } from "@phosphor-icons/react"

interface CardProps {
  url: string | undefined
  title: string | undefined
  desc: string | undefined
  price: string | undefined
}

interface CardTestimonialProps {
  url?: string | undefined
  desc: string | undefined
  name: string | undefined
  email: string | undefined
}


const CardTestimonial: React.FC<CardTestimonialProps> = ({ url, desc, name, email }) => {
  return (
    <div className="flex flex-col border rounded-3xl shadow-xl p-6 max-w-[300px] bg-[#F4F5F6]">
      <div className="text-poppins font-light text-wrap">
        {desc}
      </div>
      <div className="flex gap-3 items-center py-5">

        <div>
          {url ? <img src={url} alt="" className="rounded-full" /> : 
            <div className="p-4 bg-[#F5F9FC] rounded-full">
              <User size={30} color="#1B6270" />
            </div>
          }
        </div>
        <div>
          <div className="text-poppins font-semibold">{name}</div>
          <div className="text-slate-500 text-sm font-light">{email}</div>
        </div>

      </div>
    </div>
  )
}

const CardExclusive: React.FC<CardProps> = ({ url, title, desc, price }) => {
  return (
    <div className="flex flex-col border rounded-3xl shadow-xl pb-8">
      <img src={url} alt="" className="rounded-t-3xl" />
      <div className="flex justify-between items-center px-4 py-8">
        <div>
          <div className="text-poppins font-semibold ">{title}</div>
          <div className="text-slate-500 text-sm font-light">{desc}</div>
        </div>

        <div className=" border p-3 rounded-xl">{price}</div>
      </div>
      {/* color="#1B6270" hover="#1d7283"  */}

      <div className="w-[142px] mx-4 bg-[#1B6270] hover:bg-[#1d7283] rounded-full">
        <Button name="Order Now" />
      </div>

    </div>
  )
}

export {
  CardTestimonial,
  CardExclusive
}
