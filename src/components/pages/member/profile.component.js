/**
 * Member Profile component
 *
 * @author kaleb@thepracticalit.com
 */

import { useEffect, useState } from "react";
import memberService from "../../../services/member.service";

function MemberProfile(props) {
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [alert, setAlert] = useState({});
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: ""
  });

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");

  /**
   * Call on landing for this method. If there is anything needed to be passed
   * or computed, do it here.
   */
  useEffect(() => {
    console.log("reloaded")
    //get the user infromation for update.
    setFirstName(memberService.getLoggedUser().firstName);
    setLastName(memberService.getLoggedUser().lastName);
    setEmail(memberService.getLoggedUser().email);
    setGender(memberService.getLoggedUser().gender);
    // setUser({
    //   firstName: "firster",
    //   lastName: "laster",
    //   title: "title",
    //   gender: 'F',
    //   email: "some@some.com",
    //   address: {
    //     city: "city1",
    //     state: "state1",
    //     country: "country1"
    //   },
    //   professions: [{
    //     profession: 'medical doctor',
    //     practicing: true,
    //     years: 12
    //   }, {
    //     profession: 'musician',
    //     practicing: false,
    //     years: 7
    //   }]
    // });
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user])

  const handleInput = (event) => {
    const key = event.target.getAttribute("data-field");
    const value = event.target.value;
    switch (key) {
      case 'email':
        setEmail(value);
        break;
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'gender':
        setGender(value);
        break;
    }
    // let currentUser = user;
    // currentUser[key] = event.target.value;
    // console.log(currentUser);
    // setUser(currentUser => currentUser);
  };

  const setAlertMessage = (message, style) => {
    setAlert({message, style})
  }

  /**
   * Event handler for user update.
   * @param {*} event
   */
  const editProfileHandler = async (event) => {
    event.preventDefault();
    let user = {
      firstName,
      lastName,
      email,
      gender
    }
    let response = await memberService.update(user);
    setAlertMessage(response.message, 
      response.success ? 'alert-success' : 'alert-danger');
  }

  const editAddressHandler = (event) => {};

  return (
    <>
      <div className={alert.style}>{alert.message}</div>
      <div className="col-lg-6 py-3 wow fadeInUp">
        <h2 className="title-section">Update Profile</h2>
        <div className="divider"></div>

        <form onSubmit={editProfileHandler}>
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
              value={firstName}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              data-field="lastName"
              onChange={handleInput}
              placeholder="Last Name"
              className="form-control"
              value={lastName}
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
              checked={gender?.toLowerCase() === "m"}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">
              Male
            </label>
          </div>
          <div className="form-check form-check-inline mb-3">
            <input
              className="form-check-input"
              name="gender"
              type="radio"
              value="F"
              data-field="gender"
              onChange={handleInput}
              checked={gender?.toLowerCase() === "f"}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">
              Female
            </label>
          </div>
          <div className="mb-3">
            <input
              name="user-email"
              data-field="email"
              onChange={handleInput}
              placeholder="Email"
              type="email"
              className="form-control"
              value={email}
            />
          </div>
          <div className="button-box">
            <div className="mb-3">
              <button
                disabled={btnDisabled}
                type="submit"
                className="btn btn-primary"
              >
                <span>Update Profile</span>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="col-lg-6 py-3 wow fadeInUp">
        <h2 className="title-section">Update Address</h2>
        <div className="divider"></div>

        <form onSubmit={editAddressHandler}>
          <div className={"text-center alert " + alert.style}>
            {alert.message}
          </div>
          <div className="mb-3">
            <input
              type="text"
              data-field="city"
              onChange={handleInput}
              placeholder="City"
              className="form-control"
              value={user?.address?.city}
            />
          </div>
          <div className="mb-3">
            <input
              name="state"
              type="text"
              data-field="state"
              onChange={handleInput}
              className="form-control"
              placeholder="State"
              value={user?.address?.state}
            />
          </div>
          <div className="mb-3">
            <input
              name="Country"
              data-field="country"
              onChange={handleInput}
              placeholder="Country"
              type="text"
              className="form-control"
              placeholder="Country"
              value={user?.address?.country}
            />
          </div>
          <div className="button-box">
            <div className="mb-3">
              <button
                disabled={btnDisabled}
                type="submit"
                className="btn btn-primary"
              >
                <span>Update Address</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default MemberProfile;
