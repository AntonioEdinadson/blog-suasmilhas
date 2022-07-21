import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Services from "../../services/api";
import { IPost } from "../../types/IPost";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ICard } from "../../types/ICard";
import API from "../../services/api2";

export const Cards = () => {

    const [cards, setCards] = useState<ICard[]>([]);

    useEffect(() => {
        GetAllCards();
    }, []);

    const GetAllCards = async () => {
        const data = await API.GetALLCards();
        setCards(data.cartoes);
    }

    return (
        <>
            <Swiper
                slidesPerView={3}
                loop={true}
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
                {cards.slice(0, 10).map((card: ICard, index: number) => (
                    <SwiperSlide key={index}>
                        <section className="relative w-full rounded overflow-hidden border p-4">
                            <div className="flex flex-col gap-4">
                                <div className="w-full flex items-center gap-4">
                                    <div className="w-[30px] h-[30px] flex items-center justify-center rounded-full border-2 border-[#00e170] font-semibold">{index+1}</div>
                                    <img src={card.icone} alt={card.nome} className="w-[calc(100%-60px)]" />
                                </div>
                                <div className="w-full">
                                    <h2 className="font-semibold text-[#00e170]">{card.nome}</h2>
                                    <h3 className="text-[.8rem]">PONTOS POR US$: {card.pontos.substring(0, 3)}</h3>
                                    <h3 className="text-[.8rem]">ANUIDADE: {card.anuidade}</h3>
                                </div>
                            </div>
                        </section>
                    </SwiperSlide>
                ))}

            </Swiper>
        </>
    );
}