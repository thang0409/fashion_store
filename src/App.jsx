import '@styles/main.scss';
import MainLayout from '@components/Layout/Layout';
import MyFooter from '@components/Footer/Footer';
import MyHeader from '@components/Header/Header';

function App() {
    return (
        <>
            <MainLayout>
                <MyHeader />
                <MyFooter />
            </MainLayout>
        </>
    );
}

export default App;
