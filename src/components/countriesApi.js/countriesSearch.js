import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const CountriesSearch=()=>{
    const location=useLocation();
    const name=location.state|| 'invalid name';
    const [search,setSearch]=useState('');
    const [country,setCountry]=useState([]);

     const fetchapis=async()=>{

        const response1= await axios.get(`https://restcountries.com/v3.1/name/${search}`)
            console.log(response1.data);
            
            // debugger
            setCountry(response1.data[0].name.common);
            console.log(country);    
             
        }
        useEffect(()=>{
            console.log(name,'name is this');
        })
        
    return(
        <>
        <input placeholder="enter the country name" onChange={(e)=>setSearch(e.target.value)} value={search}/>
        <button onClick={fetchapis} >click me</button>
        {
            <>
            <div>{country}</div>
            </>
               
        }
        </>
    )

}
export default CountriesSearch