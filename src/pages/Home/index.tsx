import { useEffect, useState } from "react";

import { Header } from "../../components/header";
import { Navbar } from "../../components/Navbar";
import { Quotes } from "../../components/quote";

import { Recommend } from "../../components/recomend";

export const Home = () => {
    return (
        <div className="mb-[100rem]">
            <Navbar />
            <Quotes />
            <Header />
            <div className="w-[70%] h-[200px] mx-auto my-[2rem]">
                <div className="w-full h-full border-b border-[#313131] pb-[2rem]">
                    <div className="w-full h-full flex justify-center items-center text-[2rem] bg-white">
                        ANUNCIO AQUI
                    </div>
                </div>
                <section className="w-full my-[2rem]">
                    <h2 className="text-[1.5rem] text-[#FFF]"><span className="font-medium  text-[#00e170]">suasmilhas</span> recomenda</h2>
                    <div className="w-full flex gap-[2rem] py-[2rem]">
                        <div className="w-full">
                            <Recommend />
                        </div>
                    </div>
                </section>
                <main className="w-full flex gap-[2rem]">
                    <div className="w-[70%] bg-red-400">
                        POST
                    </div>
                    <aside className="w-[30%] bg-red-700">
                        ASIDE
                    </aside>
                </main>
            </div>
        </div>
    );
} 