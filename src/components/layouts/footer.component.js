/**
 * Footer component 
 * 
 * @author kaleb@thepracticalit.com
 */
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="page-footer">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-3 py-3">
              <h3>
              የ <span className="text-primary">ዳያስፖራ ምላሽ.</span>
              </h3>
              <p>Every diaspora's initiation to Ethiopia.</p>

              <p>
                <Link to="/">info@lehagere.org</Link>
              </p>
              <p>
                <Link to="/">+00 1122 3344 5566</Link>
              </p>
            </div>
            <div className="col-lg-3 py-3">
              <h5>Quick Links</h5>
              <ul className="footer-menu">
                <li>
                  <Link to="/">What is it?</Link>
                </li>
                <li>
                  <Link to="/">How to contribute</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 py-3">
              <h5>About Us</h5>
              <ul className="footer-menu">
                <li>
                  <Link to="/">About Us</Link>
                </li>
                <li>
                  <Link to="/">Our Teams</Link>
                </li>
                <li>
                  <Link to="/">What has been done</Link>
                </li>
                <li>
                  <Link to="/">News & Press</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 py-3">
              <h5>Subscribe</h5>
              <form action="#">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your mail.."
                />
              </form>

              <div className="sosmed-button mt-4">
                <Link to="/">
                  <span className="mai-logo-facebook-f"></span>
                </Link>
                <Link to="/">
                  <span className="mai-logo-twitter"></span>
                </Link>
                <Link to="/">
                  <span className="mai-logo-google"></span>
                </Link>
                <Link to="/">
                  <span className="mai-logo-linkedin"></span>
                </Link>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6 py-2">
              <p id="copyright">
                Powered By <a target="_blank" href="https://thePracticalIT.com/">Practical IT</a>. All
                rights reserved &copy; {new Date().getFullYear()}
              </p>
            </div>
            <div className="col-sm-6 py-2 text-right">
              <div className="d-inline-block px-3">
                <Link to="/">Privacy</Link>
              </div>
              <div className="d-inline-block px-3">
                <Link to="/">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer;