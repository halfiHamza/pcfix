import React, { Component } from "react";

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const maps =
      '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12959.485439589798!2d-0.6109509!3d35.7047831!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd6a6d41f191e253f!2spcFix!5e0!3m2!1sen!2sdz!4v1643570041121!5m2!1sen!2sdz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';
    return <canvas className="maps-container">{maps}</canvas>;
  }
}

export default ContactUs;
