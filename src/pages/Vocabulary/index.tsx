import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Announcement } from "../../components/announcement";
import { Cards } from "../../components/cards";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { Recommend } from "../../components/recomend";

import API from "../../services/api2";
import { ICard } from "../../types/ICard";
import { IVocabulary } from "../../types/IVocabulary";

export const Vocabulary = () => {

    const [cards, setCards] = useState<ICard[]>([]);
    const [vocabulary, setVocabulary] = useState<IVocabulary[]>([]);

    useEffect(() => {
        GetCards();
        GetVocabulary();
    }, []);

    const GetCards = async () => {
        const data = await API.GetALLCards();
        setCards(data.cartoes);
    }

    const GetVocabulary = async () => {
        const data = await API.GetVocabulary();
        setVocabulary(data);
    }

    return (
        <div>
            <Navbar />
            <header>
                <div className="mmMD:w-[85%] mSM:w-[95%] mmSD:w-[80%] max-w-[1680px]  w-[70%] mx-auto pt-[3rem]">
                    <h1 className="text-[#262626] text-[2rem] leading-[2rem] pt-4 font-bold">Vocabulário no mundo das milhas</h1>
                    <h2 className="font-light py-2">Os melhores cartões de crédito para acessat salas vip, viajar com milhas e obter seguros e beneficios de viagem.</h2>
                </div>
            </header>
            <div className="mmMD:w-[85%] mSM:w-[95%] mmSD:w-[80%] max-w-[1680px]  w-[70%] mx-auto my-[2rem]">
                <main>
                    <div className="w-full h-[300px]">
                        <Announcement />
                    </div>
                    <div className="mmMD:flex-col mSM:flex-col w-full flex items-start mmSD:gap-[1rem] gap-[2rem] my-[4rem]">

                        <section className="mmMD:w-[100%] mSM:w-full mmSD:w-[65%] w-[70%] flex flex-col gap-2">
                            {vocabulary.map((item, index) => (
                                <div className="mMM:flex-col w-full flex items-center  gap-4 bg-white mb-[2rem] p-[2rem] rounded relative overflow-hidden" key={index}>
                                    <div className="mMM:w-full w-[35%] mMM:border-none border-r mMM:p-0 pr-4 flex items-center justify-center gap-2">
                                        <h2 className="font-semibold text-[1.1rem]">{item.title}</h2>
                                    </div>
                                    <div className="mMM:w-full w-[65%] text-[.8rem]">
                                        <h3 className="text-[1rem]">{item.content}</h3>
                                    </div>
                                    <div className="absolute top-0 left-0 bg-[#00e170] text-white px-4">{item.initials}</div>
                                </div>
                            ))}
                            <div className="w-full h-[200px]">
                                <Announcement />
                            </div>
                        </section>

                        <aside className="aside mmMD:w-[100%] mSM:w-full mmSD:w-[35%] w-[30%] mXG:relative sticky top-0 flex flex-col justify-between gap-4 mb-[1rem] rounded">
                            <div className="w-full h-[300px]">
                                <Announcement />
                            </div>
                            <section className="w-full mt-[1rem] flex flex-col justify-between p-[2rem] bg-white rounded">
                                <div>
                                    <h2 className="text-[1.5rem] py-4 text-[#262626]"><span className="font-medium  text-[#00e170]">ranking</span> de cartões de crédito</h2>
                                </div>
                                <div className="w-full grid grid-cols-1 py-[1rem] gap-[1rem]">
                                    {cards.slice(0, 10).map((card, index) => (
                                        <Link to="" key={index}>
                                            <Cards posicao={index} icone={card.icone} nome={card.nome} />
                                        </Link>
                                    ))}
                                </div>
                                <div className="w-full text-center mt-4">
                                    <a href="/cartoes" className="text-white rounded p-2 block w-full bg-[#00e170] hover:bg-[#31f87d]">Acesse o ranking completo com os melhores cartões de crédito</a>
                                    <p className="text-[.6rem] flex justify-end py-1">fonte: MelhoresDestinos</p>
                                </div>
                            </section>
                        </aside>

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