import { useState, useEffect } from "react";

export const Effect = () => {
  const [postdata, setData] = useState([]);

  useEffect(() => {
    const data = fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => {
        setData([...res]);
      })
    return ()=>{
        setData([])
    }
  }, []);
  return <h2>hello effect</h2>;
};
