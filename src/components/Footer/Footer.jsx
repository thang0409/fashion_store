import styles from './styles.module.scss';
import logo from '../../assets/icon/image/marseille-logo.png';
import payImg from '../../assets/icon/image/pay.webp';
import { dataMenu } from './constant.js';

function MyFooter() {
    const { container, boxNav, boxItem } = styles;
    return (
        <div className={container}>
            <div>
                <img width={160} height={55} src={logo} alt='' />
            </div>
            <div className={boxNav}>
                {dataMenu.map((item, index) => {
                    return (
                        <div className={boxItem} key={index}>
                            {item.content}
                        </div>
                    );
                })}
            </div>

            <div>
                <p style={{ textAlign: 'center' }}>Guaranteed safe ckeckout</p>
                <img src={payImg} alt='' />
            </div>

            <div>
                Copyright © 2024 XStore theme. Created by 8theme – WordPress
                WooCommerce themes.
            </div>
        </div>
    );
}

export default MyFooter;
