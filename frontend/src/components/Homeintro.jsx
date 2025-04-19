export const Homeintro = () => {
  return (
    <>
      <main>
        <div class="card text-center Zoo cardD ">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="https://png.pngtree.com/png-clipart/20230813/original/pngtree-content-creator-background-vector-illustration-of-freelancer-blogger-and-video-vlogger-production-can-use-for-poster-or-web-design-template-picture-image_7911015.png"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h1 class="card-title">Welcome To The TraveloBlog</h1>
                <h5 className="card-title">
                  This Is The World's Best Website For Making You Explore World
                  Easily.
                </h5>
                <p class="card-text">
                  {" "}
                  Welcome to my travel blog—a space where we share our
                  adventures and help you plan yours! Here, you’ll find travel
                  stories, tips, and guides to inspire your next trip. Whether
                  you’re exploring hidden gems or iconic destinations, this site
                  is your go-to companion for making every journey memorable.
                  Let’s explore the world together, one blog at a time!
                </p>
                <div className="btn btn-primary">
                  <a href="/way">
                    <button className="btn btn-primary">create now</button>
                  </a>
                  <a href="/jaipur">
                    <button className="btn">explore now</button>
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
