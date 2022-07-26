import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { BsCircleFill } from 'react-icons/bs';

import { Announcement } from "../../components/announcement";
import { Header } from "../../components/header";
import { Navbar } from "../../components/navbar";
import { PopularPost } from "../../components/popularPost";
import { Post } from "../../components/post";
import { Recommend } from "../../components/recomend";
import { Footer } from "../../components/footer";
import { Cards } from "../../components/cards";

import Services from "../../services/api";
import API from "../../services/api2";

import { IPost } from "../../types/IPost";
import { ICard } from "../../types/ICard";

export const Home = () => {

    const [cards, setCards] = useState<ICard[]>([]);
    const [posts, setPosts] = useState<IPost[]>([]);
    const [popularPosts, setPopularPosts] = useState<IPost[]>([]);
    const [accumulatePoints, setAccumulatePoints] = useState<IPost[]>([]);

    useEffect(() => {
        GetCards();
        GetAllPosts();
        GetAllPopularPosts();
        GetAllAccumulatePointsPosts();
    }, []);

    const GetAllPosts = async () => {
        const data = await Services.GetPosts();
        setPopularPosts(data);
    }

    const GetCards = async () => {
        const data = await API.GetALLCards();
        setCards(data.cartoes);
    }

    const GetAllPopularPosts = async () => {
        const data = await Services.GetPosts();
        setPosts(data);
    }

    const GetAllAccumulatePointsPosts = async () => {
        const data = await Services.GetPosts();
        setAccumulatePoints(data);
    }

    return (
        <div className="">
            <Navbar />
            <Header />
            <main className="mmMD:w-[85%] mSM:w-[95%] mmSD:w-[80%] max-w-[1680px]  w-[70%] mx-auto my-[2rem]">                
                <div className="mmMD:flex-col mSM:flex-col w-full flex items-start mmSD:gap-[1rem] gap-[2rem]">
                    <div className="mmMD:w-[100%] mSM:w-full w-[70%]">
                        <h2 className="text-[1.5rem] text-[#262626]"><span className="font-medium  text-[#00e170]">últimos</span> postagens</h2>
                        <div className="w-full flex flex-col gap-[2rem] py-[2rem]">
                            {posts.map((post: IPost, index: number) => (
                                <Post img={post.img} label={post.label} title={post.title} subTitle={post.subTitle} key={index} />
                            ))}
                        </div>
                        <div className="w-full flex justify-end">
                            <Link to="" className="w-full flex justify-center"><button className="w-full text-[#838383] px-10 py-2 border-2 rounded">ver mais postagens</button></Link>
                        </div>
                        <section className="w-full mt-[2rem] flex flex-col justify-between">
                            <div>
                                <h2 className="text-[1.5rem] py-4 text-[#262626]"><span className="font-medium  text-[#00e170]">ranking</span> de cartões de crédito</h2>
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
                    <aside className="mmMD:w-[100%] mSM:w-full w-[30%] sticky top-0 flex flex-col justify-between">
                        <div className="w-full h-[600px] py-6">
                            <Announcement />
                        </div>
                        <div className="w-full">
                            <h2 className="text-[1.5rem] text-[#262626]"><span className="font-medium  text-[#00e170]">mais</span> populares</h2>
                            <div className="w-full flex flex-col gap-[1rem] py-[2rem]">
                                {popularPosts.slice(1, 9).map((post: IPost, index: number) => (
                                    <PopularPost img={post.img} title={post.title} key={index} />
                                ))}
                            </div>
                        </div>
                        <div className="w-full mb-4">
                            <h2 className="text-[1.5rem] text-[#262626]"><span className="font-medium  text-[#00e170]">acumule</span> pontos</h2>
                            <div className="w-full flex flex-col gap-[1.2rem] py-[2rem]">
                                {accumulatePoints.slice(0, 8).map((post: IPost, index: number) => (
                                    <div className="w-full flex items-center gap-[1rem]" key={index}>
                                        <BsCircleFill className="w-[10px] text-left text-[.8rem] text-[#00e170]" />
                                        <Link to="" className="w-[calc(100%-10px)] text-[1rem] font-medium text-[#262626] hover:text-[#00e170]"><h2>{post.title}</h2></Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full h-[600px]">
                            <Announcement />
                        </div>
                    </aside>
                </div>
                <section className="w-full my-[2rem]">
                    <h2 className="text-[1.5rem] text-[#262626]"><span className="font-medium  text-[#00e170]">suasmilhas</span> recomenda</h2>
                    <div className="w-full flex gap-[2rem] py-[2rem]">
                        <div className="w-full">
                            <Recommend />
                        </div>
                    </div>
                </section>
                <div className="w-full h-full pb-[1.5rem]">
                    <Announcement />
                </div>
            </main>
            <footer className="w-full bg-[#262626] pt-[3rem]">
                <div className="mSM:w-[95%] mmSD:w-[80%] w-[70%] mx-auto">
                    <Footer />
                </div>
            </footer>
        </div >
    );
} 