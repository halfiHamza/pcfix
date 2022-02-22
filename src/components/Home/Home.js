import React from "react";
import Profile from "./Profile/Profile";
import Nav from "./Navbar/Navbar";
import "./Home.css";

function Home(props) {
  return (
    <div className="home-container">
      <Nav />
      <Profile />
    </div>
  );
}

export default Home;
