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
// import Cardlist from "./component/card/cardlist";
// import Sculpture from "./component/sculpture/sculpture";
// hooks - reacts in built function to manage state
// state -  a data can changeable

import { useState, useEffect } from "react";
import { data } from "./arry";
import InputItem from "./component/form/form";

const ArryData = data.map((item) => {
  return <li key={item.id}>{item.title}</li>;
});

function App() {
  // let sum = 0;

  // hooks
  // useState

  const [sum, setSum] = useState(0);
  const [myData, setData] = useState({ name: "mueksh", age: 25 });
  const [number, setNumber] = useState(0);
  const [Arry, setArry] = useState(ArryData);

  // console.log(sum);

  useEffect(function () {
    // console.log("hello world")
    // const newAry =[...Arry]
    // console.log(newAry)
    const data = fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

  // useEffect(function,dependecyArry)

  function handlePlus() {
    if (sum != 10) {
      setSum(function (value) {
        return value + 1;
      });
    }
  }

  function handleMinus() {
    if (sum != 0) {
      setSum(sum - 1);
    }
  }

  function handleChange() {
    const userName = prompt("enter your name");
    const userAge = prompt("enter your age");
    setData({ ...myData, name: userName, age: userAge });
  }

  function handleTodo() {
    const filterdData = data.filter(function (item) {
      if (item.completed === true) {
        return item;
      }
    });

    const newdata = filterdData.map((item) => {
      return <li key={item.id}>{item.title}</li>;
    });

    setArry([...newdata]);
  }

  function AllHandles() {
    setArry([...ArryData]);
  }

  function handleNotfiltered() {
    const filterdData = data.filter(function (item) {
      if (item.completed === false) {
        return item;
      }
    });

    const newdata = filterdData.map((item) => {
      return <li key={item.id}>{item.title}</li>;
    });

    setArry([...newdata]);
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
      <button onClick={handleChange}>changeData</button>

      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number+1);
          setNumber(number+1);
          setNumber(number+1);
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
      </button> */}

      <button onClick={AllHandles}>all</button>
      <button onClick={handleTodo}>filtered</button>
      <button onClick={handleNotfiltered}>notFiltered</button>
      {Arry}

      {/* <InputItem />
      <InputItem /> */}
    </>
  );
}

export default App;
