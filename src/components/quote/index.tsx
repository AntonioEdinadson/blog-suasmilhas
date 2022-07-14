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
        <div className="w-full bg-zinc-800 py-2">
            <div className="mSM:w-[95%] w-[70%] max-w-[1680px] mx-auto flex items-center  justify-between gap-2 animate-pulse overflow-auto">
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