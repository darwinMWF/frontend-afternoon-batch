import Carddata from "./cardData";
import CardHead from "./cardhead";

import "./card.css"

function Card({ cardTitle, cardImg, data }) {
  return (
    <>
      <div className="card">
        <img src={cardImg} alt="Card-image" className="cls-img" />
        <CardHead title={cardTitle} />
        <Carddata data={data}/>
      </div>
    </>
  );
}

export default Card;
