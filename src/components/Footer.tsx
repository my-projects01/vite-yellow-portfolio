import * as React from "react";
import "../styles/home.css";
import { Socials } from "../types/details";


function Footer({ socials }: { socials: Socials }) {
  const redirect = (value: string) => {
    let url = '';
    switch (value) {
      case 'instagram':
        url = socials.instagram ?? '';
        break;
      case 'linkedIn':
        url = socials.linkedInUrl ?? '';
        break;
      case 'gmail':
        url = `mailto:${socials.email}`;
        break;
      default:
        break;
    }
    window.location.href = url;
  }
  return (
    <>
      <div className="footer-container">
        <div className="footerIcons">
          <div className="icons">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c372b60599fe0f3cde796e5f6b4de37e58a03e5956cc0df056efb4398a3a6499?placeholderIfAbsent=true&apiKey=6049f25a868a4fa0bc330ea5f13bb6aa"
              className="img"
              onClick={() => { redirect('instagram') }}
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/feccb8f939c1031147a08ce40d4cc0f4280501eb5ebb264183f6a0bce1349536?placeholderIfAbsent=true&apiKey=6049f25a868a4fa0bc330ea5f13bb6aa"
              className="img"
              onClick={() => { redirect('linkedIn') }}
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4fe77bba5691b5636791c7493bf02db650dab08f03e6b117eda0d3737fa6ab99?placeholderIfAbsent=true&apiKey=6049f25a868a4fa0bc330ea5f13bb6aa"
              className="img"
              onClick={() => { redirect('gmail') }}
            />
          </div>
          <div className="copyRight">
            <p>© 2024 All Rights Reserved</p>
          </div>

        </div>
      </div>
      <div className="footer-wave">
        <svg viewBox="0 0 2000 400" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <path fill="#FDC435" d="M 0 290 C 158.4 290 369.6 145 528 145 L 528 145 L 528 400 L 0 400 Z" stroke-width="0"></path>
          <path fill="#FDC435" d="M 527 145 C 679.7 145 883.3 206 1036 206 L 1036 206 L 1036 400 L 527 400 Z" stroke-width="0"></path>
          <path fill="#FDC435" d="M 1035 206 C 1294.5 206 1640.5 0 2000 0 L 2000 0 L 2000 400 L 1035 400 Z" stroke-width="0"></path>
        </svg>
      </div>
    </>
  );
}

export default Footer;