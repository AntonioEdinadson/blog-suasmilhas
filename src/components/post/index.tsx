import { Link } from "react-router-dom";
import { IPost } from "../../types/IPost";

export const Post = ({ img, label, title }: IPost) => {
    return (
        <div className="mSM:flex-col w-full flex gap-[1rem] items-center border-b border-[#CECECE] pb-[1.5rem]">
            <div className="mSM:w-[100%] mmSD:w-[35%] w-[30%] rounded overflow-hidden">
                <Link to=""><img src={img} alt={title} className="w-full hover:scale-125" /></Link>
            </div>
            <div className="mSM:w-[100%] mmSD:w-[65%] w-[70%]">
                <span className="font-medium text-[#19d570]">{label}</span>
                <Link to=""><h2 className="mmSD:text-[1.3rem] mmSD:leading-[1.3rem] mSM:text-[1.5rem] mSM:leading-[1.5rem] text-[1.5rem] leading-[1.5rem] text-[#262626] hover:text-[#02d96d]">{title}</h2></Link>
            </div>
        </div>
    );
}