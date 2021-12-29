/**
 * Member Home component
 *
 * @author kaleb@thepracticalit.com
 */

import { useEffect } from "react";
import { Link } from 'react-router-dom'
function MemberHome(props) {

  /**
   * Call on landing for this method. If there is anything needed to be passed
   * or computed, do it here.
   */
  useEffect( () => {
    //check if the user has logged in already.
  }, []);
  return (
    <>
<header></header>

<div className="col-lg-6 py-3 wow zoomIn">
  <div className="img-place">
    <img src="../assets/img/bg_image_1.png" alt="" />
  </div>
</div>
<div className="col-lg-6 py-3 wow fadeInUp">
  <p className="text-lg mb-5">
  <b>Welcome {props.user.firstName}</b> You are doing a great job. Our generation
  depends on your alikes to set forth a development steps.
  </p>
  <p className="text-lg mb-5">
    There is no limit as to what we can do to get better.
  </p>
  <Link to="/" className="btn btn-outline border text-secondary">
    See whatelse you can do
  </Link>
  
</div>
</>
  );
}

export default MemberHome;
