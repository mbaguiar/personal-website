import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "gatsby";
import { classExpression } from "@babel/types";

const useStyles = createUseStyles({
    navbar: {
        height: "60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "2em",
    },
    
    menu: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
    },
    menuOption: {
        color: "black",
        "&:hover": {
            color: "black",
            opacity: "50%",
            transition: "0.5s",
        },
        fontSize: "1.5em",
        marginLeft: "2em",
        textDecoration: "none",
        fontFamily: "'Poppins', sans-serif",
        fontWeight: "600",
    },
    logoText: {
        color: "black",
        fontSize: "2.5rem",
        textDecoration: "none",
        fontFamily: "'Poppins', sans-serif",
        fontWeight: "600",
        color: "black",
        "&:hover": {
            color: "#666B6A",
            transition: "0.5s",
        },
    },
})

export const Header = () => {
    const classes = useStyles();
    return (
        <header className={classes.navbar}>
            <Link className={classes.logoText} to="/">
                MARIANA AGUIAR
            </Link>
            <div className={classes.menu}>
                <Link className={classes.menuOption} to="/">
                    ABOUT ME
                </Link>
                <Link className={classes.menuOption} to="/projects">
                    PROJECTS
                </Link>
                <span className={classes.menuOption}>
                    RESUME
                </span>
            </div>
        </header>
    )

}

export default Header;