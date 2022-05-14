import { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import {
    faCircleXmark,
    faEarthAsia,
    faEllipsisVertical,
    faMagnifyingGlass,
    faQuestion,
    faQuestionCircle,
    faSpinner,
    faWhiskeyGlass,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { WrapperPopper } from '~/Components/popper';
import AccountItem from '~/Components/AccountItem';
import Button from '~/Components/Button';
import Menu from '~/Components/popper/Menu';

const cx = classNames.bind(styles);

const menuItem = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
        title: 'English',
        to: '/profile',
    },
    {
        icon: <FontAwesomeIcon icon={faQuestionCircle}></FontAwesomeIcon>,
        title: 'Keyboard shortcuts',
        to: '/upload',
    },
    {
        icon: <FontAwesomeIcon icon={faWhiskeyGlass}></FontAwesomeIcon>,
        title: 'Feedback and help',
        to: '/following',
    },
];

function Header() {
    const [searchResult] = useState([]);

    // useEffect(() => {
    //     // Call API
    //     setTimeout(() => {
    //         setSearchResult([1, 2, 3]);
    //     }, 3000);
    // });

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Tiktok" />

                <Tippy
                    visible={searchResult.length > 0}
                    interactive
                    render={(attrs) => {
                        return (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <WrapperPopper>
                                    <h4 className={cx('search-title')}>Accounts</h4>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </WrapperPopper>
                            </div>
                        );
                    }}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />

                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>

                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>

                <div className={cx('actions')}>
                    <Button text small>
                        upload
                    </Button>

                    <Button to={'/'} primary small>
                        Login
                    </Button>

                    <Menu items={menuItem}>
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;

/* <Button text small>
                        upload
                    </Button>

                    <Button primary small>
                        Login
                    </Button>

                    <Button primary small disabled onClick={() => alert('cc')}>
                        Login
                    </Button>

                    <Button outline small>
                        Register
                    </Button>

                    <Button rounded small>
                        new
                    </Button>

                    <Button rounded outline small>
                        new
                    </Button>

                    <Button rounded outline small className={cx('test-customize')}>
                        customize classes
                    </Button> */
