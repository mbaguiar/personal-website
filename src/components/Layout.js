import React from "react";
import { createUseStyles } from "react-jss";
import Header from "./Header";
import Footer from "./Footer";
import { Media } from 'gatsby-plugin-fresnel';
import HeaderMobile from "./HeaderMobile";
import Helmet from 'react-helmet';
import favicon from '../assets/icon.png';

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

    return (
        <>
            <Helmet>
                <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
            </Helmet>
            <Media greaterThanOrEqual="lg">
                <div className={classes.page}>
                    <Header/>
                    <main className={classes.mainDesktop}>
                        {children}
                    </main>
                    <Footer/>
                </div>
            </Media>
            <Media lessThan="lg">
                <div className={classes.pageMobile}>
                    <HeaderMobile/>
                    <main className={classes.mainMobile}>
                        {children}
                    </main>
                    <Footer/>
                </div>
            </Media>
        </>
    )
};

export default Layout;