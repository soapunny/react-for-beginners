import React from "react";

function CoinTracker() {
    const INIT_COINS = [];
    const [isLoading, setLoading] = React.useState(true);
    const [dollar, setDollar] = React.useState(0);
    const [coins, setCoins] = React.useState(INIT_COINS);
    React.useEffect(() => {
        const coins 
            = fetch("https://api.coinpaprika.com/v1/tickers")
                .then(response => response.json()).then(json => {
                    setCoins(value => json);
                }).then(json =>{
                    setLoading(value => false);
                });

    }, []);

    const onChange = (evt) => {
        setDollar(value => evt.target.value);
    }

    return(
        <div>
            <h1>Coins ({coins.length})</h1>
            {isLoading ? <strong>Loading...</strong> : 
            <div>
                <label htmlFor="money">$ </label>
                <input placeholder="Money to buy" onChange={onChange} type="text" value={dollar} id="money" />
                <select>
                {coins.map((coin) => 
                    <option key={coin.id}>
                        Buy {coin.name} ({coin.symbol}) - {dollar/coin.quotes.USD.price} 
                    </option>
                )}
                </select>
            </div>}
        </div>
    );
}

export default CoinTracker;