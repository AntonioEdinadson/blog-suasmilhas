import RouterList from "./routes";
import { IoClose } from 'react-icons/io5'
import { useState } from "react";
import { Announcement } from "./components/announcement";

const App = () => {

  const [announcement, setAnnouncement] = useState(true);

  return (
    <div className="">
      <RouterList></RouterList>

      {announcement &&
        <div className="fixed bottom-0 w-[100%] h-[70px] flex justify-center z-50">
          <section className="relative mSM:w-[85%] mmSD:w-[65%] w-[40%] bg-[#919191] opacity-80">
            <Announcement />
            <div className="absolute top-0 right-0 w-[15px] h-[15px] bg-black bg-opacity-40 mx-[-18px]">
              <IoClose className="text-white cursor-pointer" />
            </div>
          </section>
        </div>
      }

    </div>
  );
}
export default App
