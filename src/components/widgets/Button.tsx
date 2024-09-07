import React from "react"

interface ButtonProps {
    name: string
    color?: string
    hover?: string
}
const Button :React.FC<ButtonProps> =({name, color="#DD9BA3", hover='f3bfc5'}) =>{
  return (
    <>
      <button className={`w-full inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded-full whitespace-nowrap bg-[${color}] hover:bg-[${hover}] focus:bg-[${hover}] focus-visible:outline-none disabled:cursor-not-allowed disabled:border-[#f5bbc1] disabled:bg-[#cf9ca2] disabled:shadow-none`}>
        <span>{name}</span>
      </button>
    </>
  )
}


export default Button