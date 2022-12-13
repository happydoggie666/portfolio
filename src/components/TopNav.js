import React from "react";
import {Typography, Avatar, Grid, Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import ProgressBar from 'react-bootstrap/ProgressBar';

const useStyles = makeStyles(theme => ({
  container:{
    position: "relative",
  }
}))

function jumpToTarget(idName) {
  var element = document.getElementById(idName);
  var positionX = element.offsetLeft;
  var positionY = element.offsetTop-100;
  window.scrollTo(positionX, positionY); 
}

const Navbar = () => {

  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{width: "100%"}}>
          <div>
            <p className="navbar-brand" style={{fontFamily: "sans-serif", fontWeight: "400", fontSize: "1.3rem", cursor: "pointer"}} onClick={() => jumpToTarget('home')}>
              <img src={'image/happy_doggy.jfif'} weight={100} height={45} alt="logo" style={{margin: "0 5px"}}/>
              [HappyDoggie666]
            </p>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse  mr-3 justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="navbar-button" onClick={() => jumpToTarget('home')}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="navbar-button"  onClick={() => jumpToTarget('about')}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="navbar-button" onClick={() => jumpToTarget('projects')}>
                    Projects
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="navbar-button" onClick={() => jumpToTarget('contact')}>
                  Contact
                </a>
                {/* <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div> */}
              </li>
            </ul>
        </div>

      </nav>
    </Box>

  );
};

export default Navbar;