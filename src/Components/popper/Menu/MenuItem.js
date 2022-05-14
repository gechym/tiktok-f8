import classNames from 'classnames/bind';
import Button from '~/Components/Button';
import styles from './menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    return (
        <>
            <Button to={data.to ? data.to : ''} leftIcon={data.icon} className={cx('menu-item')}>
                {data.title}
            </Button>
        </>
    );
}

export default MenuItem;
