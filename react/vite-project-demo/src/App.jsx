import Grit from "./component/grit/grit";

import "./App.css";
import Card from "./component/card/card";
import List from "./component/List/list";

function App() {
  // const heading = {
  //   color: "blue",
  //   fontSize: "4rem",
  // };

  const paragraph = { textTransform: "capitalize" };
  return (
    <>
      {/* <h1 className="firstHead">hello</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum earum,
        molestias amet ullam veniam dolore nihil omnis assumenda, fugit pariatur
        eos sunt nulla, beatae aspernatur distinctio quia temporibus alias odio!
      </p>
      <Grit/> */}
      <Card
        data="sky bag is one of famous bag company "
        cardTitle="sky-Bags"
        cardImg="https://th.bing.com/th/id/OIP.Gr7hcjTcqf6vnQBkv0kfbgHaFj?w=202&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"
      />
      <Card
        data="titan watch "
        cardTitle="watch"
        cardImg="https://th.bing.com/th/id/OIP.Gr7hcjTcqf6vnQBkv0kfbgHaFj?w=202&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"
      />
      <List/>
    </>
  );
}

export default App;
