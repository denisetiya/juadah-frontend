import Input from "../widgets/Input"
import React from "react"
import PasswordInput from '../widgets/PasswordInput';
import Button from "../widgets/Button";
import AlternateLogin from "./AlternateLogin";

const Login: React.FC = () => {
    return (
        <div>
            <div className="flex flex-col gap-1 md:gap-5 md:mb-24 ">
                <p id="title" className=" text-xl md:text-4xl font-semibold text-center md:text-start">
                    Welcome Back!
                </p>
                <p id="sub-title" className="text-xs md:text-lg text-center md:text-start">
                    Meet the good taste today
                </p>
            </div>

            <div id="form-container">
                <form className="w-full">
                    <div className="w-full px-1 md:w-96 my-6">
                        <Input id="email" type="email" placeholder="Type your email"/>
                    </div>

                    <div className="px-1 w-full md:w-96 my-6 flex gap-2 flex-col">
                        <PasswordInput id="password" />
                        <p className="text-xs text-slate-500 text-end">Forgot password ?</p>
                    </div>

                    <div className="px-1 w-full md:w-96">
                        <Button name="Login"/>
                    </div>
                    
                    <AlternateLogin/>
                </form>
            </div>

        </div>
    )
}

export default Login
