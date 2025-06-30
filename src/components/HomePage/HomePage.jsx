import Banner from '@components/Banner/Banener';
import MyHeader from '@components/Header/Header';
import styles from './styles.module.scss';
import AdvanceHeadling from '@components/AdvanceHeadling/AdvanceHeadling';
import Info from '@components/Info/Info';
import HeadingListProduct from '@components/HeadingListProduct/HeadingListProduct';
import { useEffect, useState } from 'react';
import getProduct from '@/apis/productsService';
import Popularproduct from '@components/PopularProduct/PopularProduct';
import SaleHomePage from '@components/SaleHomePage/SaleHomePage';
import MyFooter from '@components/Footer/Footer';

function HomePage() {
    const { container } = styles;
    const [listProduct, setListProduct] = useState([]);

    useEffect(() => {
        getProduct().then((res) => {
            setListProduct(res.contents);
        });
    }, []);

    console.log(listProduct);

    return (
        <div>
            <div className={container}>
                <MyHeader />
                <Banner />
                <Info />
                <AdvanceHeadling />
                <HeadingListProduct data={listProduct.slice(0, 2)} />
                <Popularproduct data={listProduct.slice(2, 10)} />
                <SaleHomePage />
                <MyFooter />
            </div>
        </div>
    );
}

export default HomePage;
