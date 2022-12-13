import React from "react";
import {Typography, Avatar, Grid, Box} from "@material-ui/core";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() { 

    //Aos Animation doc: https://michalsnik.github.io/aos/
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
    
    return (
      <section id="about">
        <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap" data-aos="fade-up">
          <div style={{marginTop:"3rem"}}>
            {/* <CodeIcon className="mx-auto inline-block w-10 mb-4" /> */}
            <h3 class="display-7 fw-bold" style={{color:"#4682B4"}}>"Ok but, who are you?"</h3>

            <div class="row">

            {/* <h5 class="display-8">Great question! Here's a bit more about me and what I value:</h5> */}

              <div class="row-lg-20" style={{display:"flex"}}>
              {/* col-lg-6 */}
                <div class="col" style={{width:"700px", backgroundColor:"#F0F8FF", paddingTop:"50px", paddingBottom:"50px"}}>
                  <h5 class="display-8" style={{width:"350px"}}>
                    I'm a
                    <span style={{color:"#FFA500"}}> computer science master </span>
                    from Brown University.
                  </h5>
                  <h5 style={{width:"700px"}}>In my spare time, I enjoy crafting accessible problem solutions and improve users experiences.</h5>
                  <h5 style={{width:"700px"}}>I also enjoy <span style={{color:"#FFA500"}}>rock climbing.</span> I'm a Round-the-world adventurer. The best view comes after the hardest climb. </h5>
                </div>
                
                <img src={'image/head.jpg'} weight={250} height={250} alt="head_pic" />

              </div>

            </div>
            
           
          </div>
        </div>
      </section>
    );
  }