import { NavLink } from 'react-router-dom';
import Choices from '../components/Choices';

const HomePage = () => {
    return (
        <div className='pt-[70px]  h-lvh'>
            <section className='flex p-4 flex-wrap gap-4 flex-col h-full'>
                <NavLink
                    to='/inspirations'
                    className='w-full cursor-pointer'
                >
                    <div className=' bg-plants bg-no-repeat bg-center h-[400px] rounded-xl flex items-end p-4'>
                        <h2 className=' text-silver font-futura uppercase text-4xl font-medium '>
                            Get Inspired
                        </h2>
                    </div>
                </NavLink>
                <NavLink
                    to='/products'
                    className='flex-grow bg-contrast rounded-xl flex flex-wrap items-end p-4'
                >
                    <h2 className=' text-silver font-futura uppercase text-4xl font-medium cursor-pointer'>
                        Go Shopping
                    </h2>
                    <p className='border-t-2 text-silver py-2'>
                        Create your space
                    </p>
                </NavLink>
            </section>
            <Choices />
        </div>
    );
};

export default HomePage;
