import Tour from "./Tour";

function Visit() {
  return (
    <>
      <div className="front">
        <div className="cont">
          <div className="wrap">
            <div className="holder">
              <div id="img-1">
                <img
                  src="https://images.unsplash.com/photo-1477586957327-847a0f3f4fe3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="img-fluid"
                  id="img"
                  alt="..."
                ></img>
              </div>
              <div id="img-2">
                <img
                  src="https://images.unsplash.com/photo-1534757725210-578f70abd381?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="img-fluid"
                  id="img"
                  alt="..."
                ></img>
              </div>
              <div id="img-3">
                <img
                  src="https://images.unsplash.com/photo-1667849357665-ecabfac122fe?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="img-fluid"
                  id="img"
                  alt="..."
                ></img>
              </div>
              <div id="img-4">
                <img
                  src="https://images.unsplash.com/photo-1686603707586-fa406a04a895?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="img-fluid"
                  id="img"
                  alt="..."
                ></img>
              </div>
              <div id="img-5">
                <img
                  src="https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="img-fluid"
                  id="img"
                  alt="..."
                ></img>
              </div>
              <div id="img-6">
                <img
                  src="https://images.unsplash.com/photo-1534407672671-e77ce1342dc8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="img-fluid"
                  id="img"
                  alt="..."
                ></img>
              </div>
            </div>
          </div>
          <div className="button-hold">
            <a href="#img-1" className="buts"></a>
            <a href="#img-2" className="buts"></a>
            <a href="#img-3" className="buts"></a>
            <a href="#img-4" className="buts"></a>
            <a href="#img-5" className="buts"></a>
            <a href="#img-6" className="buts"></a>
          </div>
        </div>
        <div class="text-about">
          <h3>
            <b>Welcome To Jaipur</b>
          </h3>
          <p>
            Jaipur, known as the "Pink City," is the capital of the Indian state
            of Rajasthan. It is renowned for its rich history, vibrant culture,
            and stunning architecture. Founded in 1727 by Maharaja Sawai Jai
            Singh II, Jaipur is famous for its well-planned layout, featuring
            broad streets and symmetrical designs. The city boasts iconic
            landmarks like the Hawa Mahal, Amber Fort, City Palace, and Jantar
            Mantar, a UNESCO World Heritage site. Jaipur is also a hub for
            traditional arts, crafts, and jewelry, making it a popular
            destination for both history enthusiasts and tourists seeking an
            authentic Rajasthani experience.
          </p>
        </div>
      </div>
      <Tour />
    </>
  );
}

export default Visit;
