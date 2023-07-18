import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out our Services</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/which-web-design-platform-is-right-for-you-5e4d59fb941b9.png"
              text="A place for web design at its optimum responsiveness and effectiveness"
              label="Web Design"
              path="/services"
            />
            <CardItem
              src="images/Metadata_the_Figma_Handbook.jpg"
              text="A Product Design for enhancing your Product Sales"
              label="UI UX"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/How-to-Choose-the-best-Webhosting-Company-in-Nigeria-Ghana-Kenya-South-Africa-Uganda.jpg"
              text="The best Web Hosting Service you can ever imagine"
              label="Web Hosting"
              path="/services"
            />
            <CardItem
              src="images/best-web-development-tools.png"
              text="Latest Tools for best build and optimization"
              label="Latest Web Tools"
              path="/products"
            />
            <CardItem
              src="images/the-best-applications-to-learn-as-a-graphics-designer.jpg"
              text="Get the best designs out of our AI tools for your business"
              label="Graphic Design"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
