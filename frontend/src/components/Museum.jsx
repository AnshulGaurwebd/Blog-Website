import MuseumData from "./Museum.json";
function Museum() {
  return (
    <>
      {MuseumData.map((muse) => (
        <div class="card mb-3 Zoo cardD">
          <img
            src={muse.src}
            class="card-img-top"
            alt="..."
            style={{ height: "600px", objectFit: "cover" }}
          />
          <div class="card Zoo">
            <h5 class="text-title">{muse.title}</h5>
            <p class="card-text text">{muse.description}</p>
            <p className="card-text hotel-text text">
              Check out for visit{" "}
              <a href={muse.link} target="_blank">
                Location
              </a>
              !
            </p>{" "}
          </div>
        </div>
      ))}
    </>
  );
}

export default Museum;
