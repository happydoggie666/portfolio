

import React, { useEffect } from 'react';

export default function Footer() {
  const needToTop = () => {
    let topButton = document.getElementById("topBtn");
    let pixelsFromTop = window.scrollY;
    let documentHeight = document.body.clientHeight;
    let windowHeight = window.innerHeight;
    let difference = documentHeight - windowHeight;
    let percentage = (100 * pixelsFromTop) / difference;
    if (percentage > 20) {
      topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }
  };
  useEffect(() => {
    
    window.addEventListener("scroll", needToTop);
    return () => window.removeEventListener("scroll", needToTop);
  })
  // useEffect(() => {
  //     window.addEventListener("scroll", onScroll);
  //     return () => window.removeEventListener("scroll", onScroll);
  // })
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
                        <a href="#" className="topBtn" id="topBtn" style={{marginRight:"10%"}}>Back to Top &#8593;</a>
                        {/* Craft with 💘 */}

                        Craft with <font color="hotpink" style={{marginLeft:"5px"}}>♥</font>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </footer>
    </section>
  );
}
