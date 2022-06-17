import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';

import { WrapperPopper } from '~/Components/popper';
import styles from './menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Menu({ children, items, onChange = () => {} }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderDataItems = () => {
        return current.data.map((item, index) => {
            let isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            // Check itm có lớp con ko
                            // console.log(item.children);

                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            // sử ly logic từ lớp cha
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };


    const  renderResult = (attrs) => {
        return (
            <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                <WrapperPopper className={cx('menu-popper')}>
                    {history.length > 1 && (
                        <Header
                            title={current.title}
                            onBack={() => {
                                setHistory(
                                    (prev) => prev.slice(0, prev.length - 1), // cắt một cấp menu trong mảng history
                                );
                            }}
                        />
                    )}
                    <div className={cx('menu-body')}>{renderDataItems()}</div>
                </WrapperPopper>
            </div>
        );
    }

    const handleResetMenu = () => {
        setHistory((prev) => prev.slice(0, 1));
    }

    return (
        <Tippy
            interactive
            onHidden={handleResetMenu}
            hideOnClick="toggle"
            delay={[0, 400]}
            offset={[20, 20]}
            placement="bottom-end"
            render={renderResult}
        >
            {children}
        </Tippy>
    );
}

Menu.propsTypes = {
    children : PropTypes.node.isRequired,
    items : PropTypes.array.isRequired,
    onChange : PropTypes.func
}

export default Menu;
