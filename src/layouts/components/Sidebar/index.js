import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from '~/layouts/components/Sidebar/Menu';
import config from '~/config';
import {
    HomeIcon,
    UserGroupIcon,
    LiveIcon,
    HomeIconActive,
    UserGroupIconActive,
    LiveIconActive,
} from '~/Components/icons/index';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For your"
                    to={config.router.home}
                    icon={<HomeIcon />}
                    iconActive={<HomeIconActive />}
                />
                <MenuItem
                    title="For your"
                    to={config.router.following}
                    icon={<UserGroupIcon />}
                    iconActive={<UserGroupIconActive />}
                />
                <MenuItem
                    title="For your"
                    to={config.router.live}
                    icon={<LiveIcon />}
                    iconActive={<LiveIconActive />}
                />
            </Menu>
        </aside>
    );
}

export default Sidebar;
