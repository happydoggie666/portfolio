// import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { Card } from "react-bootstrap";
import { projects } from "../data";
import ProjectCard from "./ProjectCard";
import Grid from '@mui/material/Grid';
import {Box, Image} from "@material-ui/core";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



export default function Projects() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
  
     <section id="projects">
      <img style={{width:'100%', height:'100%'}}
        source={{url:'image/head_bg.jfif'}}
      />
      <Box>
      {/* text-center */}
      <div className="container px-5 py-10 mx-auto lg:px-40" data-aos="fade-up">
        <div>
          {/* <CodeIcon className="mx-auto inline-block w-10 mb-4" /> */}
          {/* 6495ED */}
          <h3 class="display-7 fw-bold" style={{color:"#4682B4"}}>My Work</h3>
          <p style={{marginBottom:"2rem"}}>
          Recent projects that highlight how I approach web development and design challenges.
          </p>
        </div>

        
     
          <Grid sx={{ flexGrow: 0 }} container spacing={2} >
            <Grid item xs={12}>
              <Grid container justifyContent="center" spacing={4}>     
                  {projects.map((item, index) => ( 
                     <Grid key={index} item>
                        <ProjectCard
                              key={index}
                              title={item.title}
                              subtitle={item.subtitle}
                              description={item.description}
                              image={item.image}
                              link = {item.link}
                          /> 
                        </Grid>
                      )
                  )}
                  </Grid> 
              </Grid>
      </Grid>
            
      </div>
      </Box>
     </section>
  );
}