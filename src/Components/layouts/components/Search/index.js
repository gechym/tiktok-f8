import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadleesTippy from '@tippyjs/react/headless';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';

import { WrapperPopper } from '~/Components/popper';
import styles from './search.module.scss';
import AccountItem from '~/Components/AccountItem';
import { SearchIcon } from '~/Components/icons';

const cx = classNames.bind(styles);

let so_lan_render = 0;

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const [showResult, setShowResult] = useState(true);

    const refInputSearch = useRef();

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 0);
    }, []);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        refInputSearch.current.focus();
    };

    const handleHideResult = () => setShowResult(false);
    const handleShowResult = () => setShowResult(true);

    console.log(++so_lan_render);
    return (
        <HeadleesTippy
            visible={showResult && searchResult.length > 0 && searchValue.length > 0}
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
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={refInputSearch}
                    value={searchValue}
                    onChange={(e) => {
                        setSearchValue(e.target.value);
                    }}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onFocus={handleShowResult}
                />

                {!!searchValue && (
                    <button onClick={handleClear} className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}

                <button className={cx('search-btn')}>
                    <SearchIcon height="2.4rem" width="2.4rem" />
                </button>
            </div>
        </HeadleesTippy>
    );
}

export default Search;
