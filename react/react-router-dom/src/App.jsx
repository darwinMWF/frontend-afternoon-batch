// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Nav } from "./component/navibar/nav";
import { Profile } from "./pages/user/userProfile";
import { Register } from "./pages/auth/registerFom";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <>
             <h1>this is home</h1>
            </>
          }
        />
        <Route
          path="/register"
          element={
            <Register/>
          }
        />
        <Route
          path="/createpost"
          element={
            <>
             <h1>this is createpost</h1>
            </>
          }
        />
        <Route path="/user/:userid" element={<Profile/>}/>
        {/* <Route path="/about" element={<h1>this is about</h1>} />
        <Route path="/login" element={<h1>this is login</h1>} />
        <Route path="/post" element={<h1>this is post</h1>} /> */}
      </Routes>
    </>
  );
}

export default App;
