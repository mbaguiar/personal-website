import React from "react";
import Layout from "../components/Layout";
import Projects from "../components/Projects";
import ProjectsMobile from "../components/ProjectsMobile";
import { useWindowSize } from "../hooks/windowSize";

const ProjectsPage = () => {
    const device = useWindowSize();
    return (
        <Layout>
            <title>Mariana Aguiar | Projects</title>
            <article>
                {device === "mobile" ?
			        <ProjectsMobile/> :
			        <Projects/>
                }
            </article>
        </Layout>
    )
}

export default ProjectsPage;