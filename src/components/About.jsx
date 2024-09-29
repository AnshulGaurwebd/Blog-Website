import "./about.css";
function About() {
  return (
    <>
      <div className="card mb-3 about-sec ">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://www.giulioriotta.com/wp-content/uploads/2019/06/Fotografo-paesaggio-con-grandangolo.jpg"
              className="img-fluid rounded-start about-img"
              alt="..."
            />
          </div>
          <div className="col-md-8 about ">
            <div className="card-body">
              <h1 className="title ">
                <b>Our Mission</b>
              </h1>
              <p className="card-text text">
                our mission is to inspire and empower travelers to explore the
                world with curiosity, passion, and confidence. Through authentic
                experiences, insightful tips, and engaging stories, we aim to
                create a community of adventurers who embrace different
                cultures, cherish unforgettable journeys, and make the most out
                of every destination. Whether you're a seasoned globetrotter or
                just starting your wanderlust journey, we’re here to provide you
                with practical advice, hidden gems, and travel inspiration to
                help you embark on your next great adventure.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card text-center about-sec">
        <div className="card-body">
          <h1 className="title">
            <b>About Creator</b>
          </h1>
          <h3 className="title">
            <b>Anshul Gaur, BE</b>
          </h3>
          <h5 className="title">
            <b>Software Engineer, Front-End Developer</b>
          </h5>
          <p className="card-text text">
            With a strong foundation in front-end development and hands-on
            experience in HTML, CSS, React.js, and Next.js, I am passionate
            about creating user-friendly interfaces and delivering high-quality
            web experiences. As a software engineering student, I specialize in
            building responsive and dynamic web applications, always striving
            for clean, accessible, and visually appealing layouts. <br />
            <br />
            My expertise in React.js enables me to craft efficient,
            component-based applications that prioritize user interaction.
            Through several successful projects, I’ve been able to apply my
            technical skills, consistently delivering functional and
            aesthetically pleasing results. <br />
            <br />
            In addition to my technical skills, I’m highly organized,
            detail-oriented, and constantly seeking opportunities to learn and
            grow. I thrive in collaborative environments, enjoy solving complex
            problems, and am always ready to contribute to a team’s success.{" "}
            <br /> <br />
            Beyond coding, I am the Event Manager and Poster Designer for
            DroidLinX, the app and Linux development club at my university.
            These roles have strengthened my project management and creative
            design abilities, skills I bring to every project I take on. I look
            forward to contributing these strengths to exciting, fast-paced
            environments while continuing to develop my expertise. <br />
            <br />
            <b>Contact : 8302586963</b> <br />
            <b>Email : anshulgaur003@gmail.com</b>
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
