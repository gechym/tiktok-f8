import React from 'react';
import classNames from 'classnames/bind';
import style from './menu.module.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
const cx = classNames.bind(style);

const MenuItem = ({ title, to, icon, iconActive }) => {
    return (
        <NavLink
            to={to}
            className={(nav) => {
                return cx('menu-item', { active: nav.isActive });
            }}
        >
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('icon-active')}>{iconActive}</span>
            <span className={cx('menu-title')}>{title}</span>
        </NavLink>
    );
};

MenuItem.propTypes = {
    title: PropTypes.string,
    to: PropTypes.string,
    icon: PropTypes.node,
    iconActive: PropTypes.node,
};

export default MenuItem;
