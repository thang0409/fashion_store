import { IoIosClose } from 'react-icons/io';

import image from '@icons/image/Image_1.png';
import styles from './styles.module.scss';

function ItemProduct() {
    const { container, boxContent, title, price, boxClose } = styles;
    return (
        <div className={container}>
            <img src={image} alt='' />
            <div className={boxClose}>
                <IoIosClose style={{ fontSize: '20px' }} />
            </div>
            <div className={boxContent}>
                <div className={title}>Title</div>
                <div className={price}>99$</div>
            </div>
        </div>
    );
}

export default ItemProduct;
