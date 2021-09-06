import React from "react";
import Layout from "../components/Layout";
import { useMediaQuery } from "react-responsive";
import Projects from "../components/Projects";
import ProjectsMobile from "../components/ProjectsMobile";

const ProjectsPage = () => {
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)"});

    return (
        <Layout>
            <title>Mariana Aguiar | Projects</title>
            <article>
                {isTabletOrMobile ? 
                    <ProjectsMobile/> :
                    <Projects/>
                }
            </article>
        </Layout>
    )
}

export default ProjectsPage;