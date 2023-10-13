import CardHead from "./cardhead";

import "./card.css"

function Card({ cardTitle, cardImg }) {
  return (
    <>
      <div className="card">
        <img src={cardImg} alt="Card-image" className="cls-img" />
        <CardHead title={cardTitle} />
      </div>
    </>
  );
}

export default Card;
