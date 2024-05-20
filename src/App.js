import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";
import Web3 from "./web3";
import lottery from "./lottery";

const App = () => {
  const [manager, setManager] = React.useState("");
  useEffect(() => {
    async function fetchManager(){
      const manager = await lottery.methods.manager().call();
      setManager(manager)
    }
    fetchManager()
  }, []);
  return (
      <div className="App">
       {manager}
      </div>
    );
  }
export default App;
