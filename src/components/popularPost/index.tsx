import { Link } from "react-router-dom";
import { IPost } from "../../types/IPost";

export const PopularPost = ({ img, title }: IPost) => {
    return (
        <div className="mmSD:flex-col mmMD:items-start mmSD:items-start w-full  flex gap-[1rem] items-center border-b border-[#CECECE] pb-4">
            <div className="mmMD:w-full mmSD:w-full w-[150px] h-[100px] rounded overflow-hidden">
                <Link to=""><img src={img} alt={title} className="w-full h-full object-cover hover:scale-125" /></Link>
            </div>
            <div className="mmSD:w-full mmMD:w-full w-[75%]">
                <Link to=""><h2 className="mmSD:text-[1rem] mmSD:leading-[1rem] text-[1.2rem] leading-[1.2rem] text-[#262626] hover:text-[#00e170]">{title}</h2></Link>
            </div>
        </div>
    );
};