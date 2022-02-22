import React, { Component } from "react";
import "./Products.css";
import MotherBoard from "../../assets/Products/mother-board.jpg";

class Products extends Component {
  render() {
    return (
      <div className="p-container">
        <div className="p-card">
          <img className="p-img" src={MotherBoard} alt="" />
          <div className="right">
            <div className="p-right">Laptop cpu replacment</div>
            <div class="separator"></div>
            <p className="p-desc">
              Magnesium is one of the six essential macro-minerals that is
              required by the body for energy production and synthesis of
              protein and enzymes. It contributes to the development of bones
              and most importantly it is responsible for synthesis of your DNA
              and RNA. A new report that has appeared in theBritish Journal of
              Cancer, gives you another reason to add more magnesium to your
              diet...
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
