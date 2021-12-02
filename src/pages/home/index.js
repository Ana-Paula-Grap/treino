import React from "react";

// import { Container } from './styles';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Step by Step you will learn </h1>
        <grid color="lightBlue">
          <button
            className="clicarUrl"
            rel="noopener"
            to="http://www.google.com"
            target="_blank"
            onClick={(event) => {
              event.preventDefault();
              window.open("http://www.google.com");
            }}
          >
            Abrir nova janela
          </button>

          <form>
            <button
              target="_blank"
              onClick={(event) => {
                event.preventDefault();
                console.log("click");
              }}
            >
              Cadastro
            </button>
          </form>
        </grid>
      </header>
    </div>
  );
}

export default Home;
