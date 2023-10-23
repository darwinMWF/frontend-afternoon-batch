// import { useState } from "react";
import { useContext, useReducer } from "react";
import { useRef } from "react";
// useContext
const initialData = { name: "mukesh", age: 25 };

// action k undar 1 cheez fix he jo he
// type
// action :{
//     type:"change"
//     payload:data
// }
function Reducer(state, action) {
  //   if (action.type === "change") {
  //     return {
  //       ...state,
  //       name: action.name,
  //     };
  //   } else if (action.type === "Added") {
  //     return {
  //       ...state,
  //       age: state.age + 1,
  //     };
  //   } else if (action.type === "minus") {
  //     return {
  //       ...state,
  //       age: state.age - 1,
  //     };
  //   } else {
  //     alert("not such actio  defined");
  //   }

  switch (action.type) {
    case "change": {
      return {
        ...state,
        name: action.name,
      };
    }
    case "Added" :{
        return{
            ...state,
            age:state.age + 1
        }
    }
    case "minus" :{
        return{
            ...state,
            age:state.age - 1
        }
    }
    default :
    {
        return {...state}
    }

  }
}

export const App = () => {
  //   const [data, setdata] = useState(initialData);
  const [data, dispatch] = useReducer(Reducer, initialData);
  const btnref = useRef(0);
  console.log(btnref)
//   console.log(data);
  function handleChange(e) {
    // setdata({
    //   ...data,
    //   name: e.target.value,
    // });

    dispatch({
      type: "change",
      name: e.target.value,
    });
  }

  function handleAgeIncrement() {
    // setdata((prev) => {
    //   return {
    //     ...prev,
    //     age: prev.age + 1,
    //   };
    // });
    // console.log(btnref.current.children)
    // ref={btnref}
    dispatch({
      type: "Added",
    });

    btnref.current = btnref.current + 1
  }

  function handleAgedecrement() {
    // setdata((prev) => {
    //   return {
    //     ...prev,
    //     age: prev.age - 1,
    //   };
    // });

    

    dispatch({
      type: "minus",
    });
  }

  return (
    <>
      <input type="text" id="iname" onChange={handleChange} />
      <button onClick={handleAgeIncrement} >increment age +</button>
      <button onClick={handleAgedecrement}>decrement age -</button>
      <p>
        hello my name is {data.name}.my age is {data.age}
      </p>
      <h1>{btnref.current}</h1>
    </>
  );
};
