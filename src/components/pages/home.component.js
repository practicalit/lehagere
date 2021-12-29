/**
 * Home component
 *
 * @author kaleb@thepracticalit.com
 */

import { useEffect } from "react";

function Home(props) {

  /**
   * Call on landing for this method. If there is anything needed to be passed
   * or computed, do it here.
   */
  useEffect( () => {
    //check if the user has logged in already.
  }, []);
  return (
    <>
      <header>
        <div className="page-banner home-banner">
          <div className="container h-100">
            <div className="row align-items-center h-100">
              <div className="col-lg-6 py-3 wow fadeInUp">
                <h1 className="mb-4">
                  100K Diaspora can shake earth to the core.
                </h1>
                <p className="text-lg mb-5">
                  We, the diaspora community, shall put all what we can into 
                  helping our motherland.
                </p>

                <a href="#" className="btn btn-outline border text-secondary">
                  More Info
                </a>
                <a href="#" className="btn btn-primary btn-split ml-2">
                  Watch Video{" "}
                  <div className="fab">
                    <span className="mai-play"></span>
                  </div>
                </a>
              </div>
              <div className="col-lg-6 py-3 wow zoomIn">
                <div className="img-place">
                  <img src="../assets/img/bg_image_1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="page-section features">
          <div className="container">
            <div className="row justify-cont-center">
              <div className="col-md-6 col-lg-4 py-3 wow fadeInUp">
                <div className="d-flex flex-row">
                  <div className="img-fluid mr-3">
                    <img src="../assets/img/icon_pattern.svg" alt="" />
                  </div>
                  <div>
                    <h5>Volunteer</h5>
                    <p>You are professional, Ethiopia needs you.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 py-3 wow fadeInUp">
                <div className="d-flex flex-row">
                  <div className="img-fluid mr-3">
                    <img src="../assets/img/icon_pattern.svg" alt="" />
                  </div>
                  <div>
                    <h5>Contribute</h5>
                    <p>Everything starts from idea. You have one, contribute it and lets go to the goal.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 py-3 wow fadeInUp">
                <div className="d-flex flex-row">
                  <div className="img-fluid mr-3">
                    <img src="../assets/img/icon_pattern.svg" alt="" />
                  </div>
                  <div>
                    <h5>Support</h5>
                    <p>Money, material, consultancy and more are the building blocks.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="page-section counter-section">
          <div className="container">
            <div className="row align-items-center text-center">
              <div className="col-lg-4">
                <p>Current Members</p>
                <h2>
                  <span className="number" data-number="20321"></span>
                </h2>
              </div>
              <div className="col-lg-4">
                <p>Goal</p>
                <h2>
                  <span className="number" data-number="100000"></span>
                </h2>
              </div>
              <div className="col-lg-4">
                <p>Capital Collected</p>
                <h2>
                  <span className="number" data-number="1000000"></span>
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="page-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 py-3 wow fadeInUp">
                <h2 className="title-section">Get in Touch</h2>
                <div className="divider"></div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br /> Laborum ratione autem quidem veritatis!
                </p>

                <ul className="contact-list">
                  <li>
                    <div className="icon">
                      <span className="mai-map"></span>
                    </div>
                    <div className="content">123 Fake Street, New York, USA</div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="mai-mail"></span>
                    </div>
                    <div className="content">
                      <a href="#">info@digigram.com</a>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="mai-phone-portrait"></span>
                    </div>
                    <div className="content">
                      <a href="#">+00 1122 3344 55</a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 py-3 wow fadeInUp">
                <div className="subhead">Contact Us</div>
                <h2 className="title-section">Drop Us a Line</h2>
                <div className="divider"></div>

                <form action="#">
                  <div className="py-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full name"
                    />
                  </div>
                  <div className="py-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="py-2">
                    <textarea
                      rows="6"
                      className="form-control"
                      placeholder="Enter message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary rounded-pill mt-4"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
