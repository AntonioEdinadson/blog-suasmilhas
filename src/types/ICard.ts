export interface ICard {
    posicao: number;
    nome: string;
    icone: string;
}

export interface ICards extends ICard {
    pontos: string;
    salas: string;
    obs: string;
    anuidade: string;
    emissor: string;
    bandeira: string;
    segmento: string;
    lk_gratis: boolean;
    alguma_sala_gratis: boolean;
    lk_pago: boolean;
    lk_alguns_acessos: boolean;
}