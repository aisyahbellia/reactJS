import { useEffect, useState } from "react";
import ListItem from "./ListItem";

const CryptoList = ({isRefresh, setRefresh}) => {
  const [cryptocurrency, setCrypto] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/cryptodata")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCrypto(data);
      })
      .catch((err) => {
        setRefresh(false)
        if (err.name === "AbortError") {
          console.log("fetch aborted.");
        }
      });
  }, [isRefresh, setRefresh]);

  return (
    <ul id="crypto-list">
      {cryptocurrency.map((crypto) => (
        <ListItem crypto={crypto} key={crypto.id} setRefresh={setRefresh}/>
      ))}
    </ul>
  );
};

export default CryptoList;