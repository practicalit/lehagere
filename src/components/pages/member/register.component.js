/**
 * Registration for new members.
 */

import { useState } from "react";
import { Link } from "react-router-dom";
import memberService from '../../../services/member.service';

export default function Register(props) {
    const [user, setUser] = useState({});
    const [alert, setAlert] = useState({
        style: "",
        message: ""
    });
    
    const [btnDisabled, setBtnDisabled] = useState(false);

    /**
     * Event handler for the submit button.
     * @param {*} event 
     */
    async function registerHandler(event) {
        event.preventDefault();
        const response = await memberService.register(user);
        setAlertMessage(response.message, 
            response.success ? 'alert-success' : 'alert-danger');
    }

    /**
     * Common class for setting the alert
     * @todo make the alert consitent throughout by creating component.
     * @param {string} message 
     * @param {string} style 
     */
    const setAlertMessage = (message, style) => {
        setAlert({message, style})
    }

    /**
     * Generic function to handle all the input boxes. 
     * @param {} event 
     */
    const handleInput = event => {
        const key = event.target.getAttribute('data-field');
        const type = event.target.getAttribute('type');
        let currentUser = user;
        currentUser[key] = event.target.value;
        if (type == 'checkbox') {
            currentUser[key] = event.target.checked;
        }
        setUser(currentUser);
    }
  return (
    <>
      <div className="col-lg-6 py-3 wow fadeInUp">
        <div className="subhead">Register Today</div>
        <h2 className="title-section">Support the Movement Today</h2>
        <div className="divider"></div>

        <form onSubmit={registerHandler}>
          <div className={"text-center alert " + alert.style}>
            {alert.message}
          </div>
          <div className="mb-3">
          <input
            type="text"
            data-field="firstName"
            onChange={handleInput}
            placeholder="First Name"
            className="form-control"
          />
          </div>
          <div className="form-check form-check-inline mb-3">
            <input
              name="gender"
              type="radio"
              value="M"
              data-field="gender"
              onChange={handleInput}
              className="form-check-input"
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">Male</label>
            </div>
            <div className="form-check form-check-inline mb-3">
            <input
              className="form-check-input"
              name="gender"
              type="radio"
              value="F"
              data-field="gender"
              onChange={handleInput}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">Female</label>
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
            <div className="form-check mb-3">
              <input
                type="checkbox"
                data-field="acceptTerms"
                onChange={handleInput}
                name="acceptTerms"
                value="true"
                className="form-check-input"
                id="acceptTerms"
              />
              <label className="form-check-label" htmlFor="acceptTerms">Accept Terms</label>
            </div>
            <div className="mb-3">
            <button disabled={btnDisabled} type="submit" className="btn btn-primary">
              <span>Register</span>
            </button>
            </div>
            <div className="mb-3">
              <span><Link to="/login">I am member already</Link></span>
            </div>
          </div>
        </form>
      </div>
      <div className="col-lg-6 py-3 wow zoomIn">
        <div className="img-place">
          <img src="../assets/img/register.png" alt="" />
        </div>
      </div>
    </>
  );
}
