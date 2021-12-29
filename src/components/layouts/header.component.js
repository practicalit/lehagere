import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import memberService from '../../services/member.service';

/**
 * Header component
 *
 * @author kaleb@thepracticalit.com
 *
 */
function Header(props) {

  const [loggedUser, setLoggedUser] = useState();

  const style = {
    login: {
      fontWeight: "bold",
    },
  };

  useEffect( () => {
    //check if the user has logged in.
    let loggedUser = memberService.getLoggedUser();
    if (loggedUser) {
      setLoggedUser(loggedUser);
    }
  }, []);

  /**
   * User can be assigned from the useEffect or from props hence
   * get consolidate value for it.
   */
  function getLoggedUser() {
    let user = null;
    let propUser = props.user && Object.keys(props.user).length > 0 ? props.user : null;
    if (loggedUser) {
      user = loggedUser;
    } else if (propUser) {
      user = propUser;
    }
    return user;
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light navbar-float">
        <div className="container">
          <Link to="/" className="navbar-brand">
            የ <span className="text-primary">ዳያስፖራ ምላሽ</span>
          </Link>

          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-collapse collapse" id="navbarContent">
            <ul className="navbar-nav ml-lg-4 pt-3 pt-lg-0">
              <li className="nav-item active">
                <Link to="/home" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
              {
                (getLoggedUser() && getLoggedUser().firstName) &&
              <>
              <li className="nav-item">
                <Link to="/member/profile" className="nav-link">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/member/contributions" className="nav-link">
                  Contributions
                </Link>
              </li>
              </>
              }
            </ul>

            <div className="row ml-auto">
              {
                
              }
              { (getLoggedUser() && getLoggedUser().firstName) && <div className="col-xs-6">
                <p className="btn btn-outline rounded-pill">
                  Hi, {getLoggedUser().firstName} | <Link to="/logout">Logout</Link></p>
              </div>
              }
              { !getLoggedUser() &&<div className="col-xs-6">
                <Link to="/login" className="btn btn-outline rounded-pill">
                  <span style={style.login}>Register | Login</span>
                </Link>
              </div>
              }
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
