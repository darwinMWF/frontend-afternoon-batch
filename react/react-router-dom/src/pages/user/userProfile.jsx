import { useParams} from "react-router-dom";
import { useEffect, useState } from "react";
export const Profile = () => {
  const [title, setTitle] = useState("");
  const data = useParams();
  const fetchdata = async () => {
    const result = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${data.userid}`
    );
    const res = await result.json();
    setTitle(res.title);
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return <>
  <h1>{title}</h1>
  </>;
};
