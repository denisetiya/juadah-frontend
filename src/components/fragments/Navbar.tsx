import { useState } from "react";
import Logo from "../widgets/Logo";
import { Link } from "react-router-dom";
import { ShoppingCart, User } from "@phosphor-icons/react";

export default function Navbar() {
    const [isToggleOpen, setIsToggleOpen] = useState(false);
    const menuItems = [
        { title: 'Home', link: '/' },
        { title: 'Discover', link: '/discover' },
        { title: 'Blog', link: '/blog' },
        { title: 'About Us', link: '/about' },
        { title: 'Contact', link: '/contact' },
    ];

    return (
        <div className="fixed top-0 left-0 right-0 z-50">
            <header className="border-b-1 relative z-20 w-full border-b border-slate-200 bg-[#DD9BA3] shadow-lg shadow-slate-700/5 after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
                <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
                    <nav
                        aria-label="main navigation"
                        className="flex h-[5.5rem] items-stretch justify-center md:justify-between md:gap-10 font-medium text-slate-700"
                        role="navigation"
                    >
                        <div className="flex items-center">
                            <Logo />
                        </div>

                        <div className="border-l-2 border-white my-6 hidden md:block"></div>


                        {/* Mobile */}
                        <button
                            className={`relative order-10 block h-10 w-10 self-center lg:hidden ${isToggleOpen
                                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0"
                                    : ""
                                }`}
                            onClick={() => setIsToggleOpen(!isToggleOpen)}
                            aria-expanded={isToggleOpen ? "true" : "false"}
                            aria-label="Toggle navigation"
                        >
                            <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                                <span
                                    aria-hidden="true"
                                    className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-200 transition-all duration-300"
                                ></span>
                                <span
                                    aria-hidden="true"
                                    className="absolute block h-0.5 w-6 transform rounded-full bg-slate-200 transition duration-300"
                                ></span>
                                <span
                                    aria-hidden="true"
                                    className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-200 transition-all duration-300"
                                ></span>
                            </div>
                        </button>

                        {/* menu list */}
                        <ul
                            role="menubar"
                            aria-label="Select page"
                            className={`absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden overflow-y-auto overscroll-contain bg-[#DD9BA3] px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0 lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0 lg:pt-0 lg:opacity-100 ${isToggleOpen
                                    ? "visible opacity-100 backdrop-blur-sm"
                                    : "invisible opacity-0"
                                }`}
                        >
                            {menuItems.map((item, index) => (
                                <li key={index} role="none" className="flex items-stretch">
                                    <Link
                                        role="menuitem"
                                        aria-haspopup="false"
                                        className="flex text-white items-center gap-2 py-4 transition-colors duration-300 hover:text-slate-200 focus:text-slate-200 focus:outline-none focus-visible:outline-none lg:px-8"
                                        to={item.link}
                                    >
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* sub menu */}
                        <div className="ml-auto flex items-center justify-end px-6 lg:ml-0 lg:flex-1 gap-3 lg:p-0">
                            <div>
                                <ShoppingCart size={25} className="text-white" />
                            </div>
                            <div>
                                 <User size={25} className="text-white"/>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    );
}
