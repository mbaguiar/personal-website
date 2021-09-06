import React from "react";
import Layout from "../components/Layout";
import Projects from "../components/Projects";
import ProjectsMobile from "../components/ProjectsMobile";
import { Media } from 'gatsby-plugin-fresnel';

const ProjectsPage = () => {

    return (
        <Layout>
            <title>Mariana Aguiar | Projects</title>
            <article>
            <Media greaterThanOrEqual="lg">
			    <Projects/>
		    </Media>
		    <Media lessThan="lg">
			    <ProjectsMobile/> :
		    </Media>
            </article>
        </Layout>
    )
}

export default ProjectsPage;