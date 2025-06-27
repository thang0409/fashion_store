import styles from './styles.module.scss';
import heartIcon from '@icons/svgs/heart.svg';
import cartIcon from '@icons/svgs/cart_icon.svg';
import reloadIcon from '@icons/svgs/reload_icon.svg';

import productImg1 from '@icons/image/Image-1.1-min.png';
import productImg2 from '@icons/image/Image-1.2-min.png';

function ProductItem({ src, prevSrc, name, prices }) {
    const { boxImg, showImage, showFn, boxIcon, title, price, boxProduct } =
        styles;
    return (
        <div className={boxProduct}>
            <div className={boxImg}>
                <img src={src} alt='' />
                <img className={showImage} src={prevSrc} alt='' />

                <div className={showFn}>
                    <div className={boxIcon}>
                        <img src={cartIcon} alt='' />
                    </div>

                    <div className={boxIcon}>
                        <img src={heartIcon} alt='' />
                    </div>

                    <div className={boxIcon}>
                        <img src={reloadIcon} alt='' />
                    </div>

                    <div className={boxIcon}>
                        <img src={cartIcon} alt='' />
                    </div>
                </div>
            </div>

            <div className={title}>{name}</div>

            <div className={price}>${prices}</div>
        </div>
    );
}

export default ProductItem;
