import classNames from 'classnames/bind';
import Button from '~/Components/Button';
import styles from './menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    return (
        <>
            <Button
                to={data.to ? data.to : ''}
                href={data.href ? data.href : undefined}
                leftIcon={data.icon}
                onClick={onClick}
                className={cx('menu-item')}
            >
                {data.title}
            </Button>
        </>
    );
}

export default MenuItem;
