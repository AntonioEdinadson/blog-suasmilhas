import axios from 'axios';
import { ICompanies } from '../types/ICompanies';

const http = axios.create({
    baseURL: 'http://localhost:4000',
    headers: { "Content-Type": "application/json" },
});



const Services = {
    GetPosts: () => {
        return [
            {
                title: "Viagem chegando? Abra sua conta na Nomad e economize dinheiro em 54 países e Territórios dos EUA",
                subTitle: "Aeroportos de Guarulhos e Viracopos têm taxas reajustadas em quase 14%",
                img: "https://passageirodeprimeira.com/wp-content/uploads/2021/08/passageirodeprimeira.com-conheca-a-nomad-uma-conta-corrente-digital-e-gratuita-nos-estados-unidos-nomad-2-1.png",
                label: "Promoções",
            },
            {
                title: "Serviço de tags de pedágio do Itaú será gratuito para todos os correntistas",
                subTitle: "Aeroportos de Guarulhos e Viracopos têm taxas reajustadas em quase 14%",
                img: "https://passageirodeprimeira.com/wp-content/uploads/2021/09/passageirodeprimeira.com-itau-lanca-tag-de-pedagios-e-estacionamentos-sem-mensalidade-para-todos-os-clientes-do-banco-tag-itau-connect-car.png",
                label: "Promoções",
            },
            {
                title: "Rappi e Visa sorteiam três pacotes para a Copa do Mundo e vouchers semanais de 1 mil reais",
                subTitle: "Aeroportos de Guarulhos e Viracopos têm taxas reajustadas em quase 14%",
                img: "https://files.tecnoblog.net/wp-content/uploads/2021/01/rappibank-e1610052421781.png",
                label: "Cartões de Crédito",
            },
            {
                title: "Corre! Clube TudoAzul por R$15 por mês durante um ano",
                subTitle: "Aeroportos de Guarulhos e Viracopos têm taxas reajustadas em quase 14%",
                img: "https://passageirodeprimeira.com/wp-content/uploads/2021/05/passageirodeprimeira.com-tudoazul-oferece-30-de-desconto-nos-3-primeiros-meses-do-clube-tudoazul-tudoazul.png",
                label: "Programas de Fidelidade",
            },
            {
                title: "Aeroporto de Brasília inaugura loja com produtos de marca própria",
                subTitle: "Aeroportos de Guarulhos e Viracopos têm taxas reajustadas em quase 14%",
                img: "https://passageirodeprimeira.com/wp-content/uploads/2022/07/passageirodeprimeira.com-aeroporto-de-brasilia-abre-loja-com-produtos-de-marca-propria-design-sem-nome-91.jpg",
                label: "Nóticias",
            },
            {
                title: "Rappi e Visa sorteiam três pacotes para a Copa do Mundo e vouchers semanais de 1 mil reais",
                subTitle: "Aeroportos de Guarulhos e Viracopos têm taxas reajustadas em quase 14%",
                img: "https://files.tecnoblog.net/wp-content/uploads/2021/01/rappibank-e1610052421781.png",
                label: "Cartões de Crédito",
            },
            {
                title: "Corre! Clube TudoAzul por R$15 por mês durante um ano",
                subTitle: "Aeroportos de Guarulhos e Viracopos têm taxas reajustadas em quase 14%",
                img: "https://passageirodeprimeira.com/wp-content/uploads/2021/05/passageirodeprimeira.com-tudoazul-oferece-30-de-desconto-nos-3-primeiros-meses-do-clube-tudoazul-tudoazul.png",
                label: "Programas de Fidelidade",
            },
            {
                title: "TudoAzul oferece até 10 pontos por real gasto no Extra",
                subTitle: "Aeroportos de Guarulhos e Viracopos têm taxas reajustadas em quase 14%",
                img: "https://www.extra-imagens.com.br/HotSite/2022/B2B/Acumulo/B2B_TudoAzul/10x1/07-Julho/12.07%20-%2016.07/11-TA-10x1-Desk.jpg",
                label: "Programas de Fidelidade",
            },
            {
                title: "Aeroportos de Guarulhos e Viracopos têm taxas reajustadas em quase 14%",
                subTitle: "Aeroportos de Guarulhos e Viracopos têm taxas reajustadas em quase 14%",
                img: "https://passageirodeprimeira.com/wp-content/uploads/2022/01/passageirodeprimeira.com-embarque-e-desembarque-internacionais-da-gol-voltam-ao-terminal-2-de-guarulhos-terminal-2-guarulhos-gru.jpg",
                label: "Nóticias",
            },
            {
                title: "Nova campanha do Bradesco oferece isenção de anuidade de cartões por tempo indeterminado sem gasto mínimo mensal",
                subTitle: "Aeroportos de Guarulhos e Viracopos têm taxas reajustadas em quase 14%",
                img: "https://passageirodeprimeira.com/wp-content/uploads/2021/07/passageirodeprimeira.com-promocao-do-bradesco-oferece-isencao-de-anuidade-por-tempo-indeterminado-em-cartoes-de-credito-bradesco-tpc-the-platinum-card.png",
                label: "Cartões de Crédito",
            },
            {
                title: "Nomad oferece Priority Pass aos 200 primeiros que investirem na plataforma",
                subTitle: "Aeroportos de Guarulhos e Viracopos têm taxas reajustadas em quase 14%",
                img: "https://passageirodeprimeira.com/wp-content/uploads/2022/07/passageirodeprimeira.com-pp-11-anos-nomad-oferece-priority-pass-aos-200-primeiros-que-investirem-na-plataforma-design-sem-nome31.png",
                label: "Nóticias",
            },
            {
                title: "Nomad oferece Priority Pass aos 200 primeiros que investirem na plataforma",
                subTitle: "Aeroportos de Guarulhos e Viracopos têm taxas reajustadas em quase 14%",
                img: "https://passageirodeprimeira.com/wp-content/uploads/2022/07/passageirodeprimeira.com-pp-11-anos-nomad-oferece-priority-pass-aos-200-primeiros-que-investirem-na-plataforma-design-sem-nome31.png",
                label: "Nóticias",
            },
            {
                title: "Nomad oferece Priority Pass aos 200 primeiros que investirem na plataforma",
                subTitle: "Aeroportos de Guarulhos e Viracopos têm taxas reajustadas em quase 14%",
                img: "https://passageirodeprimeira.com/wp-content/uploads/2022/07/passageirodeprimeira.com-pp-11-anos-nomad-oferece-priority-pass-aos-200-primeiros-que-investirem-na-plataforma-design-sem-nome31.png",
                label: "Nóticias",
            },
            {
                title: "Nomad oferece Priority Pass aos 200 primeiros que investirem na plataforma",
                subTitle: "Aeroportos de Guarulhos e Viracopos têm taxas reajustadas em quase 14%",
                img: "https://passageirodeprimeira.com/wp-content/uploads/2022/07/passageirodeprimeira.com-pp-11-anos-nomad-oferece-priority-pass-aos-200-primeiros-que-investirem-na-plataforma-design-sem-nome31.png",
                label: "Nóticias",
            },
            {
                title: "Nomad oferece Priority Pass aos 200 primeiros que investirem na plataforma",
                subTitle: "Aeroportos de Guarulhos e Viracopos têm taxas reajustadas em quase 14%",
                img: "https://passageirodeprimeira.com/wp-content/uploads/2022/07/passageirodeprimeira.com-pp-11-anos-nomad-oferece-priority-pass-aos-200-primeiros-que-investirem-na-plataforma-design-sem-nome31.png",
                label: "Nóticias",
            },
            {
                title: "Serviço de tags de pedágio do Itaú será gratuito para todos os correntistas",
                subTitle: "Aeroportos de Guarulhos e Viracopos têm taxas reajustadas em quase 14%",
                img: "https://passageirodeprimeira.com/wp-content/uploads/2021/09/passageirodeprimeira.com-itau-lanca-tag-de-pedagios-e-estacionamentos-sem-mensalidade-para-todos-os-clientes-do-banco-tag-itau-connect-car.png",
                label: "Promoções",
            },
            {
                title: "Rappi e Visa sorteiam três pacotes para a Copa do Mundo e vouchers semanais de 1 mil reais",
                subTitle: "Aeroportos de Guarulhos e Viracopos têm taxas reajustadas em quase 14%",
                img: "https://files.tecnoblog.net/wp-content/uploads/2021/01/rappibank-e1610052421781.png",
                label: "Cartões de Crédito",
            },
            {
                title: "Corre! Clube TudoAzul por R$15 por mês durante um ano",
                subTitle: "Aeroportos de Guarulhos e Viracopos têm taxas reajustadas em quase 14%",
                img: "https://passageirodeprimeira.com/wp-content/uploads/2021/05/passageirodeprimeira.com-tudoazul-oferece-30-de-desconto-nos-3-primeiros-meses-do-clube-tudoazul-tudoazul.png",
                label: "Programas de Fidelidade",
            },
            {
                title: "Aeroporto de Brasília inaugura loja com produtos de marca própria",
                subTitle: "Aeroportos de Guarulhos e Viracopos têm taxas reajustadas em quase 14%",
                img: "https://passageirodeprimeira.com/wp-content/uploads/2022/07/passageirodeprimeira.com-aeroporto-de-brasilia-abre-loja-com-produtos-de-marca-propria-design-sem-nome-91.jpg",
                label: "Nóticias",
            },
            {
                title: "Rappi e Visa sorteiam três pacotes para a Copa do Mundo e vouchers semanais de 1 mil reais",
                subTitle: "Aeroportos de Guarulhos e Viracopos têm taxas reajustadas em quase 14%",
                img: "https://files.tecnoblog.net/wp-content/uploads/2021/01/rappibank-e1610052421781.png",
                label: "Cartões de Crédito",
            },
            {
                title: "Corre! Clube TudoAzul por R$15 por mês durante um ano",
                subTitle: "Aeroportos de Guarulhos e Viracopos têm taxas reajustadas em quase 14%",
                img: "https://passageirodeprimeira.com/wp-content/uploads/2021/05/passageirodeprimeira.com-tudoazul-oferece-30-de-desconto-nos-3-primeiros-meses-do-clube-tudoazul-tudoazul.png",
                label: "Programas de Fidelidade",
            },
            {
                title: "TudoAzul oferece até 10 pontos por real gasto no Extra",
                subTitle: "Aeroportos de Guarulhos e Viracopos têm taxas reajustadas em quase 14%",
                img: "https://www.extra-imagens.com.br/HotSite/2022/B2B/Acumulo/B2B_TudoAzul/10x1/07-Julho/12.07%20-%2016.07/11-TA-10x1-Desk.jpg",
                label: "Programas de Fidelidade",
            }

        ]
    },

    GetQuotes: () => {
        return [
            {
                name: ""
            }
        ];
    },

    GetCompanies: () => {
        return [
            {
                "id": 2,
                "category_id": 1,
                "category": "Platinum/Black",
                "name": "LATAM PASS",
                "points": [20, 700]
            },
            {
                "id": 8,
                "category_id": 2,
                "category": "",
                "name": "LATAM PASS",
                "points": [20, 700],
            },
            {
                "id": 1,
                "category_id": 4,
                "category": "",
                "name": "SMILES",
                "points": [20, 700],
            },
            {
                "id": 3,
                "category_id": 5,
                "category": "",
                "name": "TUDO AZUL",
                "points": [12, 360],
            }
        ]
    }
}

export default Services;