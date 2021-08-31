import React from "react";
import { createUseStyles } from "react-jss";
import { useWindowSize } from "../hooks/windowSize";
import Header from "./Header";
import Footer from "./Footer";

const useSyles = createUseStyles({

    page: {
        minHeight: "100vh",
        position: "relative",
        paddingBottom: "4em",
        paddingLeft: "2em",
        paddingRight: "2em",
    },
    mainDesktop: {
        maxWidth: "80 vw",
        margin: "0 auto",
    },
    mainMobile: {
        maxWidth: "85 vw",
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