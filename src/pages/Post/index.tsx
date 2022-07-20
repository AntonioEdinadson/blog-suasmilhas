import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { FaTwitter, FaFacebook, FaWhatsapp, FaTelegram } from 'react-icons/fa';
import { BsCircleFill } from "react-icons/bs";

import Services from "../../services/api";
import { IPost } from "../../types/IPost";

import { Announcement } from "../../components/announcement";
import { Navbar } from "../../components/navbar";
import { Quotes } from "../../components/quote";
import { Recommend } from "../../components/recomend";
import { Footer } from "../../components/footer";

const data = {
    title: "Aeroporto de Brasília inaugura loja com produtos de marca própria",
    subTitle: "Aeroportos de Guarulhos e Viracopos têm taxas reajustadas em quase 14%, Aeroportos de Guarulhos e Viracopos têm taxas reajustadas em quase 14%",
    img: "https://passageirodeprimeira.com/wp-content/uploads/2022/07/passageirodeprimeira.com-aeroporto-de-brasilia-abre-loja-com-produtos-de-marca-propria-design-sem-nome-91.jpg",
    label: "Nóticias;Viagens",
};

export const Post = () => {

    const [accumulatePoints, setAccumulatePoints] = useState<IPost[]>([]);
    const [post, setPost] = useState<IPost>();

    const [label, setLabel] = useState<string[]>([]);

    useEffect(() => {
        GetPost();
        GetAllAccumulatePointsPosts();
    }, []);

    const GetPost = async () => {
        setPost(data);
        setLabel(data.label.split(';'));
    }

    const GetAllAccumulatePointsPosts = async () => {
        const data = await Services.GetPosts();
        setAccumulatePoints(data);
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
                            <div className="my-[1rem]">
                                <div className="rounded overflow-hidden">
                                    <img src={post?.img} alt={post?.title} />
                                </div>
                                <p className="my-[2rem] text-[#5a5a5a] ">
                                    A Ciclic oferece seguros completos para você viajar tranquilo. Veja abaixo as principais características dos planos da empresa:
                                    Urgência Médica e Odontológica sem colocar a mão no bolso
                                    No caso de uma urgência médica ou odontológica, basta que você entrar em contato com a empresa que o encaminhará para o hospital mais próximo de sua localização. No local indicado, não é necessário pagar nada. O seguro cobre atendimento médico e hospitalar durante a sua viagem, inclusive por doença preexistente ou crônica.
                                    Extravio de bagagem
                                    O seguro oferece cobertura de até R$1.200 caso a sua mala se perca no caminho.
                                    Atraso de voo
                                    Se o voo está atrasado, você pode contar também com o Seguro Viagem da Ciclic. Os gastos com alimentação, transporte e/ou chamadas telefônicas de acordo com plano contratado, limitados a US$100. Você terá direito a esta cobertura a partir da 6ª hora de atraso.
                                    Reembolsos em caso de falência de companhias
                                    Se a companhia aérea que você voará, por acaso, fechar as portas, você estará protegido e seu bilhete será reembolsado pela Ciclic.
                                    Retorno antecipado
                                    O seguro tem uma lista com 25 motivos de cancelamento e cobre suas despesas caso precise retornar antes do previsto.
                                    Prorrogação de Estadia
                                    Caso haja prorrogação de sua volta por determinação médica, o seguro cobre sua estadia.
                                    A maior rede credenciada do mundo para assistência ao viajante
                                    São mais de 17 mil cidades com assistência 24hrs, 16 idiomas e 190 países com serviço direto.
                                    Seja qual for o motivo da sua viagem
                                    Para estudar fora, para a família ou para praticar esportes de lazer.
                                    Cobertura para qualquer trajeto
                                    Além da cobertura aérea, o seguro oferece cobertura marítima e terrestre.

                                    A Ciclic oferece seguros completos para você viajar tranquilo. Veja abaixo as principais características dos planos da empresa:
                                    Urgência Médica e Odontológica sem colocar a mão no bolso
                                    No caso de uma urgência médica ou odontológica, basta que você entrar em contato com a empresa que o encaminhará para o hospital mais próximo de sua localização. No local indicado, não é necessário pagar nada. O seguro cobre atendimento médico e hospitalar durante a sua viagem, inclusive por doença preexistente ou crônica.
                                    Extravio de bagagem
                                    O seguro oferece cobertura de até R$1.200 caso a sua mala se perca no caminho.
                                    Atraso de voo
                                    Se o voo está atrasado, você pode contar também com o Seguro Viagem da Ciclic. Os gastos com alimentação, transporte e/ou chamadas telefônicas de acordo com plano contratado, limitados a US$100. Você terá direito a esta cobertura a partir da 6ª hora de atraso.
                                    Reembolsos em caso de falência de companhias
                                    Se a companhia aérea que você voará, por acaso, fechar as portas, você estará protegido e seu bilhete será reembolsado pela Ciclic.
                                    Retorno antecipado
                                    O seguro tem uma lista com 25 motivos de cancelamento e cobre suas despesas caso precise retornar antes do previsto.
                                    Prorrogação de Estadia
                                    Caso haja prorrogação de sua volta por determinação médica, o seguro cobre sua estadia.
                                    A maior rede credenciada do mundo para assistência ao viajante
                                    São mais de 17 mil cidades com assistência 24hrs, 16 idiomas e 190 países com serviço direto.
                                    Seja qual for o motivo da sua viagem
                                    Para estudar fora, para a família ou para praticar esportes de lazer.
                                    Cobertura para qualquer trajeto
                                    Além da cobertura aérea, o seguro oferece cobertura marítima e terrestre.

                                </p>
                            </div>
                            <div className="w-full flex items-center gap-2">
                                <h2 className="py-4">Categorias</h2>
                                <div className="w-full flex gap-2 text-[#969696]">
                                    {label.map((name) => (
                                        <div className="border rounded px-2">{name}</div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <aside className="w-[30%] sticky top-0">
                            <div className="w-full h-[600px] mb-[2rem]">
                                <Announcement />
                            </div>
                            <div className="w-full flex flex-col gap-[1.2rem] py-[2rem]">
                                <h2 className="text-[1.5rem] text-[#262626]"><span className="font-medium  text-[#00e170]">acumule</span> pontos</h2>
                                {accumulatePoints.slice(0, 8).map((post: IPost, index: number) => (
                                    <div className="w-full flex items-center gap-[1rem]" key={index}>
                                        <BsCircleFill className="w-[10px] text-left text-[.8rem] text-[#00e170]" />
                                        <Link to="" className="w-[calc(100%-10px)] text-[1rem] font-medium text-[#262626] hover:text-[#00e170]"><h2>{post.title}</h2></Link>
                                    </div>
                                ))}
                            </div>
                        </aside>
                    </div>
                    <div className="w-full flex gap-[2rem] py-[2rem]">
                        <div className="w-full">
                            <Recommend />
                        </div>
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