import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { WrapperPopper } from '~/Components/popper';
import styles from './menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ children, items }) {
    const renderDataItems = (items) => {
        return items.map((item, index) => {
            return <MenuItem key={index} data={item} />;
        });
    };

    return (
        <Tippy
            interactive
            visible
            delay={[0, 400]}
            placement="bottom-end"
            render={(attrs) => {
                return (
                    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                        <WrapperPopper className={cx('menu-popper')}>{renderDataItems(items)}</WrapperPopper>
                    </div>
                );
            }}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
