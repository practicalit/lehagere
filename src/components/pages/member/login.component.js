import { useState } from "react";
import memberService from "../../../services/member.service";
import { Link, useNavigate } from "react-router-dom";

/**
 * Page for login
 *
 * @author Kaleb W. kaleb@thepracticalit.com
 */
export default function Login(props) {
  const [alert, setAlert] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  /**
   * Function to handler the login logic
   * @param {Event} event
   */
  async function loginHandler(event) {
    event.preventDefault();
    const response = await memberService.login(user.email, user.password);
    if (response.success) {
      //emit the event here
      props.userLoggedIn(memberService.getLoggedUser());
      navigate("/member/home");
    } else {
      setAlert({ message: response.message, style: "alert-danger" });
    }
  }

  /**
   * Generic function to handle all the input boxes.
   * @param {} event
   */
  const handleInput = (event) => {
    const key = event.target.getAttribute("data-field");
    const type = event.target.getAttribute("type");
    let currentUser = user;
    currentUser[key] = event.target.value;
    if (type == "checkbox") {
      currentUser[key] = event.target.checked;
    }
    setUser(currentUser);
  };
  return (
    <>
      <div className="col-lg-6 py-3 wow zoomIn">
        <div className="img-place">
          <img src="../assets/img/login.png" alt="" />
        </div>
      </div>
      <div className="col-lg-6 py-3 wow fadeInUp">
        <div className="subhead">Log In</div>
        <h2 className="title-section">Support the Movement Today</h2>
        <div className="divider"></div>

        <form onSubmit={loginHandler}>
          <div className={"text-center alert " + alert.style}>
            {alert.message}
          </div>
          <div className="mb-3">
            <input
              name="user-email"
              data-field="email"
              onChange={handleInput}
              placeholder="Email"
              type="email"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              data-field="password"
              onChange={handleInput}
              name="user-password"
              placeholder="Password"
              className="form-control"
            />
          </div>
          <div className="button-box">
            <div className="mb-3">
              <button
                disabled={btnDisabled}
                type="submit"
                className="btn btn-primary"
              >
                <span>Log In</span>
              </button>
            </div>
            <div className="mb-3">
              <span>
                <Link to="/register">I am new, register me.</Link>
              </span>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
