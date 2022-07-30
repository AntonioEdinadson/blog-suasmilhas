import favicon from '/img/favicon.png';
import { IQuote } from "../../types/IQuote";

export const QuoteResult = ({ days, value }: IQuote) => {

    return (
        <div className="w-full my-[1rem]">
            <div className="bg-[#00e170] rounded-t text-center py-[.5rem]">
                <span className="font-semibold text-[#262626]">
                    {days > 1
                        ? `Pagamento em ${days} dias`
                        : `Pagamento em ${days} dia`
                    }
                </span>                
            </div>
            <div className="w-full bg-[#414141] rounded-b p-[2rem] text-center flex items-center gap-2 justify-center">
                <span className="p-1 block text-[.6rem] rounded bg-[#00e170] font-bold">HOTMILHAS</span>
                <span className="text-white text-[1.5rem]">{value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
            </div>
        </div>
    );
}