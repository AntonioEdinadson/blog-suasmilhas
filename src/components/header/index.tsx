import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Services from "../../services/api";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

interface IPost {
    title: string;
    label: string;
    img: string;
}

const chunkPosts = (array: IPost[]) => {
    return array.reduce((acc: any, _, index) => {
        if (index % 5 === 0) {
            acc.push(array.slice(index, index + 5));
        }
        return acc;
    }, [])
};

export const Header = () => {

    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        GetPosts();

    }, []);

    const GetPosts = async () => {
        const data = await Services.GetPosts();
        setPosts(data);
    }

    const chuckPosts = chunkPosts(posts);

    return (
        <div className="w-full">
            <div className="max-w-[1600px] mSM:w-[95%] mmSD:w-[80%] w-[70%] mx-auto mt-[1rem] bg-red border-b pb-5 border-[#313131]">
                <div className="flex gap-10">
                    <Swiper
                        pagination={{ clickable: true }}
                        spaceBetween={30}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                    >

                        {chuckPosts.map((post: IPost[], index: number) => (
                            <SwiperSlide className="flex gap-8 pb-5" key={index}>

                                <section className="mXL:w-[100%] w-[60%] h-[500px] flex flex-col justify-between">
                                    <div className="w-full mSM:h-[70%] h-[75%] overflow-hidden rounded-xl">
                                        <Link to=""><img className="w-full h-full object-cover hover:scale-125" src={post[0].img} alt="" /></Link>
                                    </div>
                                    <div className="w-full mSM:h-[30%] h-[25%]">
                                        <h2 className="text-[#BBB] py-2">10/07/2022 - há 2 dias</h2>
                                        <Link to=""><h1 className="pb-5 mSM:text-[1.5rem] text-[2rem] mSM:leading-[1.8rem] leading-[2rem] text-white font-medium hover:text-[#02d96d]">{post[0].title}</h1></Link>
                                    </div>
                                </section>

                                <div className="mXL:hidden w-[40%] flex flex-col justify-between">
                                    {post.slice(1).map((post: IPost, index: number) => (
                                        <section className="flex justify-between" key={index}>
                                            <div className="w-full flex items-center gap-6 justify-center">
                                                <div className="w-[30%] h-[7rem] overflow-hidden rounded-xl">
                                                    <Link to=""><img className="w-full h-full object-cover hover:scale-125" src={post.img} /></Link>
                                                </div>
                                                <div className="w-[70%]">
                                                    <h2 className="text-[#02d96d] py-1  font-medium">{post.label}</h2>
                                                    <Link to=""><h1 className="text-[1rem] leading-[1.4rem] text-white font-medium hover:text-[#02d96d]">{post.title}</h1></Link>
                                                </div>
                                            </div>
                                        </section>
                                    ))}
                                </div>

                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div >
    );
}