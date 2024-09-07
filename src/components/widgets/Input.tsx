import React, { ChangeEvent } from "react";

interface InputProps {
  id: string;
  type?: string;
  placeholder : string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;

}

const Input: React.FC<InputProps> = ({id,type="text", placeholder,onChange,}) => {

  return (
    <>
      <div className="relative">
        <input
          id={id}
          type={type}
          name="email"
          placeholder="Your email"
          className=" rounded peer relative h-10 w-full border border-slate-400 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
          onChange={onChange}
        />
        <label
          htmlFor={id}
          className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
        >
          {placeholder}
        </label>
        {/* <small className="flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-pink-500">
          <span>Input Valid Email</span>
        </small> */}
      </div>

    </>
  );
};

export default Input;
