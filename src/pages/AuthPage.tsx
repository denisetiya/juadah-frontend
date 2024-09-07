import backgroundAuth from '../assets/background-login.webp'
// import backgroundAuthMd from '../assets/bg-login-md.png'
import Logo from '../components/widgets/Logo'
import { useState } from 'react'

import Login from '../components/fragments/Login'
import Register from '../components/fragments/Register'


function AuthPage() {

    const [switchPage, setSwitchPage] = useState<boolean>(false)

    return (
        <div className="flex flex-col md:flex-row bg-[#ead0d1]  ">
            <div id="imageBg"
                style={{
                    backgroundImage: `url(${backgroundAuth})`,
                    backgroundPosition: 'left bottom',
                    backgroundRepeat: 'no-repeat',
                }}
                className='w-full xl:w-[50%] h-[218px] md:h-screen '
            >
                <div id='logo' className='absolute  top-36 right-0 md:top-14 md:left-9'>
                    <Logo />
                </div>

                <div id='welcome-container' className=' px-6 md:mt-72 md:ml-32 2xl:mt-60  2xl:ml-60 bg-black bg-opacity-30 pt-6 pb-24 md:bg-opacity-0'>
                    <p id='titleMain' className='text-3xl font-sans xl:text-7xl font-bold text-white md:text-[#1B6270]'>
                        Welcome to <br />Juadah !
                    </p>
                    <p id='title-detail' className='text-xs xl:text-sm mt-6 font-semibold text-white md:text-[#1B6270] font-poppins tracking-widest'>
                        Beli kue jadi lebih mudah dengan aplikasi Juadah
                    </p>
                </div>
            </div>

            <div id="form"
                className='bg-white w-full xl:w-[50%] md:rounded-none md:h-screen rounded-t-3xl z-10 md:mt-0 p-10 flex justify-center  md:rounded-l-[90px] flex-col'>
                {switchPage ? 
                <div className='w-full flex justify-center items-center'>
                    <Register /> 
                </div>
                : 
                <div className='w-full flex justify-center items-center'>
                    <Login />
                </div>
                }
                <p className='text-center md:my-12 text-xs md:text-sm text-poppins'>
                    {switchPage
                        ? "Already have an account? "
                        : "Don't have an account? "}
                    <span
                        className='text-[#DD9BA3] font-bold cursor-pointer'
                        onClick={() => setSwitchPage(!switchPage)}
                    >
                        {switchPage ? 'Login' : 'Register'}
                    </span>
                </p>
            </div>

        </div>
    )
}

export default AuthPage
