import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "gatsby";
import HamburgerMenu from "./HamburguerMenu";
import { useState } from "react";
import HamburguerIcon from "./HamburguerIcon";

const useStyles = createUseStyles({
    navbar: {
        height: "60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "2em",
    },
    menuOption: {
        color: "black",
        fontSize: "1.5em",
        marginLeft: "2em",
        textDecoration: "none",
        fontFamily: "'Poppins', sans-serif",
        fontWeight: "600",
    },
    logoText: {
        color: "black",
        fontSize: "1.7rem",
        textDecoration: "none",
        fontFamily: "'Poppins', sans-serif",
        fontWeight: "600",
    }
})

export const HeaderMobile = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    return (
        <header className={classes.navbar}>
            <Link className={classes.logoText} to="/">
                MARIANA AGUIAR
            </Link>
            <HamburgerMenu setOpen={setOpen} open={open}/>
            <HamburguerIcon setOpen={setOpen} open={open}/>
        </header>
    )

}

export default HeaderMobile;