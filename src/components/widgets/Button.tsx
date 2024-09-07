import React from "react"

interface ButtonProps {
    name: string
}
const Button :React.FC<ButtonProps> =({name}) =>{
  return (
    <>
      <button className="w-full inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded-full whitespace-nowrap bg-[#DD9BA3] hover:bg-[#f3bfc5] focus:bg-[#DD9BA3] focus-visible:outline-none disabled:cursor-not-allowed disabled:border-[#f5bbc1] disabled:bg-[#cf9ca2] disabled:shadow-none">
        <span>{name}</span>
      </button>
    </>
  )
}


export default Button