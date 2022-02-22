import React, { Component } from "react";
import "./Navbar.css";
import PcfixLogo from "../../../assets/Home/pcfix-logo.png";

class Navbar extends Component {
  state = { clicked: false };
  MenuItems = [
    {
      title: "Home",
      url: "#",
      cName: "active-link",
    },
    {
      title: "Services",
      url: "#",
      cName: "nav-links",
    },
    {
      title: "Products",
      url: "#",
      cName: "nav-links",
    },
    {
      title: "Contact Us",
      url: "#",
      cName: "nav-links",
    },
    {
      title: "About As",
      url: "#",
      cName: "nav-links",
    },
  ];
  handleClick = () => this.setState({ clicked: !this.state.clicked });
  render() {
    return (
      <nav className="NavbarItems">
        <img src={PcfixLogo} alt="logo" />
        <h1 className="Navbar-logo"> PC-FIX</h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {this.MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
          <div className="nav-btns">
            <button className="SignIn-btn">Sign In</button>
            <button className="SignUp-btn">Sign Up</button>
          </div>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
