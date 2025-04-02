import { Link } from "react-router-dom";
import Tourdata from "./Tour.json";

function Tour() {
  return (
    <>
      <div className="second">
        <div className="elements">
          <div className="el-row">
            {Tourdata.map((tour) => (
              <div className="card elem-1 Zoo">
                <img src={tour.src} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="text-title">
                    <b>{tour.title}</b>
                  </h5>
                  <p className="card-text text">{tour.body}</p>
                  <Link to={tour.link}>
                    <a href="#" className="btn btn-primary">
                      {tour.tag}
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Tour;
