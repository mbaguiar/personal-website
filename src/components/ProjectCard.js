import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CgArrowTopRight } from '@react-icons/all-files/cg/CgArrowTopRight'

const useStyles = createUseStyles({
    card: {
        padding: "2em",
        border: "2px solid black",
        margin: "20px",
    },
    cardContent: {
        display: "flex",
        flexDirection: "column",
    },
    title: {
        fontFamily: "'Poppins', sans-serif",
        fontWeight: "400",
        fontSize: "2.5em",
        marginBottom: "10px",
        textDecoration: "none",
        color: "black",
        
    },
    titleLink: {
        "&:hover": {
            color: "#666B6A",
            transition: "0.5s",
        },
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
        marginBottom: "20px",
        fontWeight: "400",
        fontStretch: "expanded",
        marginTop: "15px",
    },
    technologies: {
        display: "flex",
        flexWrap: "wrap",
    },
    techName: {
        fontFamily: "'Inconsolata', monospace",
        fontWeight: "400",
        fontSize: "1.1em",
        color: "rgba(0, 0, 0, 0.6)",
        margin: "0 15px 10px 0",
    },
    info: {
        fontFamily: "'Inconsolata', monospace",
        fontSize: "1.1em", 
        fontWeight: "300",
    },
    icon: {
        marginLeft: "4px",
        verticalAlign: "0em",
    },
    link: {
        verticalAlign: "-13px",
        fontSize: "1.1em",
        marginLeft: "5px",
    }

});

export const ProjectCard = ({ title, description, link, people, techs, type}) => {
    library.add(faUser);
    const classes = useStyles();

    return (
        <div className={classes.card}>
            <div className={classes.cardContent}>
                {link ?
                    <a href={link} className={`${classes.title} ${classes.titleLink}`}><i className={classes.titleDecoration}>{title}</i> <CgArrowTopRight className={classes.link}/> </a> :
                    <span className={classes.title}><i className={classes.titleDecoration}>{title}</i></span>
                }
                <div>
                    <span className={classes.info}>{type}</span>
                    <span className={classes.info}> | {people}</span>
                    <FontAwesomeIcon className={classes.icon} icon={['fas', 'user']} size="xs"/>
                </div>
                <span className={classes.description}>{description}</span>
                <div className={classes.technologies}>
                    {techs.map((item, index) => (
                        <span className={classes.techName}>{item}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

ProjectCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
    people: PropTypes.number,
    techs: PropTypes.arrayOf(PropTypes.string),
    type: PropTypes.string,
};

export default ProjectCard;