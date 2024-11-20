import Input from "../widgets/Input";
import PasswordInput from "../widgets/PasswordInput";
import { useNavigate } from "react-router-dom";
import AlternateLogin from "./AlternateLogin";
import { motion } from "framer-motion";
import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";
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
  
const Login: React.FC = () => {


  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [errorDetails, setErrorDetails] = useState<Record<string, string> | null>(null);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      setLoading(true);
      const response = await axios.post(
        import.meta.env.VITE_API_URL + "login",
        { email, password }
      );
      console.log(response.headers["Set-Cookie"]);
      if (response.status === 200) {
        Cookies.set("email", response.data.data.user.email);
        Cookies.set("name", response.data.data.user.fullname);
        Cookies.set("role", response.data.data.user.role);
        navigate("/");
      }

      console.log(response);
    }  catch (err) {
        if (axios.isAxiosError(err) && err.response) {
          setError(err.response.data.errors?.message || "An unexpected error occurred.");
          setErrorDetails(err.response.data.errors?.details);
          setOpen(true);
        } else {
          setError("An unexpected error occurred.");
          setOpen(true);
        }

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full md:flex md:justify-center md:flex-col md:items-center">
      <div className="flex flex-col gap-1 md:gap-5 md:mb-24">
        <p id="title" className="text-xl font-semibold text-center md:text-4xl">
          Welcome Back!
        </p>
        <p id="sub-title" className="text-xs text-center md:text-lg">
          Meet the good taste today
        </p>
      </div>

      <div id="form-container">
        <div className="w-full">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full px-1 my-6 md:w-96"
          >
            <Input
              id="email"
              type="email"
              placeholder="Type your email"
              onChange={(event) => {
                setEmail(event.target.value);
                setErrorDetails(null);
              }}
            />
            {errorDetails?.email ? <p className="mt-1 text-xs text-red-500">{errorDetails.email}</p> : null}
          </motion.div>

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col w-full gap-2 px-1 my-6 md:w-96"
          >
            <PasswordInput
              id="password"
              onChange={(event) => {
                setPassword(event.target.value);
                setErrorDetails(null);
            }}
            />
            {errorDetails?.password ? <p className="mt-1 text-xs text-red-500">{errorDetails.password}</p> : null}
            <p className="text-xs text-slate-500 text-end">Forgot password ?</p>
            
          </motion.div>

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="px-1 w-full md:w-96 bg-[#DD9BA3] hover:bg-[#f3bfc5] rounded-full"
            onClick={(e) => handleLogin(e)}
          >
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
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <AlternateLogin />
          </motion.div>
        </div>
      </div>




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
  );
};

export default Login;
