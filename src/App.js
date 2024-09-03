import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Body from "./components/body";
import Api from "./components/compani_task.js/apifetch";
import CountriesApi from "./components/countriesApi.js/countriesApi";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from 'react';
import CountriesData from "./components/countriesApi.js/countryData";
import UserForm from "./components/user form/userForm";
import ShowUser from "./components/user form/showUser";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<CountriesApi />}/>
          <Route path="/userData" element={<CountriesData />}/>
          <Route path="/userForm/:id" element={<UserForm/>}/>
          <Route path="/userForm" element={<UserForm/>}/>
          <Route path="/show" element={<ShowUser/>}/>
        </Routes>
      </Router>
      {/* <Header/>
      <Body/>
      <Api/> */}
    </div>
  );
}

export default App;
