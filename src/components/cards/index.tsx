import { ICard } from "../../types/ICard";

export const Cards = ({ posicao, icone, nome }: ICard) => {
    return (
        <div className="flex gap-4 items-center border rounded p-2 hover:bg-[#dddddd]">
            <div className="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-[#00e170]">
                <span className=" font-semibold text-white">{posicao + 1}º</span>
            </div>
            <div className="w-[calc(100%-40px)] flex items-center gap-4">
                <div className="max-w-[100px]">
                    <img src={icone} alt={nome} className="w-full"/>
                </div>
                <div>
                    <span className="mMD:text-[.9rem] text-[#828282] font-semibold">{nome}</span>
                </div>
            </div>
        </div>
    );
}