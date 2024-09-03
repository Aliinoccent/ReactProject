import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { Link,useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
  const navigate=useNavigate();
  const paramId=useParams();
  const [updateData,setUpdateData]=useState({})
  const [submit,setsubmit]=useState(false)
  // const location = useLocation();
  // const RouteData=location.state;
  // console.log(RouteData);

  const dispatch = useDispatch();
  const users = useSelector(state => state.user); // Access the current users from the Redux store
  console.log(users)
  let [data, setData] = useState({
    id: '',
    email: '',
    pas: '',
    city: ''
  });
  useEffect(()=>{
    
  console.log(paramId.id)
    // debugger
    const userfound = users.find(user => user.id == paramId.id);
    
    console.log(userfound,'find')
    // setUpdateData(userfound) //its wrong way to set object properties or keys
    if (userfound) {
      setsubmit(true)
      setData({
        id: userfound.id,
        email: userfound.email,
        pas: userfound.pas,
        city: userfound.city
      });
    }else{
      console.log('not found data');
    }
  },[paramId,users])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    
    // Automatically set the id based on the length of the current users array
  if(submit===false){
    const newId = users.length + 1;
    const newData = { ...data, id: newId };

    console.log(newData); // Log the form data with the new id
    dispatch({type: 'userForm', payload: newData});
  // setData({
  //   email: '',
  //   pas: '',
  //   city: ''
  // })
  setData=Object.keys(data).forEach(key=>data[key]='')
  console.log(data);
  }
  else if( submit){

    dispatch({type:'update',payload:data})
    setData=Object.keys(data).forEach(key=>data[key]='')
    setsubmit(false)
    navigate('/userForm')
  
  }
   
    
  };

  return (
    <div className="container bg-dark text-white p-5 rounded">
      <Link to={'/show'}>Users List</Link>
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
