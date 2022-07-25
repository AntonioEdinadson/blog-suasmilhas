import axios from 'axios';

const API = {

    GetALLCards: async () => {
        const cards = await axios.get(`https://cartoes.melhoresdestinos.com.br/cartoes.json_=${new Date().getTime()}`);
        return cards.data;
    },

    GetVocabulary: async () => {
        return [
            {
                id: 1,
                initials: 'BF',
                title: 'Black Friday',
                content: 'Black Friday é o dia que inaugura a temporada de compras natalícias com significativas promoções em muitas lojas retalhistas e grandes armazéns. É um dia depois do Dia de Ação de Graças nos Estados Unidos, ou seja, celebra-se no dia seguinte à quarta quinta-feira do mês de novembro.',
            },
            {
                id: 1,
                initials: 'BF',
                title: 'Black Friday',
                content: 'Black Friday é o dia que inaugura a temporada de compras natalícias com significativas promoções em muitas lojas retalhistas e grandes armazéns. É um dia depois do Dia de Ação de Graças nos Estados Unidos, ou seja, celebra-se no dia seguinte à quarta quinta-feira do mês de novembro.',
            },
            {
                id: 1,
                initials: 'BF',
                title: 'Black Friday',
                content: 'Black Friday é o dia que inaugura a temporada de compras natalícias com significativas promoções em muitas lojas retalhistas e grandes armazéns. É um dia depois do Dia de Ação de Graças nos Estados Unidos, ou seja, celebra-se no dia seguinte à quarta quinta-feira do mês de novembro.',
            },
            {
                id: 1,
                initials: 'BF',
                title: 'Black Friday',
                content: 'Black Friday é o dia que inaugura a temporada de compras natalícias com significativas promoções em muitas lojas retalhistas e grandes armazéns. É um dia depois do Dia de Ação de Graças nos Estados Unidos, ou seja, celebra-se no dia seguinte à quarta quinta-feira do mês de novembro.',
            },
            {
                id: 1,
                initials: 'BF',
                title: 'Black Friday',
                content: 'Black Friday é o dia que inaugura a temporada de compras natalícias com significativas promoções em muitas lojas retalhistas e grandes armazéns. É um dia depois do Dia de Ação de Graças nos Estados Unidos, ou seja, celebra-se no dia seguinte à quarta quinta-feira do mês de novembro.',
            },
            {
                id: 1,
                initials: 'BF',
                title: 'Black Friday',
                content: 'Black Friday é o dia que inaugura a temporada de compras natalícias com significativas promoções em muitas lojas retalhistas e grandes armazéns. É um dia depois do Dia de Ação de Graças nos Estados Unidos, ou seja, celebra-se no dia seguinte à quarta quinta-feira do mês de novembro.',
            },
            {
                id: 1,
                initials: 'BF',
                title: 'Black Friday',
                content: 'Black Friday é o dia que inaugura a temporada de compras natalícias com significativas promoções em muitas lojas retalhistas e grandes armazéns. É um dia depois do Dia de Ação de Graças nos Estados Unidos, ou seja, celebra-se no dia seguinte à quarta quinta-feira do mês de novembro.',
            },
            {
                id: 1,
                initials: 'BF',
                title: 'Black Friday',
                content: 'Black Friday é o dia que inaugura a temporada de compras natalícias com significativas promoções em muitas lojas retalhistas e grandes armazéns. É um dia depois do Dia de Ação de Graças nos Estados Unidos, ou seja, celebra-se no dia seguinte à quarta quinta-feira do mês de novembro.',
            },
            {
                id: 1,
                initials: 'BF',
                title: 'Black Friday',
                content: 'Black Friday é o dia que inaugura a temporada de compras natalícias com significativas promoções em muitas lojas retalhistas e grandes armazéns. É um dia depois do Dia de Ação de Graças nos Estados Unidos, ou seja, celebra-se no dia seguinte à quarta quinta-feira do mês de novembro.',
            },
        ];
    }
}

export default API;