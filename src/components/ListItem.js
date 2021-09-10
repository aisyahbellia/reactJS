const ListItem = ({ crypto, setRefresh }) => {
    
    const updateCrypto = () => {
      crypto.done = !crypto.done
  
      fetch("http://localhost:3000/cryptodata/" + crypto.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(crypto)
      }).then(() => {
        console.log('updated.')
        setRefresh(true)
      })
    }
  
    const deleteCrypto = () => {
      fetch("http://localhost:3000/cryptodata/" + crypto.id, {
        method: "DELETE",
      }).then(() => {
        setTimeout(() => {
          alert('Crypto Deleted!')
        }, 500)
        setRefresh(true)
      });
    };
  
    return (
      <li>
          <div align="left">
          <table id='crypto'>
              <tbody>
                <tr key={crypto.id}>
                  <td width="10%" vlign="center"><a href={crypto.icon}>
                        <img src={crypto.icon} alt="logo" width="40px" />
                      </a>{crypto.name}</td>
                  <td width="10%">{crypto.code}</td>
                  <td width="10%">${crypto.price}</td>
                  <td width="10%">{crypto.percent_usd}</td>
                  <td width="10%">
                  <span className="delete" onClick={deleteCrypto}>Delete</span></td>
                </tr>
              </tbody>
          </table>
        </div>
      </li>
    );
  };
  
  export default ListItem;