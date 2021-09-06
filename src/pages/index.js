import * as React from "react"
import Layout from "../components/Layout";
import "../styles/global.scss";
import AboutMeMobile from "../components/AboutMeMobile";
import AboutMe from "../components/AboutMe";
import { useWindowSize } from "../hooks/windowSize";

const IndexPage = () => {
	const device = useWindowSize();
	return (
		<Layout>
			<title>Mariana Aguiar</title>
			{device === "mobile" ? 
				<AboutMeMobile/> :
				<AboutMe/>
			}
		</Layout>
)
}

export default IndexPage
