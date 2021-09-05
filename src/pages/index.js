import * as React from "react"
import Layout from "../components/Layout";
import "../styles/global.scss";
import photo from "../assets/photo.png";
import { createUseStyles } from "react-jss";
import { IoIosSquareOutline } from "@react-icons/all-files/io/IoIosSquareOutline";

const useStyles = createUseStyles({
	aboutMe: {
		display: "flex",
		flexDirection: "row",
		marginTop: "12em",
		alignItems: "center",
	},
	image: {
		filter: "grayscale(100%)",
		zIndex: "1",
		marginTop: "-90px",
	},
	title: {
		fontFamily: "'Poppins', sans-serif",
        fontWeight: "400",
        fontSize: "4.5em",
        marginBottom: "10px",
        textDecoration: "none",
		marginLeft: "40px",
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
        fontSize: "1.4em",
		padding: "2em 2em 1em 2.5em",
        fontWeight: "400",
        fontStretch: "expanded",
		border: "2px solid black",
		marginTop: "-45px",
		background: "white",
		display: "flex",
		flexDirection: "column",
	},
	text: {
		alignSelf: "flex-end",
		marginTop: "30px",
		marginLeft: "-80px",
		zIndex: "2",
	},
	paragraph: {
		marginBottom: "25px",
		listStyleType: "square",
	}
})

const IndexPage = () => {
	const classes = useStyles();

  return (
	<Layout>
	  <title>Mariana Aguiar</title>
	  <article className={classes.aboutMe}>
		<img className={classes.image} src={photo} alt="profile photo" width="400"/>
		<div className={classes.text}>
		  <span className={classes.title}><i className={classes.titleDecoration}>hello</i></span>
		  <ul className={classes.description}>
			<li className={classes.paragraph}> My name is Mariana Aguiar and I'm a <b>software enginner</b>, currently based in Porto, PT.</li>
			<li className={classes.paragraph}> I've just graduated from FEUP with a <b>Masters in Informatics Engineering</b>.</li>
			<li className={classes.paragraph}> I have a passion for creating and building things, and I am especially interested in <b>web and application development</b>. </li>
			<li className={classes.paragraph}> In my free time, you can usually find me sitting in a coffee shop reading a fantasy novel or strolling around small art shops. </li>
		  </ul>
		</div>
	  </article>
	</Layout>
  )
}

export default IndexPage
