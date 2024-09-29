import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { FaFortAwesome } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { BsPostcardFill } from "react-icons/bs";
import "./header.css";
import { FcAbout } from "react-icons/fc";

function Header() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  return (
    <>
      <header className="p-3 text-bg-dark head">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <img src="src\Image\Blog.png" className="logo" alt="" />
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <div className="items">
                <li className="nav-item">
                  <Link to="/" className={`nav-link text-white `}>
                    <svg className="bi pe-none me-2" width="16" height="16">
                      <use xlinkHref="#home"></use>
                    </svg>
                    <div id="shome">
                      <span id="tex">Home</span>
                      <span id="ico">
                        <IoHome />
                      </span>
                    </div>
                  </Link>
                </li>
                <li className="nav-item">
                  {isAuthenticated ? (
                    <Link to="/create-post" className={`nav-link text-white `}>
                      <svg className="bi pe-none me-2" width="16" height="16">
                        <use xlinkHref="#speedometer2"></use>
                      </svg>
                      <div id="shome">
                        <span id="tex">Create Post</span>
                        <span id="ico">
                          <BsPostcardFill />
                        </span>
                      </div>
                    </Link>
                  ) : (
                    <Link
                      to="/way"
                      className={`nav-link text-white 
            
          `}
                    >
                      <svg className="bi pe-none me-2" width="16" height="16">
                        <use xlinkHref="#speedometer2"></use>
                      </svg>
                      <div id="shome">
                        <span id="tex">Way to post</span>
                        <span id="ico">
                          <BsPostcardFill />
                        </span>
                      </div>
                    </Link>
                  )}
                </li>
                <li className="nav-item">
                  <Link
                    to="/jaipur"
                    className={`nav-link text-white 
              
            `}
                  >
                    <svg className="bi pe-none me-2" width="16" height="16">
                      <use xlinkHref="#speedometer2"></use>
                    </svg>
                    <div id="shome">
                      <span id="tex">Places to visit</span>
                      <span id="ico">
                        <FaFortAwesome />
                      </span>
                    </div>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/about"
                    className={`nav-link text-white 
              
            `}
                  >
                    <svg className="bi pe-none me-2" width="16" height="16">
                      <use xlinkHref="#speedometer2"></use>
                    </svg>
                    <div id="shome">
                      <span id="tex">About Us</span>
                      <span id="ico">
                        <FcAbout />
                      </span>
                    </div>
                  </Link>
                </li>
              </div>
            </ul>

            <div className="text-end">
              {isAuthenticated && <p>{user.name}</p>}
              {isAuthenticated ? (
                <button
                  type="button"
                  className="btn btn-outline-primary me-2"
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Log Out
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-outline-primary me-2"
                  onClick={() => loginWithRedirect()}
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
