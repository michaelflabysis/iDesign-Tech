import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Get the Latest Web Application newsletters in your email
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">Certificates</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">+234 703 487 5249</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Submit Request</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <a href="https://www.instagram.com/federalgovament/">Instagram</a>
            <a href="https://web.facebook.com/michaelflabysis/">Facebook</a>
            <a href="https://youtube.com">Youtube</a>
            <a href="https://twitter.com/federalgovament">Twitter</a>
            <a href="https://github.com/michaelflabysis">Github</a>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              iDesign Tech
              <i class="fab fa-typo3" />
            </Link>
          </div>
          <small class="website-rights">iDesign Tech © 2023</small>
          <div class="social-icons">
            <a
              href="https://web.facebook.com/michaelflabysis/"
              className="social-icon-link facebook"
            >
              <i class="fab fa-facebook-f" />
            </a>
            <a
              href="https://www.instagram.com/federalgovament/"
              className="social-icon-link instagram"
            >
              <i class="fab fa-instagram" />
            </a>
            <a
              href="https://www.youtube.com/"
              className="social-icon-link youtube"
            >
              <i class="fab fa-youtube" />
            </a>
            <a
              href="https://twitter.com/federalgovament"
              className="social-icon-link twitter"
            >
              <i class="fab fa-twitter" />
            </a>
            <a
              href="https://www.linkedin.com/in/michael-m-3992b597/"
              className="social-icon-link LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
