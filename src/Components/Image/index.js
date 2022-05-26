import classNames from 'classnames';

import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';

function Image({ src, alt, className, fallBack: customFallback = images.noImage, ...props }, ref) {
    const [fallBack, setFallBack] = useState('');

    const handleImageErr = () => {
        setFallBack(customFallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            {...props}
            src={fallBack || src}
            alt={alt}
            ref={ref}
            onError={handleImageErr}
        />
    );
}

export default forwardRef(Image);
