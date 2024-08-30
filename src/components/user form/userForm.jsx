import { useState } from "react";
import { useDispatch } from "react-redux"; 
import { Link } from "react-router-dom";


const UserForm = () => {
  const dispatch=useDispatch()
  const [data, setData] = useState({
    id: '',
    email: '',
    pas: '',
    city: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log(data); // Log the form data
    dispatch({type:'userForm',payload:data})
  
  };

  return (
    <div className="container bg-dark text-white p-5 rounded">
      <Link to={'/show'}>users List</Link>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Email</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              name="pas"
              value={data.pas}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputCity">City</label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              name="city"
              value={data.city}
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      
    </div>
  );
};

export default UserForm;
