import Tour from "./Tour";
import State from "./State";

function VisitMysore() {
  return (
    <>
      <State />
      <div className="front">
        <div className="cont">
          <div className="wrap">
            <div className="holder">
              <div id="img-1">
                <img
                  src="https://images.unsplash.com/photo-1600112356915-089abb8fc71a?q=80&w=1988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="img-fluid"
                  id="img"
                  alt="..."
                ></img>
              </div>
              <div id="img-2">
                <img
                  src="https://images.unsplash.com/photo-1580294647332-8a399cd9ed45?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="img-fluid"
                  id="img"
                  alt="..."
                ></img>
              </div>
              <div id="img-3">
                <img
                  src="https://images.unsplash.com/photo-1585167716034-5d7f10f162b9?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="img-fluid"
                  id="img"
                  alt="..."
                ></img>
              </div>
              <div id="img-4">
                <img
                  src="https://images.unsplash.com/photo-1589951652301-170817acd9ed?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="img-fluid"
                  id="img"
                  alt="..."
                ></img>
              </div>
              <div id="img-5">
                <img
                  src="https://images.unsplash.com/photo-1529923666526-f242491dce58?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="img-fluid"
                  id="img"
                  alt="..."
                ></img>
              </div>
              <div id="img-6">
                <img
                  src="https://plus.unsplash.com/premium_photo-1697730294347-aed4f8fb0716?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            <b>Welcome To Mysore</b>
          </h3>
          <p>
            Mysore, known as the Cultural Capital of Karnataka, is a historic
            city renowned for its royal heritage, grand palaces, and vibrant
            traditions. Once the capital of the Mysore Kingdom, it is home to
            the magnificent Mysore Palace, a stunning example of Indo-Saracenic
            architecture. The city is famous for the grand Dasara festival, the
            serene Chamundi Hills, and the beautiful Brindavan Gardens. Mysore
            is also known for its sandalwood products, silk sarees, and rich
            culinary delights like Mysore Pak. With its blend of history,
            culture, and modernity, Mysore offers a unique and charming
            experience to visitors.
          </p>
        </div>
      </div>
      <Tour />
    </>
  );
}

export default VisitMysore;
