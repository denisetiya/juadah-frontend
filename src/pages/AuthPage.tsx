import backgroundAuth from '../assets/background-login.webp';
import Logo from '../components/widgets/Logo';
import { useState } from 'react';
import Login from '../components/fragments/Login';
import Register from '../components/fragments/Register';
import { motion, AnimatePresence } from 'framer-motion';

function AuthPage() {
  const [switchPage, setSwitchPage] = useState<boolean>(false);

  return (
    <motion.div
      className="flex flex-col md:flex-row bg-[#ead0d1] "
      layout
    >
      <motion.div
        id="imageBg"
        layout
        transition={{ duration: 0.5 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          backgroundImage: `url(${backgroundAuth})`,
          backgroundPosition: 'left bottom',
          backgroundRepeat: 'no-repeat',
        }}
        className={`${
          switchPage ? 'md:order-2' : 'md:order-1'
        } border-0 w-full xl:w-[50%] h-[218px] relative md:h-[100vh] flex`}
      >
        <motion.div
            initial={{ opacity: 0, x:-100 }}
            animate={{ opacity: 1 , x:0}}
            transition={{ duration: 0.5 }}
          id="logo"
          className="absolute top-36 right-0 md:top-14 md:left-9"
        >
          <Logo />
        </motion.div>

        <div
          id="welcome-container"
          className="px-6 md:mt-52 md:ml-32 2xl:mt-56 2xl:ml-36 bg-black bg-opacity-30 pt-6 pb-24 md:bg-opacity-0 w-full"
        >
          <motion.p
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            id="titleMain"
            className="text-3xl font-sans lg:text-5xl xl:text-7xl font-bold text-white md:text-[#1B6270]"
          >
            Welcome to <br />
            Juadah!
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            id="title-detail"
            className="text-xs xl:text-sm mt-6 font-semibold text-white md:text-[#1B6270] font-poppins tracking-widest"
          >
            Beli kue jadi lebih mudah dengan aplikasi Juadah
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        id="form"
        layout
        className={`bg-white w-full xl:w-[50%] md:rounded-none md:h-screen z-10 md:mt-0 p-10 flex justify-center 
        ${switchPage ? 'md:rounded-tr-[90px]' : 'md:rounded-l-[90px]'} 
        flex-col order-1 border-0`}
      >
        <AnimatePresence mode="wait">
          {switchPage ? (
            <motion.div
              key="register"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <Register />
            </motion.div>
          ) : (
            <motion.div
              key="login"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <Login />
            </motion.div>
          )}
        </AnimatePresence >

        
        <motion.p
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 , delay: 0.3, ease: 'easeIn' }}        
        className="text-center md:my-12 text-xs md:text-sm text-poppins transition-all duration-300">
          {switchPage ? 'Already have an account? ' : "Don't have an account? "}
          <span
            className="text-[#DD9BA3] font-bold cursor-pointer"
            onClick={() => setSwitchPage(!switchPage)}
          >
            {switchPage ? 'Sign In' : 'Sign Up'}
          </span>
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default AuthPage;
