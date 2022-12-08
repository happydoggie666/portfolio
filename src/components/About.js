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
            <h3>"Ok but, who are you?"</h3>
            <p>Great question! Here's a bit more about me and what I value:</p>

            <p>I’m from xx,xx and a recent cs grad from Brown University.</p>
            <p>In my spare time, I enjoy crafting accessible users interfaces in daily life and providing users with delightful experiences.</p>

            

            {/* <img style={{width:'100%', height:'100%'}} source={{url:'image/head.jpg'}}/> */}

          </div>
        </div>
      </section>
    );
  }