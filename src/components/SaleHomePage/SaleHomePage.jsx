import { useState, useRef, useEffect } from 'react';

import styles from './styles.module.scss';
import image1 from '../../assets/icon/image/Image_1.png';
import image2 from '../../assets/icon/image/Image_2.png';
import Button from '@components/Button/Button';

function SaleHomePage() {
    const { container, title, des, boxBtn, boxImage } = styles;

    const [translateX, setTranslateX] = useState(80);
    const prevScroll = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.pageYOffset;
            const direction =
                currentScroll > prevScroll.current ? 'down' : 'up';
            prevScroll.current = currentScroll;

            setTranslateX((prev) => {
                if (direction === 'down' && currentScroll >= 1500) {
                    return Math.max(0, prev - 1);
                } else if (direction === 'up') {
                    return Math.min(80, prev + 1);
                }
                return prev;
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={container}>
            <div
                className={boxImage}
                style={{
                    transform: `translateX(${translateX}px)`,
                    transition: `transform 0.6s ease`
                }}
            >
                <img src={image1} alt='' />
            </div>
            <div>
                <h2 className={title}>Sale of the year</h2>
                <p className={des}>
                    Libero sed faucibus facilisis fermentum. Est nibh sed massa
                    sodales.
                </p>
                <div className={boxBtn}>
                    <Button content={'Read more'} isPrimary={false} />
                </div>
            </div>
            <div
                className={boxImage}
                style={{
                    transform: `translateX(-${translateX}px)`,
                    transition: `transform 0.6s ease`
                }}
            >
                <img src={image2} alt='' />
            </div>
        </div>
    );
}

export default SaleHomePage;
