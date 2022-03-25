import React from "react";
import "./Profile.css";
import Cpu from "../../../assets/Home/cpu.png";
import Fatahe from "../../../assets/Team/fatahe.jpg";
import Abdsamed from "../../../assets/Team/abdsamed.jpg";
import Hako from "../../../assets/Team/hako.jpg";
import Hamza from "../../../assets/Team/hamza.jpg";
import Djamel from "../../../assets/Team/djamel.jpg";

function Profile(props) {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="welcome">
            <span>WELCOME, WE ARE PC-FIX ORAN</span>
          </div>
          <div>
            <span className="profile-desc">
              {" "}
              PcFix is ​​a start-up of young professionals in the field of
              high-precision maintenance specializing in laptops (all brands).
              Its laboratory can carry out all the necessary operations, even
              the most delicate ones, to overcome all the breakdowns that your
              Laptop may encounter. The interventions carried out range from the
              screen to the motherboard...
            </span>
          </div>
          <form action="">
            <input
              className="Email-input"
              type="input"
              placeholder="Your Email Address"
            />
            <button className="contact-btn">Contact us</button>
          </form>
          <div className="colz">
            <div className="colz-icon">
              <a href="https://web.facebook.com/PCFIX.ORAN/">
                <i className="fab fa-facebook-square fa-lg"></i>
              </a>
              <a href="https://www.instagram.com/pcfix_sarl/">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="https://facebook.com/">
                <i className="fab fa-whatsapp fa-lg"></i>
              </a>
              <a href="https://twitter.com/">
                <i className="fab fa-weixin fa-lg"></i>
              </a>
            </div>
          </div>
          <div className="team-container">
            <ul className="team-persons">
              <li className="person">
                <img src={Djamel} alt="Fatahe" />
              </li>
              <li className="person">
                <img src={Hamza} alt="Fatahe" />
              </li>
              <li className="person">
                <img src={Hako} alt="Abd Samed" />
              </li>
              <li className="person">
                <img src={Abdsamed} alt="Hako" />
              </li>
              <li className="person">
                <img src={Fatahe} alt="Hamza" />
              </li>
            </ul>
            <span className="team-desc">Team Members</span>
          </div>
        </div>
      </div>
      <div className="profile-picture">
        <img src={Cpu} alt="logo" />
      </div>
    </div>
  );
}

export default Profile;
