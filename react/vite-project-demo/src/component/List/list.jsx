import Item from "./item";
import { data as listData } from "../../arry";

{
  /* <Item data="fruits" isDone={false}/>
        <Item data="vegetable" isDone={true}/>
        <Item data="oil" isDone={true}/>
        <Item data="paper" isDone={false}/> */
}

const Arry = listData.map(function (item,index) {
  return <Item key={index} data={item.title} isDone={item.completed} />;
});

function List() {
  return (
    <>
      <h1>my Todo list</h1>
      <ul>{Arry}</ul>
    </>
  );
}

export default List;
