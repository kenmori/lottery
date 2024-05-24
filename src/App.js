import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";
import Web3 from "./web3";
import lottery from "./lottery";

const App = () => {
  const [state, setState] = React.useState({manager: '', players: [], balance: '', value: ''});
  useEffect(() => {
    async function fetchManager(){
      const manager = await lottery.methods.manager().call();
      const players = await lottery.methods.getPlayers().call();
      const balance = await Web3.eth.getBalance(lottery.options.address);
      setState({manager, players, balance, value: ''})
    }
    fetchManager()
  }, []);
  return (
      <div className="App">
       {state.manager}
       there ar currently {state.players.length} people entered,
       competing to win {Web3.utils.fromWei(state.balance, 'ether')} ether!

       <div>
        <input value={state.value} onChange={(event) => setState((draft) => ({...draft, value: event.target.value})) } />
        <button>Enter</button>
       </div>
      </div>
    );
  }
export default App;
