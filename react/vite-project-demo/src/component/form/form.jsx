

import { useState } from "react";

const InputItem = () => {

    const [value,setValue] = useState("");

    function handleInput(event){
        setValue(event.target.value)
        console.log(event.target.value)
      }
  return (
    <>
      <input type="text" onChange={handleInput} value={value} />
      {/* <button>{value}</button> */}
    </>
  );
};

export default InputItem;

// function InputItem(){

// }

// const NEwfunction = function (){

// }

// NEwfunction()
