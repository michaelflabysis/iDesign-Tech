import React from "react";
import Footer from "../Footer";
import "../../App.css";

function About() {
  return (
    <div>
      <div>
        <div style={{ textAlign: "center" }}>
          <img
            src="images/IMG_E0698.jpg"
            alt="Nature"
            className="responsive"
            width="600"
            height="400"
          ></img>
        </div>

        {/* <h2 style={{ textAlign: "center" }}> </h2> */}
        <h2 style={{ textAlign: "center" }}>About Us</h2>
        <p style={{ textAlign: "center", margin: 30 }}>
          we are a tech company with the best team for your ideas, we have done
          a commendable job of personifying our team and organization while also
          narrating our story. The top of the page features a friendly image of
          the company's Head, details about the founder and the culture. Along
          the way, The organization has also done a fabulous job of establishing
          trust with other clients.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default About;
