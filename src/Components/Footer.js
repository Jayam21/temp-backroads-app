import React from "react";
import { pageLinks, socialLinks } from "../data.js";

function Footer() {
  return (
    <div>
      {" "}
      <footer className="section footer">
        <ul className="footer-links">
          {pageLinks.map((pl) => {
            const { id, href, text } = pl;
            return (
              <li key={id}>
                <a href={href} className="footer-link">
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="footer-icons">
          {socialLinks.map((sl) => {
            const { id, href, icon } = sl;
            return (
              <li key={id}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-icon">
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date"></span> all rights reserved
        </p>
      </footer>
    </div>
  );
}

export default Footer;
