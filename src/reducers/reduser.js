import { act } from "react"

const intialstate={
    countries:[],
    user:[]
}
const Reducer=(state = intialstate,action)=>{

    switch(action.type){
        case 'allCountries':
            return{...state ,countries : action.payload}
        case 'userForm':
            return{...state,user:[...state.user,action.payload]}
        default:
         return state
    }


}
export default Reducer;
