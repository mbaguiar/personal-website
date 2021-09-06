import * as React from "react";
import Layout from "../components/Layout";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
	text: {
		fontFamily: "'Inconsolata', monospace",
        fontSize: "1.4em",
		fontWeight: "400",
		marginTop: "50px",
	}
})

// markup
const NotFoundPage = () => {
	const classes = useStyles();

	return (
		<Layout>
			<title>Page Not Found</title>
			<span className={classes.text}>404 page not found</span>
		</Layout>
	)
}

export default NotFoundPage
