import React from "react";
import {Typography, Avatar, Grid, Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container:{
    position: "relative",
  }
}))

const Navbar = () => {

  const classes = useStyles();

  return (
    <Box className={classes.container}>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div>
      <a className="navbar-brand" href="#">
        <img src={'image/happy_doggy.jfif'} weight={100} height={50} alt="logo" />
        [HappyDoggie666]
      </a>
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

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects">
                Projects
            </a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link" href="#contact">
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