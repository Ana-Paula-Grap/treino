import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Home from "./pages/home";
import Cadastro from "./pages/cadastro";

function App() {
  return (
    <Routes>
      <Route path="/cadastro">
        <Cadastro />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Routes>
  );
}

export default App;
