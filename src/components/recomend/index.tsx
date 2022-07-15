import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Services from "../../services/api";
import { IPost } from "../../types/IPost";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Recommend = () => {

    const [recommendations, setRecommendations] = useState<IPost[]>([]);

    useEffect(() => {
        GetRecommations();
    }, []);

    const GetRecommations = async () => {
        const data = await Services.GetPosts();
        setRecommendations(data);
    }

    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                navigation={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
                modules={[Navigation, Autoplay]}
                className="mySwiper"
            >
                {recommendations.map((recomend: IPost, index: number) => (
                    <SwiperSlide key={index}>
                        <section className="relative w-full h-[200px] rounded overflow-hidden">
                            <Link to=""><img src={recomend.img} alt="" className="w-full h-full object-cover" /></Link>
                            <div className="w-full h-full absolute bottom-0 left-0 p-2  bg-black bg-opacity-40 flex items-end">
                                <p className="text-[#FFF] font-medium text-[1.2rem]">{recomend.title}</p>
                            </div>
                            <div className="w-full h-full absolute top-0 p-2">
                                <p className="text-[#FFF] font-medium text-[.8rem]">{recomend.label?.toLocaleUpperCase()}</p>
                            </div>
                        </section>
                    </SwiperSlide>
                ))}

            </Swiper>
        </>
    );
}