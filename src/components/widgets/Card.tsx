import React from "react"
import Button from "../widgets/Button"
import { User } from "@phosphor-icons/react"
import { ShoppingCart, Star } from "@phosphor-icons/react"

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

interface CardProductProps {
  url: string | undefined
  title: string | undefined
  star: number
  userRev: number
  price: string | undefined
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
    <div className="max-w-[290px] md:max-w-[372px] flex flex-col border rounded-3xl shadow-xl pb-8">
      <div className="max-w-[290px] md:max-w-[372px]">
        <img src={url} alt="" className="rounded-t-3xl" />
      </div>
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



const CardProduct: React.FC<CardProductProps> = ({ url, title, star,userRev, price }) => {
  return (
    <div className="max-w-[290px] md:max-w-[372px] flex flex-col border rounded-3xl shadow-xl pb-8">
      <div className="max-w-[290px] md:max-w-[372px]">
        <img src={url} alt="" className="rounded-t-3xl" />
      </div>
      <div className="flex flex-col justify-between px-4 py-2">
        <div>
          <div className="text-poppins font-semibold mt-3">{title}</div>
          <div className="mt-2 text-xl font-bold">{price}</div>
        </div>

          <div className="flex justify-between items-end">
            <div className="text-slate-500 text-sm font-light">
            <div className="flex space-x-1 text-slate-500 text-sm font-light">
              {Array.from({ length: star }).map((_, index) => (
                <Star weight="fill" key={index} size={16} className="text-black" />
              ))} <small>({userRev})</small>
            </div>
            </div>
            <div className="bg-black rounded-full p-2">
              <ShoppingCart size={25} className="text-white" />
            </div>
          </div>
      </div>
      {/* color="#1B6270" hover="#1d7283"  */}

    </div>
  )
}



export {
  CardTestimonial,
  CardExclusive,
  CardProduct
}
