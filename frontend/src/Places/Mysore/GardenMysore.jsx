import GardenData from "./Garden.json";

function GardenMysore() {
  return (
    <>
      {GardenData.map((gard) => (
        <div className="card mb-3 Zoo cardD ">
          <img
            src={gard.src}
            className="card-img-top"
            alt="..."
            style={{ height: "600px", objectFit: "cover" }}
          />
          <div className="card Zoo ">
            <h5 className="text-title">{gard.title}</h5>
            <p className="card-text text">{gard.description}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default GardenMysore;
