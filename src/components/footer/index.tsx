import { Link } from "react-router-dom";

import logo from '/img/logo.png';

export const Footer = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className="w-full mSM:w-[165px] flex flex-col items-center border-b pb-5 border-[#535353]">
                <div className="w-[200px]">
                    <Link to='/'><img src={logo} alt="logo-suasmilhas" /></Link>
                </div>
                <ul className="mSM:flex-col w-full flex justify-center gap-[2rem] font-medium text-white py-[1.5rem] text-center">
                    <Link to=""><li className="hover:text-[#00e170]">Envie sua Pergunta</li></Link>
                    <Link to=""><li className="hover:text-[#00e170]">Sobre Nós</li></Link>
                    <Link to=""><li className="hover:text-[#00e170]">Anuncie</li></Link>
                    <Link to=""><li className="hover:text-[#00e170]">Termos de Uso e Privacidade</li></Link>
                </ul>
            </div>
            <div className="w-full flex justify-center text-white py-[1.5rem] text-[.8rem] text-center">
                <p>@Copyrigth 2022 - <b className="text-[#00e170]">suasmilhas.com</b>, Todos os direitos reservados</p>
            </div>
        </div>
    );
}