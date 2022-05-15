import { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadleesTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import {
    faCircleXmark,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faMagnifyingGlass,
    faMessage,
    faQuestionCircle,
    faSignOut,
    faSpinner,
    faUser,
    faWhiskeyGlass,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { WrapperPopper } from '~/Components/popper';
import AccountItem from '~/Components/AccountItem';
import Button from '~/Components/Button';
import Menu from '~/Components/popper/Menu';
import { InboxIcon, MessageICon, UploadICon } from '~/Components/icons';

const cx = classNames.bind(styles);

const menuItem = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'english',
                    icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
                    to: '/language',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'việt nam',
                    icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
                    href: '/language',
                },
            ],
        },
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

    const handleOnChang = (item) => {
        switch (item.type) {
            case 'language':
                alert('Đổi ngôn ngữ');
                break;

            default:
                break;
        }
    };

    const currentUser = true;
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>,
            title: 'View Profile ',
            to: '/@bao',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins}></FontAwesomeIcon>,
            title: 'Get coins',
            to: '/cc',
        },
        {
            icon: <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>,
            title: 'Setting',
            to: '/cc',
        },
        ...menuItem,
        {
            icon: <FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon>,
            title: 'Logout',
            to: '/cc',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Tiktok" />

                <HeadleesTippy
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
                        <input
                            placeholder="Search accounts and videos"
                            spellCheck={false}
                        />

                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>

                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadleesTippy>

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload video" delay={200}>
                                <button className={cx('action-btn')}>
                                    <UploadICon />
                                </button>
                            </Tippy>
                            <Tippy content="Message" delay={200}>
                                <button className={cx('action-btn')}>
                                    <MessageICon height="2.6rem" width="2.6rem" />
                                </button>
                            </Tippy>

                            <Tippy content="Message" delay={200}>
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>upload</Button>

                            <Button to={'/'} primary>
                                Login
                            </Button>
                        </>
                    )}

                    <Menu
                        items={currentUser ? userMenu : menuItem}
                        onChange={handleOnChang}
                    >
                        {currentUser ? (
                            <img
                                className={cx('user-avatar')}
                                src="https://static.fullstack.edu.vn/static/media/f8-icon.7ad2b161d5e80c87e516.png"
                                alt="Bao"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
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
