import { useEffect, useState } from "react";

import { Navbar } from "../../components/navbar";
import { Announcement } from "../../components/announcement";
import { Recommend } from "../../components/recomend";
import { Footer } from "../../components/footer";

import { ICards } from "../../types/ICard";

import API from "../../services/api2";

import load from '/img/loading.svg'

export const Card = () => {

    const [cards, setCards] = useState<ICards[]>([]);
    const [flag, setFlag] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const [nameFlag, setNameFlag] = useState<string>("");

    useEffect(() => {
        GetCards();
    }, []);

    useEffect(() => {
        HandleCards();
    }, [nameFlag]);

    const GetCards = async () => {
        setLoading(true);
        const data = await API.GetALLCards();
        setCards(data.cartoes);
        setFlag(data.bandeiras);
        setLoading(false);
    }

    const HandleCards = async () => {

        setLoading(true);
        const cardsAll = await API.GetALLCards();

        if (!nameFlag) {
            setCards(cardsAll.cartoes);
            setLoading(false);
            return;
        }

        const data = cardsAll.cartoes.filter((card: ICards) => card.bandeira == nameFlag);
        setCards(data);
        setLoading(false);
    }

    return (
        <div>
            <Navbar />
            <header>
                <div className="mmMD:w-[85%] mSM:w-[95%] mmSD:w-[80%] max-w-[1680px]  w-[70%] mx-auto pt-[3rem]">
                    <h1 className="text-[1.8rem] pt-4 font-semibold">Melhores Cartões de Crédito</h1>
                    <h2 className="font-light">Os melhores cartões de crédito para acessat salas vip, viajar com milhas e obter seguros e beneficios de viagem.</h2>
                </div>
            </header>
            <div className="mmMD:w-[85%] mSM:w-[95%] mmSD:w-[80%] max-w-[1680px]  w-[70%] mx-auto my-[2rem]">
                <main>
                    <div className="w-full h-[300px] pb-[3rem]">
                        <Announcement />
                    </div>
                    <div className="mmMD:flex-col mSM:flex-col w-full flex items-start mmSD:gap-[1rem] gap-[2rem]">
                        <aside className="aside mmMD:w-[100%] mSM:w-full w-[30%] mXG:relative sticky top-0 flex flex-col justify-between gap-4 mb-[1rem] rounded">
                            <section className="bg-white rounded p-[1.5rem]">
                                <div className="flex justify-between item-center py-4 my-[1.2rem] border-b">
                                    <h2 className="text-[1.1rem] font-semibold">Filtros</h2>
                                </div>
                                <h2 className="block text-[1rem] pb-4 font-semibold">Bandeira</h2>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="all" className="relative pl-[2rem] cursor-pointer">
                                        <input type="radio" name="flag" id="all" value="" onClick={(e: any) => setNameFlag(e.target.value)} />
                                        Todos
                                        <span className="absolute top-0 left-0 w-[20px] h-[20px] rounded-full border-[3px] border-[#00e170]"></span>
                                    </label>
                                    {flag.map((item, index) => (
                                        <label htmlFor={`flag-${index}`} key={index} className="relative pl-[2rem] cursor-pointer">
                                            <input type="radio" value={item} name="flag" id={`flag-${index}`} onClick={(e: any) => setNameFlag(e.target.value)} />
                                            {item}
                                            <span className="absolute top-0 left-0 w-[20px] h-[20px] rounded-full border-[3px] border-[#00e170]"></span>
                                        </label>
                                    ))}
                                </div>
                            </section>
                            <div className="w-full mXG:h-[100px] h-[600px]">
                                <Announcement />
                            </div>
                        </aside>
                        <section className="mmMD:w-[100%] mSM:w-full w-[70%] relative">

                            {loading &&
                                <div className="w-full p-[2rem] flex items-center gap-4">
                                    <img src={load} alt="loading-logo" className="w-[40px]" />
                                    buscando Cartões de Crédito, aguarde...
                                </div>
                            }

                            {cards.map((card, index: number) => (
                                <div className="mMM:flex-col w-full flex items-center  gap-4 bg-white mb-[2rem] p-[2rem] rounded" key={index}>
                                    <div className="mMM:w-full w-[35%] mMM:border-none border-r mMM:p-0 pr-4 flex items-center gap-2">
                                        <img src={card.icone} alt={card.nome} className="mMM:w-full w-[calc(100%-40px)]" />
                                    </div>
                                    <div className="mMM:w-full w-[65%] text-[.8rem]">
                                        <h2 className="font-semibold text-[1.1rem]">{card.nome}</h2>
                                        <h3>{card.salas ? card.salas.replaceAll('<br>', ' ') : ""}</h3>
                                        <h3>{card.pontos.replaceAll('<br>', ' ').toLowerCase()}</h3>
                                        <h3>Anuidade: {parseFloat(card.anuidade.replace('.', '')).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h3>
                                    </div>
                                </div>
                            ))}

                            <div className="w-full h-[200px] my-4">
                                <Announcement />
                            </div>

                        </section>
                    </div>
                </main>
                <section className="w-full my-[2rem]">
                    <h2 className="text-[1.5rem] text-[#262626]"><span className="font-medium  text-[#00e170]">suasmilhas</span> recomenda</h2>
                    <div className="w-full flex gap-[2rem] py-[2rem]">
                        <div className="w-full">
                            <Recommend />
                        </div>
                    </div>
                </section>
            </div>
            <footer className="w-full bg-[#262626] pt-[3rem]">
                <div className="mSM:w-[95%] mmSD:w-[80%] w-[70%] mx-auto">
                    <Footer />
                </div>
            </footer>
        </div>
    );
}