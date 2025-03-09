import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Categories from "./Components/Categories";
import Products from "./Components/Products";
import BestSellers from "./Components/BestSellers";
import Footer from "./Components/Footer";
import "./App.css";
import "./index.css";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
    <div><Navbar></Navbar></div>
    <div><Categories></Categories></div>
    <div><Products></Products></div>
    <div><BestSellers></BestSellers></div>
    <div><Footer></Footer></div>
    </>
  );
}

export default App;
