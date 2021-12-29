import React, { useState } from "react";
import Home from "../pages/home.component";
import About from "../pages/about.component";
import { Route, Routes } from "react-router-dom";
import Register from "../pages/member/register.component";
import Login from "../pages/member/login.component";
import Logout from "../pages/member/logout.component";
import MemberHome from "../pages/member/member-home.component";
import MemberProfile from "../pages/member/profile.component";

export default function Content(props) {

  const [loggedUser, setLoggedUser] = useState({});

  /**
   * Function to handle the function when the user logs in successfully
   */
  const userLoggedIn = user => {
    setLoggedUser(user);
    props.userLoggedIn(user);
  }

  return (
    <>
      <main>
        <div className="page-section">
          <div className="container">
            <div className="row align-items-center">
              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/login" element={<Login userLoggedIn={userLoggedIn} />} />
                <Route exact path="/logout" element={<Logout userLoggedIn={userLoggedIn} />} />
                <Route exact path="/member/home" element={<MemberHome user={loggedUser} />} />  
                <Route exact path="/member/profile" element={<MemberProfile user={loggedUser} />} />  
              </Routes>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
