import * as React from "react"
import Layout from "../components/Layout";
import "../styles/global.scss";
import photo from "../assets/photo.png";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
	aboutMe: {
		display: "flex",
		flexDirection: "row",
		marginTop: "10em",
		alignItems: "center",
	},
	image: {
		filter: "grayscale(100%)",
		zIndex: "1",
		marginTop: "-70px",
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
		padding: "2em",
        fontWeight: "400",
        fontStretch: "expanded",
		border: "2px solid black",
		marginTop: "-45px",
		background: "white",
	},
	text: {
		alignSelf: "flex-end",
		marginTop: "50px",
		marginLeft: "-80px",
		zIndex: "2",
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
		  <div className={classes.description}>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in mauris in augue pretium condimentum. 
			Nam vestibulum in augue id commodo. Proin interdum dolor lorem, eget iaculis neque commodo a. Ut at libero dictum, sagittis odio ut, convallis justo. Fusce iaculis libero sed laoreet rhoncus. Fusce erat sem, luctus convallis dolor ac, commodo pretium arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus ullamcorper elit ac lorem dignissim, non rhoncus sapien egestas. 
			In sollicitudin leo commodo felis cursus laoreet.
		  </div>
		</div>
	  </article>
	</Layout>
  )
}

export default IndexPage
