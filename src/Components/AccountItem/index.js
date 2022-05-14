import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './accountItem.modle.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://lh3.googleusercontent.com/a-/AOh14Gh5d1DCsCtsotOD4F6AjnSvAcFpgXm__nK-nCgS=s360-p-rw-no"
                alt="avt"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    Nguyễn Văn A
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>brono1</span>
            </div>
        </div>
    );
}

export default AccountItem;
