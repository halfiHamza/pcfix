import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
// import Products from "./components/Products/Products";
// import ContactUs from "./components/ContactUs/ContactUs";

function App() {
  return (
    <div className="App">
      <Home />
      <Services />
    </div>
  );
}

export default App;
