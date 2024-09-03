import { act } from "react";

const intialstate = {
  countries: [],
  user: [],
};
const Reducer = (state = intialstate, action) => {
  switch (action.type) {
    case "allCountries":
      return { ...state, countries: action.payload };
    case "userForm":
      //   const   id=state.user.length+1;
      //   action.payload={...action.payload ,id:id};
      return { ...state, user: [...state.user, action.payload] };
    case "delete":
      //   debugger
      return {
        ...state,
        user: state.user.filter((item) => item.id !== action.payload),
      };
    // case 'singlePerson':
    //     debugger
    //     const userId=action.payload;
    //     const userDate=state.user.find(id=>id.id===userId);
    //     console.log(userDate)
    //     return {...state,selectedUser:userDate}

    case "update":
    const { id, email, pas, city } = action.payload;
    const updatedUsers = state.user.map((item) =>
        item.id === id ? { ...item, email, pas, city } : item
      );
      return { ...state, user: updatedUsers };
    default:
      return state;
  }
};
export default Reducer;
