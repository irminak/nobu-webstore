import MainNavigation from '../components/MainNavigation';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';

const ErrorPage = () => {
    return (
        <div>
            <MainNavigation />
            <main className='flex flex-col justify-end h-screen  font-font '>
                <div className='h-full pt-[70px] sm:pt-[90px] flex flex-col  items-center justify-center gap-2 sm:gap-4'>
                    <h1 className='text-8xl sm:text-[140px] text-primary'>
                        404
                    </h1>
                    <p className='text-font text-2xl sm:text-3xl'>
                        Page not found
                    </p>
                    <Link to='/'>
                        <Button text='Go back shopping' />
                    </Link>
                </div>
                <Footer />
            </main>
        </div>
    );
};

export default ErrorPage;
