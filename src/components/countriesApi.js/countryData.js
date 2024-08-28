import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const CountriesData = () => {
  const location = useLocation();
  const name = location.state || "invalid name";
  // const [search,setSearch]=useState('');
  const [country, setCountry] = useState(null);
  // const [area,setArea]=useState('')
  // const [capital,setCapital]=useState('')
  // const [srcs,setSrc]=useState(null)

  const fetchapis = async () => {
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${name}`
    );
    console.log(response.data);
    setCountry(response.data[0]);
    // setCapital(response1.data[0].capital);
    // setArea(response1.data[0].area);
    // setSrc(response1.data[0].flags['png'])
    // console.log(country);
    // debugger;
  };
  useEffect(() => {
    fetchapis();
  }, []);

  if (!country) {
    return <>not found</>;
  } else {
    debugger;
    return (
      <>
        {
          <>
            <img src={country?.flags["png"]}></img>
            <div>{country?.capital}</div>
            <div>{country?.area}</div>
          </>
        }
      </>
    );
  }
};
export default CountriesData;
