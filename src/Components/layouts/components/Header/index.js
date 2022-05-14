import { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { WrapperPopper } from '~/Components/popper';
import AccountItem from '~/Components/AccountItem';
import Button from '~/Components/Button';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);

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

                    <Button primary small leftIcon={<FontAwesomeIcon icon={faMagnifyingGlass} />}>
                        Login
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;

{
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
}
