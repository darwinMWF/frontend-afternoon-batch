{
  /* <h1 className="firstHead">hello</h1>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum earum,
  molestias amet ullam veniam dolore nihil omnis assumenda, fugit pariatur
  eos sunt nulla, beatae aspernatur distinctio quia temporibus alias odio!
</p>
<Grit/> */
}
{
  /* <Card
  data="sky bag is one of famous bag company "
  cardTitle="sky-Bags"
  cardImg="https://th.bing.com/th/id/OIP.Gr7hcjTcqf6vnQBkv0kfbgHaFj?w=202&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"
/>
<Card
  data="titan watch "
  cardTitle="watch"
  cardImg="https://th.bing.com/th/id/OIP.Gr7hcjTcqf6vnQBkv0kfbgHaFj?w=202&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"
/>
*/
}
{
  /* {name} */
}
{
  /* {Arry} */
}
{
  /* {data} */
}

// import Grit from "./component/grit/grit";

// import "./App.css";
// import Card from "./component/card/card";
// import List from "./component/List/list";

// const heading = {
//   color: "blue",
//   fontSize: "4rem",
// };
// [variableName,variable-Ko-Update-Krne-wala-function]
// const [name, setName] = useState("mukesh");

// const paragraph = { textTransform: "capitalize" };
// const Arry = ["mukesh ", " naresh", " suresh", " mahesh"];
// const brry = [<h1>mukesh</h1>, <h1>suersh</h1>, <h1>mahesh</h1>];

// const handleClick = () => {
//   alert("button clicked !");
//   setName("suresh");
// };

// const HandleChange = (event) => {
// name = event.target.value
// console.log(name)

//   setName(event.target.value);
// };

{
  /* <List /> */
}
{
  /* <Cardlist/> */
}
{
  /* <button onClick={function(){
  handleClick()
}}>button</button>

<input type="text" onChange={HandleChange} />
{name} */
}
import Cardlist from "./component/card/cardlist";
import { useState } from "react";
import Sculpture from "./component/sculpture/sculpture";
// hooks - reacts in built function to manage state
// state -  a data can changeable

function App() {
  // let sum = 0;

  // hooks
  // useState

  const [sum, setSum] = useState(0);
  const [myData, setData] = useState({ name: "mueksh", age: 25 });
  const [number, setNumber] = useState(0);
  console.log(sum);

  function handlePlus() {
    if (sum != 10) {
      setSum(function(value){
        return value+1
      });
    }
  }

  function handleMinus() {
    if (sum != 0) {
      setSum(sum - 1);
    }
  }

  function handleChange() {
    setData({ ...myData, name: "ajay", age: 48 });
  }
  return (
    <>
      {/* state management */}
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          border: "2px solid",
          height: "100vh",
        }}
      >
        <h1>{sum}</h1>
        <div className="btns">
          <button onClick={handlePlus}>+</button>
          <button onClick={handleMinus}>-</button>
        </div>
      </div> */}

      {/* <Sculpture /> */}
      {/* <h1>{myData.name}</h1>
      <p>{myData.age}</p>
      <button onClick={handleChange}>changeData</button> */}

      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(function (oldValues) {
            return oldValues + 1;
          });
          setNumber(function (oldValues) {
            return oldValues + 1;
          });
          setNumber(function (oldValues) {
            return oldValues + 1;
          });
          setNumber(function (oldValues) {
            return oldValues + 1;
          });
        }}
      >
        +3
      </button>
    </>
  );
}

export default App;
