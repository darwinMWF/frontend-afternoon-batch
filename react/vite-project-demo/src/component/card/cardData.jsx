import "./cardData.css"

function Carddata({ data }) {
  return (
    <>
      <div className="dataDiv">
        <p className="card-para">{data}</p>
      </div>
    </>
  );
}

export default Carddata;
