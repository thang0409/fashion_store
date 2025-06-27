import CountdownTimer from '@components/CountdownTimer/CountdownTimer';
import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import CountdownBanner from '@components/CountdownBanner/CoutdownBanner';
import ProductItem from '@components/ProductItem/ProductItem';

function HeadingListProduct({ data }) {
    const { container, containerItem } = styles;

    console.log(data);

    return (
        <MainLayout>
            {/* <CountdownTimer targetDate={targetDate} /> */}
            <div className={container}>
                <CountdownBanner />

                <div className={containerItem}>
                    {data.map((item, index) => {
                        return (
                            <ProductItem
                                key={index}
                                src={item.images[0]}
                                prevSrc={item.images[1]}
                                name={item.name}
                                prices={item.price}
                            />
                        );
                    })}
                </div>
            </div>
        </MainLayout>
    );
}

export default HeadingListProduct;
