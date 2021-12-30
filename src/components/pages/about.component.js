/**
 * About component
 *
 * @author kaleb@thepracticalit.com
 */
import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <header></header>

      <div className="col-lg-6 py-3 wow zoomIn">
        <div className="img-place">
          <img src="../assets/img/about-us.png" alt="" />
        </div>
      </div>
      <div className="col-lg-6 py-3 wow fadeInUp">
        <p className="text-lg mb-5">
          We are Ethiopians who have been out of our country through difference
          means and we are trying to pay the price back
        </p>
        <p className="text-lg mb-5">
          We can come from different regions and religions but we have only one
          country - Ethiopia.
        </p>
        <Link to="/" className="btn btn-outline border text-secondary">
          More Info
        </Link>
        <Link to="/" className="btn btn-primary btn-split ml-2">
          Watch Video{" "}
          <div className="fab">
            <span className="mai-play"></span>
          </div>
        </Link>
      </div>
    </>
  );
}
