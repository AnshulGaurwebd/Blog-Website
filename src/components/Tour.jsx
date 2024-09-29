import { Link } from "react-router-dom";

function Tour() {
  return (
    <>
      <div className="second">
        <div className="elements">
          <div className="el-row">
            <div className="card elem-1 Zoo">
              <img
                src="https://images.unsplash.com/photo-1627442433449-317a17fb6211?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzJTIwamFpcHVyfGVufDB8fDB8fHww"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="text-title">
                  <b>HOTELS</b>
                </h5>
                <p className="card-text text">
                  Jaipur's hotels range from luxurious palaces to
                  budget-friendly options, offering a mix of traditional charm
                  and modern comforts. Many feature rooftop dining with stunning
                  views of the city's historic landmarks.
                </p>
                <Link to="/hotels">
                  <a href="#" className="btn btn-primary">
                    FEEL RELAXED
                  </a>
                </Link>
              </div>
            </div>
            <div className="card elem-1 Zoo">
              <img
                src="https://images.unsplash.com/photo-1705861144174-40f57206631e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2lsZGxpZmUlMjBqYWlwdXJ8ZW58MHx8MHx8fDA%3D"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="text-title">
                  <b>WILDLIFE</b>
                </h5>
                <p className="card-text text">
                  Jaipur’s wildlife features leopards, deer, and a wide range of
                  bird species, providing rich opportunities for nature lovers
                  and wildlife enthusiasts to experience diverse flora and
                  fauna.
                </p>
                <Link to="/wildlife">
                  <a href="#" className="btn btn-primary">
                    FLORA & FAUNA
                  </a>
                </Link>
              </div>
            </div>
            <div className="card elem-1 Zoo">
              <img
                src="https://images.unsplash.com/photo-1705861144570-00ede2bc7e7f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzZXVtJTIwamFpcHVyfGVufDB8fDB8fHww"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="text-title">
                  <b>MUSEUM</b>
                </h5>
                <p className="card-text text">
                  Jaipur's museums offer an immersive look into its royal past,
                  art, and traditional crafts. They provide a rich exploration
                  of the city's cultural and historical heritage, reflecting its
                  vibrant legacy.
                </p>
                <Link to="/museums">
                  <a href="#" className="btn btn-primary">
                    CREATIVITY
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="el-row">
            <div className="card elem-1 Zoo">
              <img
                src="https://images.unsplash.com/photo-1705861145407-62f12184e563?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="text-title">
                  <b>FORTS</b>
                </h5>
                <p className="card-text text">
                  Jaipur’s forts are renowned for their impressive architecture,
                  historical significance, and panoramic city views, showcasing
                  the grandeur and defensive strategies of Rajasthan’s royal
                  past.
                </p>
                <Link to="/forts">
                  <a href="#" className="btn btn-primary">
                    ANCIENT ERA
                  </a>
                </Link>
              </div>
            </div>
            <div className="card elem-1 Zoo">
              <img
                src="https://media.gettyimages.com/id/56806692/photo/high-angle-view-of-a-formal-garden-mughal-gardens-jaigarh-fort-jaipur-rajasthan-india.jpg?s=612x612&w=0&k=20&c=zlnakGqODvcuvI-dKpySsSZV6fsQrqXBW8Kf26tyy2I="
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="text-title">
                  <b>GARDENS</b>
                </h5>
                <p className="card-text text">
                  Jaipur’s gardens offer lush greenery, vibrant flowers, and
                  tranquil water features, creating serene spaces that blend
                  natural beauty with historical charm. They provide peaceful
                  retreats amidst the city’s vibrant atmosphere.
                </p>
                <Link to="/gardens">
                  <a href="#" className="btn btn-primary">
                    PEACE WITH NATURE
                  </a>
                </Link>
              </div>
            </div>
            <div className="card elem-1 Zoo">
              <img
                src="https://media.gettyimages.com/id/585021975/photo/chandpol-bazaar-near-chandpol-gate.jpg?s=612x612&w=0&k=20&c=GfEjt40FNIL1N3SobNfvcSybGZoMRkjjRJ139NAUn6c="
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="text-title">
                  <b>MARKETS</b>
                </h5>
                <p className="card-text text">
                  Jaipur’s markets are bustling hubs of color and activity,
                  offering a variety of traditional crafts, textiles, jewelry,
                  and spices, reflecting the city’s vibrant culture and rich
                  heritage.
                </p>
                <Link to="/markets">
                  <a href="#" className="btn btn-primary">
                    BUY SOMETHING
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tour;
