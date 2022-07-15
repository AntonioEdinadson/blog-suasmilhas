import { useEffect, useState } from "react";
import { Announcement } from "../../components/announcement";

import { BsCircleFill } from 'react-icons/bs';

import { Header } from "../../components/header";
import { Navbar } from "../../components/navbar";
import { PopularPost } from "../../components/popularPost";
import { Post } from "../../components/post";
import { Quotes } from "../../components/quote";

import { Recommend } from "../../components/recomend";
import Services from "../../services/api";
import { IPost } from "../../types/IPost";
import { Link } from "react-router-dom";

export const Home = () => {

    const [posts, setPosts] = useState<IPost[]>([]);
    const [popularPosts, setPopularPosts] = useState<IPost[]>([]);
    const [accumulatePoints, setAccumulatePoints] = useState<IPost[]>([]);

    useEffect(() => {
        GetAllPosts();
        GetAllPopularPosts();
        GetAllAccumulatePointsPosts();
    }, []);

    const GetAllPosts = async () => {
        const data = await Services.GetPosts();
        setPopularPosts(data);
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
        <div className="mb-[100rem]">
            <Navbar />
            <Quotes />
            <Header />
            <div className="mSM:w-[95%] mmSD:w-[80%] w-[70%] h-[200px] mx-auto my-[2rem]">
                <div className="w-full h-full border-b border-[#313131] pb-[1.5rem]">
                    <Announcement />
                </div>
                <section className="w-full my-[2rem]">
                    <h2 className="text-[1.5rem] text-[#FFF]"><span className="font-medium  text-[#00e170]">suasmilhas</span> recomenda</h2>
                    <div className="w-full flex gap-[2rem] py-[2rem]">
                        <div className="w-full">
                            <Recommend />
                        </div>
                    </div>
                </section>
                <main className="mSM:flex-col w-full flex items-start mmSD:gap-[1rem] gap-[2rem]">
                    <div className="mSM:w-full w-[70%]">
                        <h2 className="text-[1.5rem] text-[#FFF]"><span className="font-medium  text-[#00e170]">últimos</span> postagens</h2>
                        <div className="w-full flex flex-col gap-[2rem] py-[2rem]">
                            {posts.map((post: IPost, index: number) => (
                                <Post img={post.img} label={post.label} title={post.title} key={index} />
                            ))}
                        </div>
                    </div>
                    <aside className="mSM:w-full w-[30%]">
                        <div className="w-full h-[600px] pb-6">
                            <Announcement />
                        </div>
                        <div className="w-full">
                            <h2 className="text-[1.5rem] text-[#FFF]"><span className="font-medium  text-[#00e170]">mais</span> populares</h2>
                            <div className="w-full flex flex-col gap-[1rem] py-[2rem]">
                                {popularPosts.slice(4, 9).map((post: IPost, index: number) => (
                                    <PopularPost img={post.img} title={post.title} key={index} />
                                ))}
                            </div>
                        </div>
                        <div className="w-full border-b border-[#313131] mb-4">
                            <h2 className="text-[1.5rem] text-[#FFF]"><span className="font-medium  text-[#00e170]">acumule</span> pontos</h2>
                            <div className="w-full flex flex-col gap-[1.2rem] py-[2rem]">
                                {accumulatePoints.slice(0, 8).map((post: IPost, index: number) => (
                                    <div className="w-full flex items-center gap-[1rem]" key={index}>
                                        <BsCircleFill className="w-[10px] text-left text-[.8rem] text-[#00e170]" />
                                        <Link to="" className="w-[calc(100%-10px)] text-[1rem] text-[#00e170] hover:text-[#FFF]"><h2>{post.title}</h2></Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full h-[600px] py-2 pb-6">
                            <Announcement />
                        </div>
                    </aside>
                </main>
            </div>
        </div>
    );
} 