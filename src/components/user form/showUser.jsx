import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
const ShowUser = () => {
    const [flowdata,setFlowdata]=useState({})
    const navigation=useNavigate();
    const dispatch=useDispatch();
    const selector = useSelector(state => state.user);
    console.log(selector, 'this is my data');
    const deleteData=(id)=>{
        console.log(id ,'userid')
        dispatch({type:'delete',payload:id});
        console.log(selector)

    }
    const updateData=(id)=>{
        navigation(`/userForm/${id}`)
        // dispatch({type:'singlePerson',payload:id})
        // const singleSelector=selector(state=>state.selectedUser)
    // const userfound=selector.find(singleData=>singleData.id===id)
        
    //     console.log(userfound,'updated');
    //     setFlowdata(userfound);

    }
    

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">User Information</h2>
            <div className="row">
                {selector.map((data, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">User {index + 1}</h5>
                                <p className="card-text">
                                    <strong>Email:</strong> {data.email}
                                </p>
                                <p className="card-text">
                                    <strong>Password:</strong> {data.pas}
                                </p>
                                <p className="card-text">
                                    <strong>City:</strong> {data.city}
                                </p>
                                <div><button className="btn btn-primary" onClick={()=>deleteData(data.id)}>delete</button>
                                <button className="btn btn-primary gap-2" onClick={()=>updateData(data.id)}>update</button>
                                
                                </div>
                            </div>
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ShowUser;
