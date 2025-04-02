import FortData from "./Fort.json";
function FortMysore() {
  return (
    <>
      {FortData.map((forts) => (
        <div class="card mb-3 Zoo cardD">
          <img
            src={forts.src}
            class="card-img-top"
            alt="..."
            style={{ height: "600px", objectFit: "cover" }}
          />
          <div class="card Zoo">
            <h5 class="text-title">{forts.title}</h5>
            <p class="card-text text">{forts.description}</p>
          </div>
        </div>
      ))}
      ;
    </>
  );
}

export default FortMysore;
