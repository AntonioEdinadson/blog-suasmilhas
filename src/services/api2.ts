import axios from 'axios';

const API = {

    GetALLCards: async () => {
        const cards = await axios.get(`https://cartoes.melhoresdestinos.com.br/cartoes.json_=${new Date().getTime()}`);        
        return cards.data;
    }
}

export default API;