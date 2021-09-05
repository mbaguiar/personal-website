import React from "react";
import { createUseStyles } from "react-jss";
import Layout from "../components/layout";
import ProjectCard from "../components/ProjectCard";

const useStyles = createUseStyles({
    projects: {
        display: "grid",
        gridGap: "1rem",
        gridTemplateColumns: "repeat(2, 1fr)",
        margin: "0 auto",
        marginTop: "2em",
    }
})

const ProjectsPage = () => {
    const classes = useStyles();

    return (
        <Layout>
            <title>Mariana Aguiar | Projects</title>
            <article>
                <div className={classes.projects}>
                    <ProjectCard title="Viz Catalogue"
                                 link="https://github.com/mbaguiar/viz-catalog"
                                 people="1"
                                 type="Personal"
                                 description="Full-stack web application to consult a catalogue of tools for visualising Linked Data collections."
                                 techs={["Node.js", "Express", "React", "SQLite"]}/>
                    <ProjectCard title="soundhub"
                                 link="https://github.com/mbaguiar/FEUP-LBAW"
                                 people="4"
                                 type="LBAW @FEUP"
                                 description="Web application to create and manage events."
                                 techs={["PHP", "Laravel", "PostgreSQL", "HTML/CSS", "Javascript", "Bootstrap"]}/>
                    <ProjectCard title="SNIPZ"
                                 link="https://github.com/mbaguiar/FEUP-LTW"
                                 people="2"
                                 type="LTW @FEUP"
                                 description="Simple social network web application to create and share code snippets."
                                 techs={["PHP", "SQLite", "HTML/CSS"]}/>
                    <ProjectCard title="NeuroPal"
                                 link=""
                                 people="12"
                                 type="LGP @FEUP"
                                 description="Mobile game to raise awareness of spinal cord injuries."
                                 techs={["Unity", "C#"]}/>
                    <ProjectCard title="Email Parser"
                                 link=""
                                 people="8"
                                 type="LDSO @FEUP"
                                 description="Email logs parser for failed email messages."
                                 techs={["Python", "Laravel", "PHP", "RabbitMQ"]}/>
                    <ProjectCard title="pilldrop"
                                 link="https://github.com/mbaguiar/FEUP-LCOM/tree/master/proj"
                                 people="2"
                                 type="LCOM @FEUP"
                                 description="2D game using low-level drivers, running in Minix."
                                 techs={["C", "Minix"]}/>
                </div>
            </article>
        </Layout>
    )
}

export default ProjectsPage;