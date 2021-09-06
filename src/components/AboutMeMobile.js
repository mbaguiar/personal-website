import React from "react";
import { createUseStyles } from "react-jss";
import photo from "../assets/photo.png";

const useStyles = createUseStyles({
    aboutMe: {
        display: "flex",
		flexDirection: "row",
		alignItems: "center",
	},
	title: {
		fontFamily: "'Poppins', sans-serif",
		fontWeight: "400",
		fontSize: "3em",
		textDecoration: "none",
		marginLeft: "30px",
        marginTop: "-40px",
        zIndex: "2",
	},
    image: {
		filter: "grayscale(100%)",
		zIndex: "1",
        marginLeft: "-30px",
	},
	titleDecoration: {
		background: "linear-gradient(120deg, #95d5b2 0%, #95d5b2 100%)",
		backgroundRepeat: "no-repeat",
		backgroundSize: "100% 40%",
		backgroundPosition: "0 50%",
		padding: "0 10px 0 10px",
	},
	description: {
		fontFamily: "'Inconsolata', monospace",
		fontSize: "1.2em",
		padding: "0 2.5em 1em 3.5em",
		fontWeight: "400",
		fontStretch: "expanded",
		display: "flex",
		flexDirection: "column",
	},
	paragraph: {
		marginBottom: "25px",
		listStyleType: "square",
	},
    text: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }

});

export const AboutMeMobile = () => {
    const classes = useStyles();

    return (
        <article className={classes.aboutMe}>
            <div className={classes.text}>
            <img className={classes.image} src={photo} alt="profile" width="30%"/>
            <span className={classes.title}><i className={classes.titleDecoration}>hello</i></span>
            <ul className={classes.description}>
                <li className={classes.paragraph}> My name is Mariana Aguiar and I'm a <b>software enginner</b>, currently based in Porto, PT.</li>
                <li className={classes.paragraph}> I've just graduated from FEUP with a <b>Masters in Informatics Engineering</b>.</li>
                <li className={classes.paragraph}> I have a passion for creating and building things, and I am especially interested in <b>web and application development</b>. </li>
                <li className={classes.paragraph}> In my free time, you can usually find me sitting in a coffee shop reading a fantasy novel or strolling around small art shops. </li>
            </ul>
            </div>
	  </article> 
    )
};

export default AboutMeMobile;