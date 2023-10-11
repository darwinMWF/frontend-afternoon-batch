import Item from "./item";

function List(){

    return <>
    <h1>my Todo list</h1>
    <ul>
        <Item data="fruits" isDone={false}/>
        <Item data="vegetable" isDone={true}/>
        <Item data="oil" isDone={true}/>
        <Item data="paper" isDone={false}/>
    </ul>
    </>
}

export default List;