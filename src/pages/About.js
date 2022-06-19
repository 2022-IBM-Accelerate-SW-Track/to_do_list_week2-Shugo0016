import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/profile_pic.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Kaya Erol</div>
            <div className="brief_description">
              My name is Kaya Erol, I am 20 years old and I am a Computer Science student and New York University
            </div>
          </div>
        </div>
      </div>
    );
  }
}
