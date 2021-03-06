import { Link } from "react-router-dom";
import { useState } from "react";

import { IoSearch, IoMenu } from 'react-icons/io5';
import { FaFacebookSquare, FaYoutube, FaInstagram } from 'react-icons/fa';
import logo from '/img/logo.png';
import favicon from "/img/favicon.png";
import { Quotes } from "../quote";

export const Navbar = () => {

    const [openNav, setOpenNav] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);

    const closeNav = (event: any) => {
        if (event.target.id != 'menu') {
            setOpenNav(false);
        }

        if (event.target.id != 'search') {
            setOpenSearch(false);
        }
    }

    const handleSearch = (event: any) => {
        alert(event.target.value);
    }

    return (
        <nav className="w-full h-[80px]">
            <section className="fixed w-full h-[80px] z-10 flex flex-col bg-[#262626]">
                <div className="mSM:w-[95%] mmMD:w-[85%] mmSD:w-[80%] w-[70%] max-w-[1680px]  h-[100%] flex items-center justify-between mx-auto py-2">
                    <div>
                        <div className="text-white flex items-center gap-2" onClick={() => setOpenNav(!openNav)} >
                            <IoMenu className="text-[1.8rem] cursor-pointer" />
                            <p className="font-bold text-[.8rem] mMD:hidden cursor-pointer">MENU</p>
                        </div>
                    </div>

                    <div className="w-[200px] z-9999 mSM:w-[165px]">
                        <div>
                            <a href='/'><img src={logo} alt="logo-suasmilhas" className="p-2" /></a>
                        </div>
                    </div>

                    <div className="text-white">
                        <div className="flex items-center gap-2">
                            <IoSearch className="text-[1.5rem]" onClick={() => setOpenSearch(!openSearch)} />
                        </div>
                    </div>
                </div>
                <div className="bg-[#171717]">
                    <Quotes />
                </div>
            </section>

            < div className={`fixed w-full h-full top-0 z-20 bg-black bg-opacity-25  transition-opacity duration-[5s] ease-in  ${openNav || openSearch ? 'animate-menu-open-bg' : 'hidden'}`} onClick={closeNav}></div>

            <section id='menu' className={`fixed z-20 top-0 w-[350px] max-w-[75%] h-full bg-[#202020] transition-all duration-500 ease-in ${openNav ? 'translate-x-0' : 'translate-x-[-100%]'} `}>
                <ul className="relative h-full flex flex-col gap-5 px-5 py-[5rem] text-[#BBB] text-[1.1rem]">                    
                    <li><a href="/simulador-milhas">Calculadora Milhas</a></li>
                    <li><a href="/cartoes">Cart??es de Cr??dito</a></li>
                    <li><a href="/vocabulario-milhas">Vocabul??rio Milhas</a></li>                                                            
                    <li><a href="">Controle de Milhas</a></li>
                    <li><a href="">Mande sua pergunta</a></li>

                    <li className="w-full absolute left-0 bottom-0 flex gap-3 items-center text-[#5a5a5a] text-[1.2rem] p-5">
                        <p>Compartilhe</p>
                        <Link to=""><FaFacebookSquare className="hover:text-[#02d86d]" /></Link>
                        <Link to=""><FaYoutube className="text-[1.8rem] hover:text-[#02d86d]" /></Link>
                        <Link to=""><FaInstagram className="hover:text-[#02d86d]" /></Link>
                    </li>
                </ul>
            </section>

            <section className={`absolute z-30 w-full transition-all duration-200 ease-in ${openSearch ? 'translate-y-[0] mt-[5rem]' : 'translate-y-[-200%]'}`}>
                <div id="search" className="w-[95%] mx-auto max-w-[800px] bg-[#262626] rounded-[50rem] flex items-center px-4">
                    <IoSearch className="text-[1.5rem] text-[#BBB]" />
                    <input
                        type="text"
                        className="w-full bg-transparent p-3 text-[#BBB] outline-none placeholder:text-[#BBB] placeholder:text-[1.1rem]"
                        placeholder="O que voc?? procura ?"
                        onKeyDown={(event: any) => event.key == 'Enter' ? handleSearch(event) : ''}
                    />
                    <img src={favicon} alt="" className="w-[1.2rem] cursor-pointer opacity-50" />
                </div>
            </section>

        </nav >
    );
}