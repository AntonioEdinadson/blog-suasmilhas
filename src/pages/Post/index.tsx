import { useEffect, useState } from "react";
import { Announcement } from "../../components/announcement";
import { Navbar } from "../../components/navbar";
import { Quotes } from "../../components/quote";
import { IPost } from "../../types/IPost";

import { FaTwitter, FaFacebook, FaWhatsapp, FaTelegram } from 'react-icons/fa';
import { PopularPost } from "../../components/popularPost";
import Services from "../../services/api";
import { Recommend } from "../../components/recomend";
import { Footer } from "../../components/footer";

const data = {
    title: "Aeroporto de Brasília inaugura loja com produtos de marca própria",
    subTitle: "Aeroportos de Guarulhos e Viracopos têm taxas reajustadas em quase 14%, Aeroportos de Guarulhos e Viracopos têm taxas reajustadas em quase 14%",
    img: "https://passageirodeprimeira.com/wp-content/uploads/2022/07/passageirodeprimeira.com-aeroporto-de-brasilia-abre-loja-com-produtos-de-marca-propria-design-sem-nome-91.jpg",
    label: "Nóticias",
};

export const Post = () => {

    const [popularPosts, setPopularPosts] = useState<IPost[]>([]);
    const [post, setPost] = useState<IPost>();

    useEffect(() => {
        GetPost();
        GetAllPopularPosts();
    }, []);

    const GetPost = async () => {
        setPost(data);
    }

    const GetAllPopularPosts = async () => {
        const data = await Services.GetPosts();
        setPopularPosts(data);
    }

    return (
        <div>
            <Navbar />
            <Quotes />
            <div className="mSM:w-[95%] mmMD:w-[85%] mmSD:w-[80%] w-[60%] max-w-[1680px] mx-auto my-[3rem]">
                <header className="w-full">
                    <div className="w-full h-[250px]">
                        <Announcement />
                    </div>
                </header>
                <main className="w-full">

                    <div className="flex items-start gap-[2rem] my-5">
                        <div className="w-[70%] h-[2000px]">
                            <h1 className="text-[2.5rem] leading-[2.5rem] font-extrabold py-4">{post?.title}</h1>
                            <h2 className="text-[1.2rem] text-[#828282]">{post?.subTitle}</h2>
                            <div className="w-full flex items-center gap-5 py-4">
                                <div className="flex gap-2 text-[1.3rem]">
                                    <FaFacebook />
                                    <FaTwitter />
                                    <FaWhatsapp />
                                    <FaTelegram />
                                </div>
                                <div className="flex text-[.9rem] text-[#828282] gap-2">
                                    <span>por <b>{"antonioe, suamilhas.com"}</b></span>
                                    <span>{"18/07/2022 18:50 - postado há 50min"}</span>
                                </div>
                            </div>
                        </div>

                        <aside className="w-[30%] sticky top-0">
                            <div className="w-full h-[600px]">
                                <Announcement />
                            </div>
                        </aside>
                    </div>

                </main>
            </div >
            <footer className="w-full bg-[#262626] pt-[3rem]">
                <div className="mSM:w-[95%] mmSD:w-[80%] w-[70%] mx-auto">
                    <Footer />
                </div>
            </footer>
        </div >
    );
}