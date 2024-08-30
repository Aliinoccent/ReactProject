import { useSelector } from "react-redux"

const ShowUser=()=>{
    const selector=useSelector(state=>state.user)
    console.log(selector,'this my data');
    return(
        <div>
            {
                selector.map(data=>(
                    <>
                    <div>{data.email}</div>
                    <div>{data.pas}</div>
                    <div>{data.city}</div>
                    </>
                ))
            }
        </div>
    )
}
export default ShowUser