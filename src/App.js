import logo from './logo.svg';
import './App.css';
import Axios from "axios";
import { useEffect, useState } from "react";
import axios from 'axios';
import AddCrypto from "./components/AddCrypto";
import CryptoList from "./components/CryptoList";

function App() {
  const [isRefresh, setIsRefresh] = useState(true)

  const setRefresh = (status) => {
    setIsRefresh(status)
  }

  const [coinstats, setCoinstats] = useState([]); //to get the icon of the coins
  const [messari, setMessari] = useState([]); //to get the updating price and percentage

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    const coinstatsAPI = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=100%C2%A4cy=INR';
    const messariAPI = 'https://data.messari.io/api/v1/assets';

    const getCoinstatsData = axios.get(coinstatsAPI)
    const getMessariData = axios.get(messariAPI)
    axios.all([getCoinstatsData,getMessariData]).then(
      axios.spread((...allData) => {
        const coinstats = allData[0].data.coins
        const messari = allData[1].data.data
        const dataLenght = allData[1].data.data.length
        setCoinstats(coinstats)
        setMessari(messari)
      })
    )
  }
  

  return (
    <div className="App">
    <h1>CryptoTracker App</h1>
    <div id="table_header" >	
    </div>
    <AddCrypto fromMessari={messari} setRefresh={setRefresh}/>
    <CryptoList setRefresh={setRefresh} isRefresh={isRefresh}/>
    </div>
  );
}

export default App;
