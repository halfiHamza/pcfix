import React, { Component } from "react";
import "./Services.css";
import Laptop from "../../assets/Services/laptop.png";

class Services extends Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }
  CardItems = [
    {
      title: "LAPTOP REPAIR",
      subTitle: "All PC & Laptop Brand",
      cName: "fas fa-laptop fa-lg",
      desc: "PcFix est une Start-up de jeunes professionnels dans le domaine de la maintenance de haute précision PcFix est une Start-up de jeunes professionnels dans",
    },
    {
      title: "TABLET REPAIR",
      subTitle: "All Tablet Brand",
      cName: "fas fa-tablet-alt fa-lg",
      desc: "PcFix est une Start-up de jeunes professionnels dans le domaine de la maintenance de haute précision PcFix est une Start-up de jeunes professionnels dans",
    },
    {
      title: "DATA RECOVORY",
      subTitle: "Hard Disk and more",
      cName: "fas fa-hdd fa-lg",
      desc: "PcFix est une Start-up de jeunes professionnels dans le domaine de la maintenance de haute précision PcFix est une Start-up de jeunes professionnels dans",
    },
    {
      title: "PIECES DELEVER",
      subTitle: "Laptop Pieces & Other",
      cName: "fas fa-microchip fa-lg",
      desc: "PcFix est une Start-up de jeunes professionnels dans le domaine de la maintenance de haute précision PcFix est une Start-up de jeunes professionnels dans",
    },
    {
      title: "PROGRAMMING",
      subTitle: "Desktop & Web app",
      cName: "fas fa-file-code fa-lg",
      desc: "PcFix est une Start-up de jeunes professionnels dans le domaine de la maintenance de haute précision PcFix est une Start-up de jeunes professionnels dans",
    },
  ];
  render() {
    return (
      <div className="s-container">
        <img className="s-image" src={Laptop} alt="" />
        <div className="s-details">
          <div className="content">
            <div className="s-laptop">LAPTOP REPAIR</div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
              maiores dolor at inventore nobis nam iure fuga voluptas, eveniet
              deleniti tenetur praesentium voluptates facilis, fugiat delectus
              doloremque veritatis provident tempora?
            </p>
          </div>
          <div className="content">
            <div className="s-tablet">TABLET REPAIR</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus magni repellendus iste incidunt assumenda officiis
              aspernatur aliquid molestias animi earum mollitia ipsum placeat
              quod quis, excepturi voluptas id molestiae enim.
            </p>
          </div>
          <div className="content">
            <div className="s-parts">SPARE PARTS</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus magni repellendus iste incidunt assumenda officiis
              aspernatur aliquid molestias animi earum mollitia ipsum placeat
              quod quis, excepturi voluptas id molestiae enim.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
