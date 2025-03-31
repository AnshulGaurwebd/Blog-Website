import { LiaStarSolid } from "react-icons/lia";
import { MdLocationOn } from "react-icons/md";
import HotelsData from "./Hotels.json";
import "./hotel.css";
function Hotels() {
  return (
    <>
      {HotelsData.map((hotel) => (
        <div className="card mb-3 Zoo card-hotel cardD  ">
          <div className="row g-0">
            <div className="col-md-4 ">
              <img
                src={hotel.src}
                className="img-fluid rounded-start hotel-image "
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h1 className="text-title">{hotel.title}</h1>
                <p className="card-text hotel-text text">
                  <MdLocationOn /> {hotel.address}
                </p>{" "}
                <p className="text">
                  This Property Offers:
                  <br />
                  {hotel.button.map((butt, index) => (
                    <button
                      key={index}
                      type="button"
                      class="btn btn-primary"
                      style={{ marginRight: "10px" }}
                    >
                      {butt}
                    </button>
                  ))}
                </p>
                <div className="text">
                  {[...Array(5)].map((_, index) => (
                    <LiaStarSolid key={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      ;
    </>
  );
}

export default Hotels;
