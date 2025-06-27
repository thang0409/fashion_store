import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import ProductItem from '@components/ProductItem/ProductItem';

function Popularproduct({ data }) {
    const { container } = styles;
    return (
        <>
            <MainLayout>
                <div className={container}>
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
            </MainLayout>
        </>
    );
}

export default Popularproduct;
