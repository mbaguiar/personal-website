import * as React from "react"
import Layout from "../components/Layout";
import "../styles/global.scss";
import AboutMeMobile from "../components/AboutMeMobile";
import AboutMe from "../components/AboutMe";
import { useMediaQuery } from "react-responsive";

const IndexPage = () => {
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)"});

  return (
	<Layout>
		<title>Mariana Aguiar</title>
		{isTabletOrMobile ? 
			<AboutMeMobile/> :
			<AboutMe/>
		}
	</Layout>
  )
}

export default IndexPage
