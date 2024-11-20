import React, { useState, ChangeEvent, FormEvent } from "react";
import Input from "../widgets/Input";
import PasswordInput from "../widgets/PasswordInput";
import AlternateLogin from "./AlternateLogin";
import axios from "axios";
import { validatePasswordStrength } from '../../utils/passwordValidation';
import { motion } from "framer-motion";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { Spinner } from "../widgets/Spinner";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,

} from "@/components/ui/alert-dialog"




const Register: React.FC = () => {

  const navigate = useNavigate();
  const [fullname, setFullname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [validationMessage, setValidationMessage] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [validateMessageConfirm, setValidateMessageConfirm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const [errorDetails, setErrorDetails] = useState<Record<string, string> | null>(null);

  const [open, setOpen] = useState(false);

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setErrorDetails(null);
    const newPassword = event.target.value;
    setPassword(newPassword);

    const validationMsg = validatePasswordStrength(newPassword);
    setValidationMessage(validationMsg);
  };


  const handleSubmit = async(event: FormEvent) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(import.meta.env.VITE_API_URL + "register", { fullname, email, password, passwordConfirmation: confirmPassword });
      if (response.status === 201) {
        Cookies.set("email", response.data.data.user.email);
        Cookies.set("name", response.data.data.user.fullname);
        Cookies.set("role", response.data.data.user.role);
        navigate("/");
      } 
      
     } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
          setError(err.response.data.errors?.message || "An unexpected error occurred.");
          setErrorDetails(err.response.data.errors?.details);
        } else {
          setError("An unexpected error occurred.");
        }
        setOpen(true);
      } finally {
        setLoading(false);
      }
  };

  const confirmPasswordHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const currentConfirmPassword = event.target.value;
    setConfirmPassword(currentConfirmPassword);
    
    if (currentConfirmPassword !== password) {
      setValidateMessageConfirm("Passwords do not match.");
    } else {
      setValidateMessageConfirm("");
    }

    console.log("Confirm Password:", confirmPassword);
  }
  // Determine validation message color
  const validationMessageColor =
    validationMessage === "Password is strong." ? "text-green-500" : "text-red-500";

  return (
    <div className="w-full md:flex md:justify-center md:flex-col md:items-center">
      <div className="flex flex-col gap-1 md:gap-5 md:mb-16">
        <p id="title" className="text-xl font-semibold text-center md:text-4xl">
          Create Your Account
        </p>
        <p id="sub-title" className="text-xs text-center md:text-lg">
          It`s free and easy
        </p>
      </div>

      <div id="form-container">
        <div className="w-full" >
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
            
          className="w-full px-1 my-6 md:w-96">
            <Input id="name" type="text" placeholder="Type your Full Name" onChange={(event) => 
              {
              setFullname(event.target.value)
               setErrorDetails(null) 
              }}/>
            {errorDetails?.fullname? <p className="mt-1 text-xs text-red-600">{errorDetails.fullname}</p> : ""}
          </motion.div>

          <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.2 }}
          className="w-full px-1 my-6 md:w-96">
            <Input id="email" type="email" placeholder="Type your email" onChange={(event) => {
              setEmail(event.target.value)
              setErrorDetails(null)
              }} />
            {errorDetails?.email? <p className="mt-1 text-xs text-red-600">{errorDetails.email}</p> : ""}
          </motion.div>

          <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.4 }}
          className="flex flex-col w-full gap-1 px-1 my-6 md:w-96">
            <PasswordInput id="password" onChange={handlePasswordChange} />
            <p className={`text-xs ${validationMessageColor}`}>{validationMessage}</p>
            {errorDetails?.password? <p className="mt-1 text-xs text-red-600">{errorDetails.password}</p> : ""}
          </motion.div>


          <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.4 }}
          className="flex flex-col w-full gap-2 px-1 my-6 md:w-96">
            <PasswordInput id="password_confirmation" placeholder="Confirm your password" onChange={confirmPasswordHandler} />
            <p className={`text-xs text-red-600`}>{validateMessageConfirm}</p>
            {errorDetails?.paswordConfirmation? <p className="mt-1 text-xs text-red-600">{errorDetails.paswordConfirmation}</p> : ""}
          </motion.div>

          <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.2 , delay: 0.5 }}
          className="flex items-start gap-2 my-8">
            <input type="checkbox" />
            <p className="text-xs font-poppins text-slate-500 text-wrap max-w-96">
              By creating an account means you agree to 
              <b> the Terms and Conditions</b>, and our <b>Privacy Policy</b>
            </p>
          </motion.div>

          <motion.div
            onClick={(e) => handleSubmit(e)}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2 , delay: 0.6 }}          
          className="px-1 w-full md:w-96 bg-[#DD9BA3] hover:bg-[#f3bfc5] rounded-full">
            <div className="flex items-center justify-center">
              <button className="gap-3 p-2 text-white ">
                <span className="flex gap-3">
                  Sign Up
                  {loading ? <Spinner size="small" /> : ""}
                </span>
              
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.7 }}          
          >
            <AlternateLogin />
          </motion.div>

          {/* alert dialog */}
          <AlertDialog open={open} onOpenChange={setOpen} >
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Failed to Register</AlertDialogTitle>
                <AlertDialogDescription>
                  {error}
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction>Try Again</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

        </div>
      </div>
    </div>
  );
};

export default Register;

