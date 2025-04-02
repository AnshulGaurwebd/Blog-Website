import Rolling from "./Rolling";
import WildData from "./Wildlife.json";

function Wildlife() {
  return (
    <>
      <Rolling />
      <div className="card text-center Zoo cardD ">
        <div className="card-body">
          <h5 className="text-title">Timings and Entry Fees of Jaipur Zoo</h5>
          <p className="card-text text">
            The zoological garden is open from Wednesdays to Monday and remains
            closed on Tuesdays. The timings are different for summer and winter
            months. During summer months, the zoo is open between 8:30 AM to
            5:30 PM whereas, during winter months, it is open between 9:00 AM to
            5:00 PM. The entry fees for Indian nationals is INR 15, and for
            foreign nationals the fee is INR 150.
          </p>
          <h5 className="text-title">Jaipur Zoo Phone</h5>
          <p className="card-text text">
            0141 2617 319 <br />
            Jaipur Zoo Address: Sawai Ram Singh Rd, Ram Niwas Garden, C Scheme,
            Ashok Nagar, Jaipur, Rajasthan, 302001, India
          </p>
          <h5 className="text-title">How to Reach Jaipur Zoo</h5>
          <p className="card-text text">
            Since the Zoo is located inside the Ram Niwas gardens, a prime
            location of Jaipur city, reaching here is not a hassle at all.
            Jaipur being connected very well through all means of transport,
            visitors may hire a cab from top car rental companies in Jaipur to
            reach the Jaipur Zoo. Auto-rickshaws and state run buses also are
            very good as well as economic options for people traveling on
            budget.
          </p>
        </div>
      </div>
      {WildData.map((wild) => (
        <div className="card mb-3 Zoo cardD">
          <img
            src={wild.src}
            className="card-img-top"
            alt="..."
            style={{ height: "400px", objectFit: "cover" }}
          />
          <div className="card Zoo ">
            <h5 className="text-title">{wild.title}</h5>
            <p className="card-text text">{wild.description}</p>
            <p className="card-text hotel-text text">
              Check out for visit{" "}
              <a href={wild.link} target="_blank">
                Location
              </a>
              !
            </p>{" "}
          </div>
        </div>
      ))}
      ;
    </>
  );
}

export default Wildlife;
