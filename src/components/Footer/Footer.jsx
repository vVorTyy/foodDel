import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit ad
            saepe atque, modi molestiae facilis, inventore provident
            perferendis, exercitationem dolore dolor esse quam veniam delectus
            totam repellendus illum praesentium assumenda!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+966533540934</li>
            <li>alabdali1333@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 c Abdali1333.com - All Right Reserived.</p>
    </div>
  );
}
