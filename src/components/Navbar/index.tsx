import { Link } from "react-router-dom";

import { IoSearch, IoMenu } from 'react-icons/io5';
import logo from '/img/logo.png';
import { useState } from "react";

export const Navbar = () => {

    const [openNav, setOpenNav] = useState(false);

    const IsOpen = (event: any) => {
        setOpenNav(!openNav);
    };

    const closeNav = (event: any) => {
        if (event.target.id != 'menu') {
            setOpenNav(false);
        }
    }

    return (
        <nav className="w-full py-5" id="navbar">
            <div className="w-[80%] flex items-center justify-between mx-auto">
                <div>
                    <div className="text-white flex items-center gap-2">
                        <IoMenu className="text-[1.8rem]" onClick={IsOpen} />
                        <p className="font-bold text-[.8rem] mMD:hidden">MENU</p>
                    </div>
                </div>

                <div className="w-[220px] z-9999 mSM:w-[165px]">
                    <div>
                        <Link to='/'><img src={logo} alt="logo-suasmilhas" /></Link>
                    </div>
                </div>

                <div className="text-white">
                    <div className="flex items-center gap-2">
                        <IoSearch className="text-[1.5rem]" />
                    </div>
                </div>
            </div>

            < div className={`fixed w-full h-full top-0 bg-black bg-opacity-25  transition-opacity duration-[5s] ease-in  ${openNav ? 'animate-menu-open-bg' : 'hidden'}`} onClick={closeNav}></div>
            <div id='menu' className={`absolute top-0 w-[350px] max-w-[90%] h-full bg-[#202020] transition-all duration-500 ease-in ${openNav ? 'translate-x-0' : 'translate-x-[-100%]'} `}>
                <ul>

                </ul>
            </div>

        </nav >
    );
}