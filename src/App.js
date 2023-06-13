import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { useGlobalContext } from "./context";
import CartContainer from "./components/CartContainer";

function App() {
  const { loading } = useGlobalContext();

  if (loading) {
    return <div className="loading">...Loading</div>;
  }
  return (
    <div className="App">
      <Navbar />
      <CartContainer />
    </div>
  );
}

export default App;
