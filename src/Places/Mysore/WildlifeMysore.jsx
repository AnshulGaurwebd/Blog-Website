import Rolling from "./Rolling";
import WildData from "./Wildlife.json";

function WildlifeMysore() {
  return (
    <>
      <Rolling />
      <div className="card text-center Zoo cardD ">
        <div className="card-body">
          <p className="card-text text">
            The wildlife attractions in and around Mysore have specific visiting
            timings and rules to ensure a safe and enjoyable experience for
            visitors while protecting the natural environment. Bandipur National
            Park offers safari rides at 6:30 AM, 7:30 AM, and 8:30 AM in the
            morning and at 3:30 PM, 4:30 PM, and 5:30 PM in the evening, with
            all vehicles required to exit by 6:30 PM. Nagarhole National Park
            has general visiting hours from 6:45 AM to 8:45 AM in the morning
            and 4:00 PM to 6:00 PM in the evening, with multiple safari options,
            including jeep, coracle, boat, and bus safaris at designated times.
            Dubare Elephant Camp is open from 9:00 AM to 11:00 AM in the morning
            and 4:30 PM to 5:30 PM in the evening, though activities may be
            suspended during the monsoon season. Ranganathittu Bird Sanctuary
            welcomes visitors from 9:00 AM to 6:00 PM daily, with boating
            facilities available for birdwatching. Entry fees vary for Indian
            and foreign tourists, and additional charges apply for parking and
            boating. Mysore Zoo operates from 8:30 AM to 5:30 PM but remains
            closed on Tuesdays. Entry fees are ₹100 for adults and ₹50 for
            children, with separate charges for cameras and parking. Visitors
            are advised to book safaris and activities in advance due to limited
            slots. Arriving at least 30 minutes before scheduled times ensures
            smooth entry. It is essential to respect wildlife by maintaining
            silence, avoiding littering, and adhering to park regulations. For
            safety, visitors should stay within designated areas and follow
            instructions from guides. Some activities may be affected by weather
            conditions, particularly during the monsoon season. For the most
            accurate and up-to-date information, contacting park authorities or
            visiting official websites before planning a trip is recommended.
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
          </div>
        </div>
      ))}
      ;
    </>
  );
}

export default WildlifeMysore;
