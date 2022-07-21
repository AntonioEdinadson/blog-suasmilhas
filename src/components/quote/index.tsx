export const Quotes = () => {

    const data = {
        hotmilhas: [
            {
                name: "TudoAzul",
                quotes: [
                    {
                        total: "50K",
                        value: 21.8
                    },
                    {
                        total: "100K",
                        value: 23.50
                    },
                    {
                        total: "200K",
                        value: 25.25
                    }
                ]
            },
            {
                name: "Smiles",
                quotes: [
                    {
                        total: "50K",
                        value: 21.8
                    },
                    {
                        total: "100K",
                        value: 23.50
                    },
                    {
                        total: "200K",
                        value: 25.25
                    }
                ]
            },
            {
                name: "Latam",
                quotes: [
                    {
                        total: "50K",
                        value: 21.8
                    },
                    {
                        total: "100K",
                        value: 23.50
                    },
                    {
                        total: "200K",
                        value: 25.25
                    }
                ]
            }
        ]
    };

    return (
        <div className="w-full py-2">
            <div className="mmMD:w-[85%] mSM:w-[95%] mmSD:w-[80%] w-[70%] max-w-[1680px] mx-auto flex items-center  justify-between gap-2 animate-pulse overflow-auto text-[.7rem] ">
                <p className="text-[#00e170] font-medium">HOTMILHAS</p>

                {data.hotmilhas.map((quote, index) => (
                    <div className="text-[#FFF] flex items-center gap-5" key={index}>
                        <p className="font-medium">{quote.name.toUpperCase()}</p>

                        {quote.quotes.map((value, index) => (
                            <div className="text-[#BBB]" key={index}>
                                <p className="text-[.8rem]">{value.total}: {value.value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
                            </div>
                        ))}

                    </div>
                ))}

            </div>
        </div>
    );
}