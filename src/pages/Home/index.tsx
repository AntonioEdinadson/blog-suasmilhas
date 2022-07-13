import { useState } from "react";
import { Header } from "../../components/header";
import { Navbar } from "../../components/Navbar";
import { Quotes } from "../../components/quote";

export const Home = () => {
    return (
        <div>
            <Navbar />
            <Quotes />
            <Header />
            <main className="w-[75%] mx-auto">
                lll
            </main>
        </div>
    );
} 