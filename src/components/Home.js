import React from "react";
import {Typography, Avatar, Grid, Box} from "@material-ui/core";
import Typed from "react-typed";
import {makeStyles} from "@material-ui/core/styles";
// import Particles from "react-particles-js";


// With the help from: https://www.youtube.com/watch?v=9Q555VoPe4M   50min
const useStyles = makeStyles(theme => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title:{
    color:"#FF5833"
  },
  subtitle:{
    color:"#096213",
    marginBottom:"3rem"
  },
  container:{
    position: "absolute",
    top: "45%",
    left:"50%",
    transform:"translate(-50%, -50%)",
    width:"100vw",
    textAlign:"center",
    zIndex: 1,
    
  }
}))

export default function Home() { 
  const classes = useStyles();

  return (
    <section id="home" className="homebg" >
      {/* style={{backgroundImage: `url("image/head_bg.jfif")`, backgroundRepeat: "no-repeat"}}> */}
      {/* <div style={{backgroundImage: `url("image/head_bg.jfif")`}}> */}
      <Box className={classes.container} style={{backgroundColor:'aliceblue', width:"35%"}}>
        {/* <Particles 
          params ={{
            particles:{
            number:{
              value:45
            }
          }
        }}
        /> */}
        <Grid container justify="center">
          <Avatar className={classes.avatar} src={'image/happy_doggy.jfif'} alt="HappyDoggy666" />
        </Grid>
        <Typography className={classes.title} variant="h4"> 
          <Typed strings={["Happy Doggie666"]} typeSpeed={40}/>
        </Typography>
        <br/>
        <Typography variant="h5" className={classes.subtitle}> 
          <Typed 
          strings={["Web Development", "Machine Learning","UIUX Design"]} 
          typeSpeed={40}
          backSpeed={60}
          loop
          />
        </Typography>
      </Box>
      {/* </div> */}
    </section>
  );
}