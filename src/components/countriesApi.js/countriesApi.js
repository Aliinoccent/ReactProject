import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CountriesSearch from "./countriesSearch";
import {useDispatch,useSelector} from 'react-redux'

const CounthiesApi = () => {
  const dispatch=useDispatch();
  const data= useSelector(state=>state.countries);
  // const [data, setData] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchapi = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        dispatch({type:'allCountries', payload: response.data});
        debugger
        // setData(response.data);
      } catch (error) {
        console.log("API error looking", error);
      }
    };
    fetchapi();
  }, []);

  return (
    <div className="container d-flex justify-content-center align-items-center w-100 flex-column">
      <h1 className="h1 pt-1 text-primary">Countries Data</h1>
      <div className="d-flex justify-content-between container"><div><CountriesSearch/></div>< div><Link to='/userForm'>userForm</Link></div></div>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Area</th>
            <th>Capital</th>
            <th>Population</th>
            <th>Flag</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>
                <Link to="/userData" state={item.name.common}>
                  {item.name.common}
                </Link>
              </td>
              <td>{item.area}</td>
              <td>{item.capital}</td>
              <td>{item.population}</td>
              <td>
                <img
                  src={item.flags["png"]}
                  alt={item.name.common}
                  className="img-thumbnail rounded"
                  style={{ height: 50, width: 50 }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CounthiesApi;
