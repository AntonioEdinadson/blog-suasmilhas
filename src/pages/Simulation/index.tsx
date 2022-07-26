import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Announcement } from "../../components/announcement";
import { Cards } from "../../components/cards";
import { Recommend } from "../../components/recomend";
import API from "../../services/api2";
import { ICard } from "../../types/ICard";

import logo from '/img/logo.png';

export const Simulation = () => {

    const [cards, setCards] = useState<ICard[]>([]);

    useEffect(() => {
        GetCards();
    }, []);

    const GetCards = async () => {
        const data = await API.GetALLCards();
        setCards(data.cartoes);
    }

    return (
        <div id="simulation">
            <header>
            </header>
            <div className="mmMD:w-[85%] mSM:w-[95%] mmSD:w-[80%] max-w-[1680px]  w-[70%] mx-auto">
                <main className="w-full h-screen flex items-center justify-center">
                    <div className="w-full flex justify-center items-center flex-col">
                        <img src={logo} alt="logo-suasmilhas" className="w-[350px] py-[2.5rem]" />
                        <div className="w-full flex justify-center items-center">
                            <form action="" method="get">
                                <div className="flex gap-4 pb-[2rem] justify-center text-[#FFF]">
                                    <div className='bg-[#414141] rounded w-[30%]'>
                                        <select name="" id="" className="w-full bg-transparent p-[1rem] text-[2rem] text-[#FFF] bg-[#414141]">
                                            <option value="">Smiles</option>
                                            <option value="">TudoAzul</option>
                                            <option value="">LatamPass</option>
                                        </select>
                                    </div>
                                    <div className='bg-[#414141] rounded w-[30%]'>
                                        <input type="text" value={1000} className="w-full py-[1rem] px-4 bg-transparent outline-none text-[2rem] text-center" />
                                    </div>
                                    <div className='bg-[#414141] rounded w-[30%] disabled'>
                                        <input type="text" value={25.00} className="w-full py-[1rem] px-4 bg-transparent outline-none text-[2rem] text-center" disabled />
                                    </div>
                                </div>
                                <div className="w-[90%] mx-auto h-[80px]">
                                    <Announcement />
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
                <section className="w-full my-[2rem]">
                    <h2 className="text-[1.5rem] text-[#ffffff]"><span className="font-medium  text-[#00e170]">suasmilhas</span> recomenda</h2>
                    <div className="w-full flex gap-[2rem] py-[2rem]">
                        <div className="w-full">
                            <Recommend />
                        </div>
                    </div>
                </section>
                <div className="w-full h-[250px]">
                    <Announcement />
                </div>
                <section className="w-full flex flex-col justify-between mt-[2rem]">
                    <div>
                        <h2 className="text-[1.5rem] py-4 text-[#ffffff]"><span className="font-medium  text-[#00e170]">ranking</span> de cartões de crédito</h2>
                    </div>
                    <div className="w-full grid mMD:grid-cols-1 grid-cols-2 py-[1rem] gap-[1rem]">
                        {cards.slice(0, 10).map((card, index) => (
                            <Link to="">
                                <Cards posicao={index} icone={card.icone} nome={card.nome} key={index} />
                            </Link>
                        ))}
                    </div>
                    <div className="w-full text-center mt-4">
                        <a href="/cartoes" className="text-white rounded p-2 block w-full bg-[#00e170] hover:bg-[#31f87d]">Acesse o ranking completo com os melhores cartões de crédito</a>
                        <p className="text-[.6rem] flex justify-end py-1">fonte: MelhoresDestinos</p>
                    </div>
                </section>
            </div>
            <footer className="w-full bg-[#262626] pt-[3rem]">
                <div className="mSM:w-[95%] mmSD:w-[80%] w-[70%] mx-auto">
                    <div className="w-full flex justify-center text-white py-[1.5rem] text-[.8rem] text-center">
                        <p>@Copyrigth 2022 - <a href="/" className="text-[#00e170]">suasmilhas.com</a>, Todos os direitos reservados</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}