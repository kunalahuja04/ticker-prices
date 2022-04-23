let btcws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
let tickerPrice = document.getElementById('btcusd');
let lastPrice = null;
btcws.onmessage = (event) => {
    let tickerObject = JSON.parse(event.data);
    let btcPrice = parseFloat(tickerObject.p).toFixed(2)
    tickerPrice.innerHTML = 'BTC/USD: $' + btcPrice;
    tickerPrice.style.color = !lastPrice ? 'black' : lastPrice > btcPrice ? 'red' : 'green';
    lastPrice = btcPrice;
}

let ethws = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade');
let ethTickerPrice = document.getElementById('ethusd');
let lastEthPrice = null;
ethws.onmessage = (event) => {
    let tickerObject = JSON.parse(event.data);
    let ethPrice = parseFloat(tickerObject.p).toFixed(2)
    ethTickerPrice.innerHTML = 'ETH/USD: $' + ethPrice;
    ethTickerPrice.style.color = !lastEthPrice ? 'black' : lastEthPrice > ethPrice ? 'red' : 'green';
    lastEthPrice = ethPrice;
}

let bnbws = new WebSocket('wss://stream.binance.com:9443/ws/bnbusdt@trade');
let bnbTickerPrice = document.getElementById('bnbusd');
let lastBnbPrice = null;
bnbws.onmessage = (event) => {
    let tickerObject = JSON.parse(event.data);
    let bnbPrice = parseFloat(tickerObject.p).toFixed(2)
    bnbTickerPrice.innerHTML = 'BNB/USD: $' + bnbPrice;
    bnbTickerPrice.style.color = !lastBnbPrice ? 'black' : lastBnbPrice > bnbPrice ? 'red' : 'green';
    lastBnbPrice = bnbPrice;
}

let solusdws = new WebSocket('wss://stream.binance.com:9443/ws/solusdt@trade');
let solusdTickerPrice = document.getElementById('solusd');
let lastSolusdPrice = null;
solusdws.onmessage = (event) => {
    let tickerObject = JSON.parse(event.data);
    let solusdPrice = parseFloat(tickerObject.p).toFixed(2)
    solusdTickerPrice.innerHTML = 'SOL/USD: $' + solusdPrice;
    solusdTickerPrice.style.color = !lastSolusdPrice ? 'black' : lastSolusdPrice > solusdPrice ? 'red' : 'green';
    lastSolusdPrice = solusdPrice;
}