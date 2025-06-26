import { dataInfo } from '@components/Info/constants';
import MainLayout from '@components/Layout/Layout';
import InfoCard from './InfoCard/InfoCard';
import styles from './styles.module.scss';

function Info() {
    const { container } = styles;

    return (
        <>
            <MainLayout>
                <div className={container}>
                    {dataInfo.map((item, index) => {
                        return (
                            <InfoCard
                                key={index}
                                content={item.title}
                                desc={item.des}
                                src={item.src}
                            />
                        );
                    })}
                </div>
            </MainLayout>
        </>
    );
}

export default Info;
