import { useState } from "react";

const AddCrypto = ({fromMessari, setRefresh}) => {
  const [code, setTitle] = useState("");
  const [name] = useState("");
  const [icon] = useState("");
  const [price] = useState("");
  const [percent_usd] = useState("");

  console.log(fromMessari)

  const addCrpto = () => {

    let newTodo

    if (code == "BTC"){
      newTodo = {
        name : fromMessari[0].name,
        code:fromMessari[0].symbol,
        icon:"https://static.coinstats.app/coins/Bitcoin6l39t.png",
        price:fromMessari[0].metrics.market_data.price_usd,
        percent_usd : fromMessari[0].metrics.market_data.percent_change_usd_last_24_hours
      }
    }else if (code == "ETH"){
      newTodo = {
        name : fromMessari[1].name,
        code:fromMessari[1].symbol,
        icon:"https://static.coinstats.app/coins/EthereumOCjgD.png",
        price:fromMessari[1].metrics.market_data.price_usd,
        percent_usd : fromMessari[1].metrics.market_data.percent_change_usd_last_24_hours
      }
    } else if (code == "ADA"){
      newTodo = {
        name : fromMessari[2].name,
        code:fromMessari[2].symbol,
        icon:"https://static.coinstats.app/coins/CardanojXddT.png",
        price:fromMessari[2].metrics.market_data.price_usd,
        percent_usd : fromMessari[2].metrics.market_data.percent_change_usd_last_24_hours
      }
    } else if (code == "BNB"){
      newTodo = {
        name : fromMessari[3].name,
        code:fromMessari[3].symbol,
        icon:"https://static.coinstats.app/coins/binancecoinOxw.png",
        price:fromMessari[3].metrics.market_data.price_usd,
        percent_usd : fromMessari[3].metrics.market_data.percent_change_usd_last_24_hours
      }
    } else if (code == "USDT"){
      newTodo = {
        name : fromMessari[4].name,
        code:fromMessari[4].symbol,
        icon:"https://static.coinstats.app/coins/TetherfopnG.png",
        price:fromMessari[4].metrics.market_data.price_usd,
        percent_usd : fromMessari[4].metrics.market_data.percent_change_usd_last_24_hours
      }
    } else if (code == "SOL"){
      newTodo = {
        name : fromMessari[5].name,
        code:fromMessari[5].symbol,
        icon:"https://static.coinstats.app/coins/solanambZ.png",
        price:fromMessari[5].metrics.market_data.price_usd,
        percent_usd : fromMessari[5].metrics.market_data.percent_change_usd_last_24_hours
      }
    } else if (code == "XRP"){
      newTodo = {
        name : fromMessari[6].name,
        code:fromMessari[6].symbol,
        icon:"https://static.coinstats.app/coins/XRPdnqGJ.png",
        price:fromMessari[6].metrics.market_data.price_usd,
        percent_usd : fromMessari[6].metrics.market_data.percent_change_usd_last_24_hours
      }
    }else if (code == "DOGE"){
      newTodo = {
        name : fromMessari[7].name,
        code:fromMessari[7].symbol,
        icon:"https://static.coinstats.app/coins/DogecoinIZai5.png",
        price:fromMessari[7].metrics.market_data.price_usd,
        percent_usd : fromMessari[7].metrics.market_data.percent_change_usd_last_24_hours
      }
    }

	  fetch('http://localhost:3000/cryptodata', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTodo)
    }).then(() => {
      setTitle("")
      setRefresh(true)
      setTimeout(() => {
				alert('Crypto Added!')
			}, 500)
    });
  }

  return (
    <div id="crypto-header" className="header">
      <h2>Add Cryptocurrency</h2>
    <select value={code} onChange={(e) => setTitle(e.target.value)}>
      <option value="select">Select One</option>
      <option value="BTC">BITCOIN</option>
      <option value="ETH">ETHEREUM</option>
      <option value="ADA" >CARDANO</option>
      <option value="BNB">BINANCECOIN</option>
      <option value="USDT">TETHER</option>
      <option value="SOL" >SOLANA</option>
      <option value="XRP" >XRP</option>
      <option value="DOGE" >DOGECOIN</option>
    </select>
    <span className="add-button" onClick={addCrpto}>Add</span>
    </div>
  );
};

export default AddCrypto;