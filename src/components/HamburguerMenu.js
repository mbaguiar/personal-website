import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "gatsby";
import PropTypes from "prop-types";

const useStyles = createUseStyles({
    menuOption: {
        color: "black",
        fontSize: "2em",
        marginBottom: "1em",
        textDecoration: "none",
        fontFamily: "'Poppins', sans-serif",
        fontWeight: "600",
    },
    open: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to bottom, #FFFFFF, #ECE9E6)",
        zIndex: "100",
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        overflow: "hidden",
    },
    closed: {
        display: "none"
    }
})

export const HamburgerMenu = ({ open, setOpen }) => {
    const classes = useStyles();
    const menu = open ? classes.open : classes.closed;

    return (
        <div className={menu}>
            <Link className={classes.menuOption} onClick={() => setOpen(!open)} to="/">
                ABOUT ME
            </Link>
            <Link className={classes.menuOption} onClick={() => setOpen(!open)} to="/projects">
                PROJECTS
            </Link>
            <a href="https://drive.google.com/file/d/1jyLEfdlFNR0LKfvd_irDjrnQG_nRTL6k/view?usp=sharing" className={classes.menuOption}>
                RESUME
            </a>
        </div>
    )
};

HamburgerMenu.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
};

export default HamburgerMenu;