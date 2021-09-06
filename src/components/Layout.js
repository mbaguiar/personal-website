import React from "react";
import { createUseStyles } from "react-jss";
import Header from "./Header";
import Footer from "./Footer";
import { useMediaQuery } from "react-responsive";
import HeaderMobile from "./HeaderMobile";

const useSyles = createUseStyles({

    page: {
        minHeight: "93vh",
        position: "relative",
        paddingBottom: "4em",
        marginLeft: "2em",
        marginRight: "2em",
    },
    pageMobile: {
        minHeight: "94vh",
        position: "relative",
        paddingBottom: "4em",
    },
    mainDesktop: {
        paddingBottom: "2em",
        maxWidth: "1200px",
        margin: "0 auto",
    },
    mainMobile: {
        paddingBottom: "2em",
        maxWidth: "100vw",
        margin: "0 auto",
    }
})

export const Layout = ({ children }) => {
    const classes = useSyles();
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)"});

    return (
        isTabletOrMobile ?
            <div className={classes.pageMobile}>
                <HeaderMobile/>
                <main className={classes.mainMobile}>
                    {children}
                </main>
                <Footer/>
            </div> :
            <div className={classes.page}>
                <Header/>
                <main className={classes.mainDesktop}>
                    {children}
                </main>
                <Footer/>
            </div> 
    )
};

export default Layout;