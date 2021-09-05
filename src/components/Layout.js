import React from "react";
import { createUseStyles } from "react-jss";
import { useWindowSize } from "../hooks/windowSize";
import Header from "./Header";
import Footer from "./Footer";

const useSyles = createUseStyles({

    page: {
        minHeight: "93vh",
        position: "relative",
        paddingBottom: "4em",
        marginLeft: "2em",
        marginRight: "2em",
    },
    mainDesktop: {
        paddingBottom: "2em",
        maxWidth: "1200px",
        margin: "0 auto",
    },
    mainMobile: {
        padding: "2em 0px",
        maxWidth: "100vw",
        margin: "0 auto",
    }

})

export const Layout = ({ children }) => {
    const classes = useSyles();
    const device = useWindowSize();

    return (
        <div className={classes.page}>
            <Header/>
            {device === "desktop" ?
                <main className={classes.mainDesktop}>
                    {children}
                </main> :
                <main className={classes.mainMobile}>
                    {children}
                </main>
            }
            <Footer/>
        </div>
    )
};

export default Layout;