import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logo from '/img/logo.png';
import eloading from '/img/eloading.svg';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Post } from "../../components/post";
import { Cards } from "../../components/cards";
import { Recommend } from "../../components/recomend";
import { Announcement } from "../../components/announcement";

import API from "../../services/api2";
import Services from "../../services/api";

import { ICard } from "../../types/ICard";
import { IPost } from "../../types/IPost";
import { ICompanies } from "../../types/ICompanies";
import { IQuote } from "../../types/IQuote";
import { QuoteResult } from "../../components/quote-result";

export const Simulation = () => {

    const [cards, setCards] = useState<ICard[]>([]);
    const [posts, setPosts] = useState<IPost[]>([]);

    const [quoteResult, setQuoteResult] = useState<IQuote[]>([]);
    const [companies, setCompanies] = useState<ICompanies[]>([]);

    const [companyID, setCompanyID] = useState<number | null>(null);
    const [quantity, setQuantity] = useState<number>(0);
    const [limit, setLimit] = useState<number[] | null>(null);
    const [btnStatus, setBtnStatus] = useState<boolean>(false);

    useEffect(() => {
        GetCards();
        GetAllPosts();
        GetAllCompanies();
    }, []);

    const GetAllPosts = async () => {
        const data = await Services.GetPosts();
        setPosts(data);
    }

    const GetCards = async () => {
        const data = await API.GetALLCards();
        setCards(data.cartoes);
    }

    useEffect(() => {
        CompanyChange();
    }, [companyID]);

    const GetAllCompanies = async () => {
        const data = await Services.GetCompanies();

        const newData = data.map((item) => {

            const rangePoints: number[] = [];

            for (let index = item.points[0]; index <= item.points[1]; index++) {
                rangePoints.push(index);
            }

            return {
                id: item.id,
                category_id: item.category_id,
                category: item.category,
                name: item.name,
                points: rangePoints,
            }
        });

        setCompanies(newData);
    }

    const CompanyChange = async () => {
        setLimit(null);
        setQuantity(0);
        setQuoteResult([]);
        const newLimit = companies.filter(company => company.category_id === companyID);
        setLimit(newLimit[0].points);
    }

    const handleSubmit = async (event: React.FormEvent) => {
        setQuoteResult([]);
        event.preventDefault();
        setBtnStatus(true);

        const data = await Services.GetQuote(companyID as number, quantity);

        setTimeout(() => {
            setQuoteResult(data);
            setBtnStatus(false);
        }, 2000);

    }

    return (
        <div id="simulation">
            <header>
            </header>
            <div className="mmMD:w-[85%] mSM:w-[95%] mmSD:w-[80%] max-w-[1680px]  w-[70%] mx-auto">
                <main className="w-full h-[95vh] flex items-center justify-center">
                    <div className="mmSD:w-[75%] mMM:w-[90%] mSM:w-[80%] mMD:w-[80%] w-[60%] flex justify-center items-center flex-col">
                        <Link to="/"><img src={logo} alt="logo-suasmilhas" className="w-[350px] py-[.5rem] animate-bounce" /></Link>
                        <div className="w-full flex flex-col justify-center items-center">
                            <form action="" method="get" className="w-full my-[1rem]" onSubmit={handleSubmit}>
                                <div className="mSM:flex-col w-full flex gap-4 justify-center text-[#FFF]">
                                    <div className='mSM:w-full bg-[#414141] rounded w-[40%] overflow-hidden'>
                                        <select name="company"
                                            className="w-full bg-transparent p-[1rem] text-[1.2rem] leading-[1.2rem] text-[#FFF] bg-[#414141] outline-none"
                                            onChange={(event) => setCompanyID(parseInt(event.target.value))}>
                                            <option value="">Selecione o programa</option>
                                            {companies.map((company: ICompanies, index) => (
                                                <option
                                                    value={company.category_id}
                                                    key={index}>{company.category
                                                        ? `${company.name} ${company.category}`
                                                        : company.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className='mSM:w-full bg-[#414141] rounded w-[40%] overflow-hidden'>
                                        <select name="quantity"
                                            className="w-full bg-transparent p-[1rem] text-[1.2rem] leading-[1.2rem] text-[#FFF] bg-[#414141] outline-none"
                                            onChange={(event) => setQuantity(parseInt(event.target.value))}
                                            disabled={companyID != null ? false : true}>
                                            <option value="" selected >Quantidade de milhas</option>
                                            {limit?.map((point, index) => (
                                                <option
                                                    value={point}
                                                    key={index}
                                                    selected={point == quantity ? true : false}>
                                                    <b>{point}</b> Mil milhas
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <button type="submit"
                                        disabled={companyID == null || quantity <= 0 ? true : false}
                                        className={`mSM:w-full block  px-4 text-[1.5rem] leading-[1.5rem] rounded ${companyID != null && quantity > 0 ? 'bg-[#00e170] hover:bg-[#02a754]' : 'bg-[#149152]'}`}>
                                        {btnStatus
                                            ?
                                            <div className="w-full flex items-center justify-center px-4">
                                                <p>calculando</p>
                                                <img src={eloading} alt="" className="w-[50px] p-1" />
                                            </div>
                                            :
                                            <div className="p-[1rem]">
                                                Calcular
                                            </div>
                                        }
                                    </button>
                                </div>
                            </form>
                            {quoteResult.length > 0 &&
                                <div className="w-full">
                                    <Swiper
                                        pagination={{ clickable: true }}
                                        spaceBetween={30}
                                        breakpoints={{
                                            320: {
                                                slidesPerView: 1,
                                                spaceBetween: 20,
                                            },
                                            640: {
                                                slidesPerView: 2,
                                                spaceBetween: 20,
                                            },
                                            1024: {
                                                slidesPerView: 4,
                                                spaceBetween: 20,
                                            },
                                        }}
                                        modules={[Pagination]}
                                        className="mySwiper">
                                        {quoteResult.map((quote, index) => (
                                            <SwiperSlide key={index}>
                                                <QuoteResult days={quote.days} value={quote.value} />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            }
                            <div className="w-full mx-auto h-[80px] mt-[1rem]">
                                <Announcement />
                            </div>
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
                        <h2 className="text-[1.5rem] py-4 text-[#ffffff]"><span className="font-medium  text-[#00e170]">últimas</span> postagens</h2>
                    </div>
                    <div id="post" className="w-full grid  grid-cols-1 py-[1rem] gap-[1rem]">
                        {posts.slice(0, 10).map((post, index) => (
                            <Link to="" key={index}>
                                <Post img={post.img} label={post.label} title={post.title} subTitle={post.subTitle} key={index} />
                            </Link>
                        ))}
                    </div>
                    <div className="w-full h-[250px] mt-[2rem]">
                        <Announcement />
                    </div>
                </section>
                <section className="w-full flex flex-col justify-between mt-[2rem]">
                    <div>
                        <h2 className="text-[1.5rem] py-4 text-[#ffffff]"><span className="font-medium  text-[#00e170]">ranking</span> de cartões de crédito</h2>
                    </div>
                    <div className="w-full grid mMD:grid-cols-1 grid-cols-2 py-[1rem] gap-[1rem]">
                        {cards.slice(0, 10).map((card, index) => (
                            <Link to="" key={index}>
                                <Cards posicao={index} icone={card.icone} nome={card.nome} key={index} />
                            </Link>
                        ))}
                    </div>
                    <div className="w-full text-center mt-4">
                        <a href="/cartoes" className="text-white rounded p-2 block w-full bg-[#00e170] hover:bg-[#31f87d]">Acesse o ranking completo com os melhores cartões de crédito</a>
                        <p className="text-[.6rem] flex justify-end py-1">fonte: MelhoresDestinos</p>
                    </div>
                </section>
            </div >
            <footer className="w-full bg-[#262626] pt-[3rem]">
                <div className="mSM:w-[95%] mmSD:w-[80%] w-[70%] mx-auto">
                    <div className="w-full flex justify-center text-white py-[1.5rem] text-[.8rem] text-center">
                        <p>@Copyrigth 2022 - <a href="/" className="text-[#00e170]">suasmilhas.com</a>, Todos os direitos reservados</p>
                    </div>
                </div>
            </footer>
        </div >
    );
}