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
        fontSize: "1.5em",
        marginRight: "2em",
        textDecoration: "none",
        fontFamily: "'Poppins', sans-serif",
    },
    logoText: {
        color: "black",
        fontSize: "2.5rem",
        textDecoration: "none",
        fontFamily: "'Poppins', sans-serif",
        color: "#2b2727",
        "&:hover": {
            color: "#2b2727",
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
                <Link className={classes.menuOption} to="/experience">
                    EXPERIENCE
                </Link>
                <span className={classes.menuOption}>
                    RESUME
                </span>
            </div>
        </header>
    )

}

export default Header;