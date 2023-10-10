import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import InputfieldWithBtn from './component/firstComponent';


// import generateRandomNumber from './exportguide';
// import { NameGenerator } from './exportguide';
// const myage = 25
// const name = "mukesh"
// const islogin = true
// console.log(islogin)

// function hero(){
//   console.log("hello this is first react lecture")
//   return 34
// }
{/* <h1>hello world</h1>
<p>hello duniya</p>
<h1>{myage}</h1>
<h1>{name}</h1>
{/* {hero()} */}
<br/>
{/* {arry[1]} */}
{/* jsx fragment */}
// {generateRandomNumber()}
// <br />
// <img src="../assets/" alt='images'/>
// {NameGenerator()} */}

// const arry = [25,23,45,78,"mukesh"]

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
  <InputfieldWithBtn btnValue="submit" intType="text" heading="text form"/>
  <InputfieldWithBtn btnValue="checked" intType="checkbox" heading="check form" message={"this is checkbox"}/>
  <InputfieldWithBtn btnValue="add" intType="password" heading="password form"/>
  </>
);

reportWebVitals();


// import export 
// Component and props 
// conditional rendering 
// arry rendering 

