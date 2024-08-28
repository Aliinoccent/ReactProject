import { act } from "react"

const intialstate={
    countries:[]
}
const Reducer=(state = intialstate,action)=>{
    switch(action.type){
        case 'allCountries':
            return{...state ,countries : action.payload}
        default:
         return state
    }


}
export default Reducer