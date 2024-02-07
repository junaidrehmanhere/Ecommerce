import { Link, NavLink, useNavigate } from "react-router-dom";
import "./navbar.css";
import { useContext } from "react";
import LoggInContext from "../context/createcontext/createlogincontext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
// import { FiMenu } from "react-icons/fi";
// import { CgCloseO } from "react-icons/cg";
function NavBar() {
  const { IsLoggedIn, setIsLoggedIn } = useContext(LoggInContext);
  const navigate = useNavigate();
  const logIn = () => {
    if (!IsLoggedIn) {
      navigate("/log-in");
    } else {
      setIsLoggedIn(!IsLoggedIn);
    }
  };
  return (
    <>
      <nav id="navbar">
        <div className="nav-container">
          <div className="nav-main">
            <img
              src="https://assets-global.website-files.com/6493dcfff5da93a7486cd781/6493fc945ac55c5cf0b0243c_Logo.svg"
              alt="Logo-Picture"
            />
          </div>
          <div className="nav-list ">
            <NavLink to={"/home"}>Home</NavLink>
            <NavLink to={"/product"}>Product</NavLink>
            {/* <NavLink to={"/category"}>Categories</NavLink> */}
            <NavLink to={"/contact-page"}>Contact</NavLink>

            <NavLink to="/cart">
              <FontAwesomeIcon icon={faCartShopping} />
              Cart
            </NavLink>
            {/* <div className="mobile-btn">
              <FiMenu name="menu-outline" />
              <CgCloseO name="close-outline" />
            </div> */}
          </div>
          <div className="nav-btn ">
            <button onClick={logIn} className="btn btn-primary">
              {IsLoggedIn ? (
                <FontAwesomeIcon icon={faLock} style={{ marginRight: "5px" }} />
              ) : (
                <FontAwesomeIcon
                  icon={faLockOpen}
                  style={{ marginRight: "5px" }}
                />
              )}
              {IsLoggedIn ? "LogOut" : "LogIn"}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
