import * as React from "react"
import Layout from "../components/Layout";
import "../styles/global.scss";
import AboutMeMobile from "../components/AboutMeMobile";
import AboutMe from "../components/AboutMe";
import { Media } from 'gatsby-plugin-fresnel';

const IndexPage = () => {

  return (
	<Layout>
		<title>Mariana Aguiar</title>
		<Media greaterThanOrEqual="lg">
			<AboutMe/>
		</Media>
		<Media lessThan="lg">
			<AboutMeMobile/> :
		</Media>
	</Layout>
  )
}

export default IndexPage
