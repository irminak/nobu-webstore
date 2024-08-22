import { Outlet, ScrollRestoration } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import Footer from '../components/Footer';

const RootLayout = () => {
    return (
        <>
            <MainNavigation />
            <main className=' my-0 mx-auto'>
                <ScrollRestoration />
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default RootLayout;
