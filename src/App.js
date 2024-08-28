import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Body from "./components/body";
import Api from "./components/compani_task.js/apifetch";
import CountriesApi from "./components/countriesApi.js/countriesApi";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from 'react';
import CountriesData from "./components/countriesApi.js/countryData";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<CountriesApi />}/>
          <Route path="/userData" element={<CountriesData />}/>
        </Routes>
      </Router>
      {/* <Header/>
      <Body/>
      <Api/> */}
    </div>
  );
}

export default App;
