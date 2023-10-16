import { sculptureList } from "../../scuptureList";
import { useState } from "react";

const Sculpture = () => {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const List = sculptureList[index];

  function HandleClick() {
    if (index !== sculptureList.length) {
      setIndex(index + 1);
      setShowMore(false)
    }
  }

  function handleShow() {
    setShowMore(!showMore);
  }

  return (
    <>
      {index !== sculptureList.length ? (
        <>
          <button onClick={HandleClick}>next</button>
          <h1>
            {List.name} By {List.artist}
          </h1>
          <p>{index + 1} of 12</p>
          <img src={List.url} alt={List.alt} />
          <p>
            <button onClick={handleShow}>
              {showMore == false ? "show" : "hide"}
            </button>
          </p>

          {showMore !== false && <p>{List.description}</p>}
        </>
      ) : (
        <p>no more data</p>
      )}
    </>
  );
};

export default Sculpture;
