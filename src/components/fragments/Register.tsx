import React, { useState, ChangeEvent, FormEvent } from "react";
import Input from "../widgets/Input";
import PasswordInput from "../widgets/PasswordInput";
import Button from "../widgets/Button";
import AlternateLogin from "./AlternateLogin";
import { validatePasswordStrength } from '../../utils/passwordValidation';
import { motion } from "framer-motion";

const Register: React.FC = () => {
  const [password, setPassword] = useState<string>("");
  const [validationMessage, setValidationMessage] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [validateMessageConfirm, setValidateMessageConfirm] = useState<string>("");


  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

    const validationMsg = validatePasswordStrength(newPassword);
    setValidationMessage(validationMsg);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("Form submitted!");
    console.log("Password:", password);
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
        <p id="title" className="text-xl md:text-4xl font-semibold text-center">
          Create Your Account
        </p>
        <p id="sub-title" className="text-xs md:text-lg text-center">
          It`s free and easy
        </p>
      </div>

      <div id="form-container">
        <form className="w-full" onSubmit={handleSubmit}>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
            
          className="w-full px-1 md:w-96 my-6">
            <Input id="name" type="text" placeholder="Type your Full Name" />
          </motion.div>

          <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.2 }}
          className="w-full px-1 md:w-96 my-6">
            <Input id="email" type="email" placeholder="Type your email" />
          </motion.div>

          <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.4 }}
          className="px-1 w-full md:w-96 my-6 flex gap-2 flex-col">
            <PasswordInput id="password" onChange={handlePasswordChange} />
            <p className={`text-xs ${validationMessageColor}`}>{validationMessage}</p>
          </motion.div>


          <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.4 }}
          className="px-1 w-full md:w-96 my-6 flex gap-2 flex-col">
            <PasswordInput id="password_confirmation" placeholder="Confirm your password" onChange={confirmPasswordHandler} />
            <p className={`text-xs text-red-600`}>{validateMessageConfirm}</p>
          </motion.div>

          <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.2 , delay: 0.5 }}
          className="flex gap-2 my-8 items-start">
            <input type="checkbox" />
            <p className="font-poppins text-xs text-slate-500 text-wrap max-w-96">
              By creating an account means you agree to 
              <b> the Terms and Conditions</b>, and our <b>Privacy Policy</b>
            </p>
          </motion.div>

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2 , delay: 0.6 }}          
          className="px-1 w-full md:w-96 bg-[#DD9BA3] hover:bg-[#f3bfc5] rounded-full">
            <Button name="Sign Up" />
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.7 }}          
          >
            <AlternateLogin />
          </motion.div>
        </form>
      </div>
    </div>
  );
};

export default Register;
