import React from "react";
import Home from "./pages/Home";
import GlobalStyle from "./components/GlobalStyles";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Home />
    </div>
  );
}

export default App;
