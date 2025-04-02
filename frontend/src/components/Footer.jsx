import { Link } from "react-router-dom";
function Footer() {
  return (
    <div
      className="container text
    "
    >
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 ">© 2024 Company, Inc</p>

        <a
          href="/"
          className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        ></a>

        <ul className="nav col-md-4 justify-content-end">
          <Link to="/">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 ">
                Home
              </a>
            </li>
          </Link>
          <Link to="/jaipur">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 ">
                Visit
              </a>
            </li>
          </Link>

          <li className="nav-item">
            <a href="#" className="nav-link px-2 ">
              <Link to="/about"> about</Link>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
export default Footer;
