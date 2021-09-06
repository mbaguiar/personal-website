import React from "react";
import PropTypes from "prop-types";
import Hamburger from "hamburger-react";

export const HamburguerIcon = ({ open, setOpen}) => {
    return (
        <div style={{zIndex: "200"}}>
            <Hamburger toggled={open} toggle={() => setOpen(!open)}/>
        </div>
    )
};

HamburguerIcon.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
};

export default HamburguerIcon;