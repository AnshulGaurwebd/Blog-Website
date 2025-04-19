export const Homeintro = () => {
  return (
    <>
      <main>
        <div class="card text-center Zoo cardD ">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="https://static.vecteezy.com/system/resources/previews/018/942/371/original/online-message-blog-chats-communication-vector.jpg"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h1
                  className="card-title postba"
                  style={{ color: "antiquewhite" }}
                >
                  Welcome To The TraveloBlog
                </h1>
                <h5
                  className="card-title postba"
                  style={{ color: "antiquewhite" }}
                >
                  This Is The World's Best Website For Making You Explore World
                  Easily.
                </h5>

                <p class="card-text postba" style={{ color: "antiquewhite" }}>
                  {" "}
                  Welcome to my travel blog—a space where we share our
                  adventures and help you plan yours! Here, you’ll find travel
                  stories, tips, and guides to inspire your next trip. Whether
                  you’re exploring hidden gems or iconic destinations, this site
                  is your go-to companion for making every journey memorable.
                  Let’s explore the world together, one blog at a time!
                </p>
                <div className="btn">
                  <a href="/way">
                    <button
                      className="btn btn-primary postba"
                      style={{ color: "antiquewhite" }}
                    >
                      create now
                    </button>
                  </a>
                  <a href="/jaipur">
                    <button
                      className="btn postba"
                      style={{ color: "antiquewhite" }}
                    >
                      explore now
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
