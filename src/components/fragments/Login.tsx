import Input from "../widgets/Input"
import React from "react"
import PasswordInput from '../widgets/PasswordInput';
import Button from "../widgets/Button";
import { useNavigate } from "react-router-dom";
import AlternateLogin from "./AlternateLogin";

const Login: React.FC = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        console.log("Login button clicked!")
        navigate("/")
    }
    return (
        <div className="w-full md:flex md:justify-center md:flex-col md:items-center">
            <div className="flex flex-col gap-1 md:gap-5 md:mb-24 ">
                <p id="title" className=" text-xl md:text-4xl font-semibold text-center ">
                    Welcome Back!
                </p>
                <p id="sub-title" className="text-xs md:text-lg text-center">
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

                    <div onClick={handleLogin} className="px-1 w-full md:w-96">
                        <Button name="Sing In" />
                    </div>
                    
                    <AlternateLogin/>
                </form>
            </div>

        </div>
    )
}

export default Login
