import React from 'react';
import PropTypes from 'prop-types';

const Menu = ({ children }) => {
    return <nav>{children}</nav>;
};

Menu.propTypes = {
    children: PropTypes.node,
};

export default Menu;
