import { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

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
                }}
                modules={[Navigation, Autoplay]}
                className="mySwiper"
                id="cards"
            >
                {cards.slice(0, 10).map((card: ICard, index: number) => (
                    <SwiperSlide key={index}>
                        <section className="relative w-full rounded overflow-hidden border p-2">
                            <div className="flex justify-center gap-4">
                                <div className="w-[40%]">
                                    <img src={card.icone} alt={card.nome} className="w-full" />
                                </div>
                                <div className="w-[60%]">
                                    <span>{index + 1}</span>
                                </div>
                            </div>
                        </section>
                    </SwiperSlide>
                ))}

            </Swiper>
        </>
    );
}