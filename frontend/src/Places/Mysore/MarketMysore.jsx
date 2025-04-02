import MarketData from "./Market.json";
function MarketMysore() {
  return (
    <>
      {MarketData.map((mark) => (
        <div className="card mb-3 Zoo cardD ">
          <img
            src={mark.src}
            className="card-img-top"
            alt="..."
            style={{ height: "600px", objectFit: "cover" }}
          />
          <div className="card Zoo ">
            <h5 className="text-title">{mark.title} </h5>
            <p className="card-text text">{mark.description}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default MarketMysore;
