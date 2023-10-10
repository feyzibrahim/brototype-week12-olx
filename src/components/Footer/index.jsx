import React from "react";

function Footer() {
  return (
    <>
      <footer className="grid grid-cols-5 bg-gray-200 py-5 px-20 ">
        <div className="">
          <h1 className="footer-h1">Popular Locations</h1>
          <ul>
            <li>
              <a href="/" className="footer-a">
                Kolkata
              </a>
            </li>
            <li>
              <a href="/" className="footer-a">
                Mumbai
              </a>
            </li>
            <li>
              <a href="/" className="footer-a">
                Chennai
              </a>
            </li>
            <li>
              <a href="/" className="footer-a">
                Pune
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="footer-h1">Trending Location</h1>
          <ul>
            <li>
              <a className="footer-a" href="/">
                Bhubaneshwar
              </a>
            </li>
            <li>
              <a className="footer-a" href="/">
                Hyderabad
              </a>
            </li>
            <li>
              <a className="footer-a" href="/">
                Chandigarh
              </a>
            </li>
            <li>
              <a className="footer-a" href="/">
                Nashik
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="footer-h1">About Us</h1>
          <ul>
            <li>
              <a className="footer-a" href="/">
                About OLX Group
              </a>
            </li>
            <li>
              <a className="footer-a" href="/">
                Careers
              </a>
            </li>
            <li>
              <a className="footer-a" href="/">
                Contact Us
              </a>
            </li>
            <li>
              <a className="footer-a" href="/">
                OLXPeople
              </a>
            </li>
            <li>
              <a className="footer-a" href="/">
                Waah Jobs
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="footer-h1">OLX</h1>
          <ul>
            <li>
              <a className="footer-a" href="/">
                Help
              </a>
            </li>
            <li>
              <a className="footer-a" href="/">
                Sitemap
              </a>
            </li>
            <li>
              <a className="footer-a" href="/">
                Legal & Privacy Information
              </a>
            </li>
            <li>
              <a className="footer-a" href="/">
                Blog
              </a>
            </li>
            <li>
              <a className="footer-a" href="/">
                OLX Autos Sell Car
              </a>
            </li>
            <li>
              <a className="footer-a" href="/">
                Vulnerability Disclosure Program
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p>Follow Us</p>
          <div className="flex">
            <img
              src="https://statics.olx.in/external/base/img/appstore_2x.webp"
              alt="App Store"
              className="w-1/3"
            />
            <img
              src="https://statics.olx.in/external/base/img/playstore_2x.webp"
              alt="App Store"
              className="w-1/3"
            />
          </div>
        </div>
      </footer>
      <div className="flex justify-between bg-cyan-950 text-white py-5 px-20 text-sm">
        <p>Help - Sitemap</p>
        <p>All rights reserved © 2006-2023 OLX</p>
      </div>
    </>
  );
}

export default Footer;
