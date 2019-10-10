import React, { useState } from "react";
import ReactDOM from "react-dom";

import Header from "./header";
import Footer from "./footer";
import Content from "./content";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
