import React from "react";
import { createUseStyles } from "react-jss";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const useStyles = createUseStyles({
    footer: {
        margin: "0 auto",
        width: "100%",
        position: "absolute",
        bottom: "2em",
        textAlign: "center",
        color: "black",
        fontFamily: "'Poppins', sans-serif",
    },
    
    footerDiv: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    footerLink: {
        color: "black",
        "&:hover": {
            color: "#666B6A",
            transition: "all 0.5s ease-in-out",
            transform: "scale(1.1)"
        },
        fontSize: "1.5em",
        marginLeft: "20px",
    }
});

export const Footer = () => {
    library.add(fab, faEnvelope, faGithubAlt, faLinkedinIn);
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <div className={classes.footerDiv}>
                <span>MARIANA AGUIAR</span>
                <a className={classes.footerLink} href="mailto:marianabarbosaaguiar@gmail.com">
                    <FontAwesomeIcon icon="envelope"></FontAwesomeIcon>
                </a>
                <a className={classes.footerLink} href="https://github.com/mbaguiar">
                    <FontAwesomeIcon icon={['fab', 'github-alt']} />
                </a>
                <a className={classes.footerLink} href="https://linkedin.com/in/mbaguiar/">
                    <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                </a>
            </div>
        </footer>
    )
}

export default Footer;