
import React from "react";

export default function Footer() {
    return (
    <section id="contact" className="relative"  style={{marginTop: "5rem"}}>
        <footer className="footerSty text-white">
            <div className="footer-top d-flex justify-content-center">
                <div className="container">
                  <div className="col">
                    <div className="row">
                      <div className="col-lg-6 col-sm-12 px-5 py-3">
                        <h4><a href="#">Happy Doggie 666</a></h4>
                        <p>Stay Hungry, Stay Foolish!</p>
                        <ul className="navbar-nav flex-row">
                          <li className="nav-item mx-1">
                              <a className="fa fa-facebook icon" href="#"/>
                          </li>
                          <li className="nav-item mx-1">
                          <a className="fa fa-twitter icon" href="#"/>
                          </li>
                          <li className="nav-item mx-1">
                              <a className="fa fa-github icon" href="#"><i className="ri-instagram-line"></i></a>
                          </li>
                          <li className="nav-item mx-1">
                              <a className="fa fa-linkedin-square icon" href="#"><i className="ri-youtube-line"></i></a>
                          </li>
                        </ul>
                      </div>

                      <div className="col-lg-6 col-sm-12 px-5 py-3 center">
                        Craft with 💘
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </footer>
    </section>
  );
}