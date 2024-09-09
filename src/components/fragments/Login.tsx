import Input from "../widgets/Input"
import React from "react"
import PasswordInput from '../widgets/PasswordInput';
import Button from "../widgets/Button";
import { useNavigate } from "react-router-dom";
import AlternateLogin from "./AlternateLogin";
import { motion } from "framer-motion";

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
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    className="w-full px-1 md:w-96 my-6">
                        <Input id="email" type="email" placeholder="Type your email"/>
                    </motion.div>

                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}                    
                    className="px-1 w-full md:w-96 my-6 flex gap-2 flex-col">
                        <PasswordInput id="password" />
                        <p className="text-xs text-slate-500 text-end">Forgot password ?</p>
                    </motion.div>
                    {/* color="#DD9BA3", hover='f3bfc5' */}
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}  
                        onClick={handleLogin} className="px-1 w-full md:w-96 bg-[#DD9BA3] hover:bg-[#f3bfc5] rounded-full">
                        <Button name="Sing In" />
                    </motion.div>
                    
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 , delay: 0.5 }}
                    >
                        <AlternateLogin/>
                    </motion.div>
                </form>
            </div>

        </div>
    )
}

export default Login
