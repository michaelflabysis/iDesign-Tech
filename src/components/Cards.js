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
              path="/services"
            />
            <CardItem
              src="images/the-best-applications-to-learn-as-a-graphics-designer.jpg"
              text="Get the best designs out of our AI tools for your business"
              label="Graphic Design"
              path="/services"
            />
          </ul>
        </div>
      </div>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/waec-scratch-cards-h8.png"
              text="Buy Waec Scratch card for checking of waec result of any specified year"
              label="Waec Card"
              path="/services"
            />
            <CardItem
              src="images/necoscratchcard.png"
              text="Buy Neco Scratch card for checking of Neco result of any specified year"
              label="Neco Card"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/waecgce.jpg"
              text="Buy Waec GCE Pin for Registration"
              label="Waec GCE Regiistration Pin"
              path="/services"
            />
            <CardItem
              src="images/waec-verification-card-96.png"
              text="For NYSC date of birth correction and others..."
              label="waec verification pin"
              path="/services"
            />
            <CardItem
              src="images/NABTEB-RESULT-CHECKER.png"
              text="Get Nabteb Card for checking of Nabteb result"
              label="Nabteb Card"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
