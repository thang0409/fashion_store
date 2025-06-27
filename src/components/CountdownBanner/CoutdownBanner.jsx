import CountdownTimer from '@components/CountdownTimer/CountdownTimer';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';

function CountdownBanner() {
    const { container, containerTimer, title } = styles;
    const targetDate = '2025-12-31T23:59:59';
    return (
        <div className={container}>
            <div className={containerTimer}>
                <CountdownTimer targetDate={targetDate} />
            </div>
            <h1 className={title}>The Classics Make A Comeback</h1>

            <Button content={'Buy now'} />
        </div>
    );
}

export default CountdownBanner;
