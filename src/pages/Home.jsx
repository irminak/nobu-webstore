import { NavLink } from 'react-router-dom';
import InspirationCard from '../components/InspirationCard';
import TopItems from '../components/TopItems';

const HomePage = () => {
    return (
        <div className='pt-[70px]'>
            <section className='p-4 flex flex-col flex-wrap gap-4 '>
                <NavLink
                    to='/inspirations'
                    className='w-full cursor-pointer'
                >
                    <div className='h-[400px] bg-plants bg-no-repeat bg-center bg-cover rounded-xl'>
                        <div className='p-4 h-[400px] w-full flex items-end rounded-xl bg-[#2e2e2e30] '>
                            <h2 className='text-4xl font-medium text-silver font-futura uppercase'>
                                Get Inspired
                            </h2>
                        </div>
                    </div>
                </NavLink>
                <NavLink
                    to='/products'
                    className='p-4 flex flex-grow flex-wrap items-end bg-contrast rounded-xl'
                >
                    <h2 className='text-4xl font-medium text-silver font-futura uppercase cursor-pointer'>
                        Go Shopping
                    </h2>
                    <p className='py-2 border-t-2 text-silver'>
                        Create your space
                    </p>
                </NavLink>
            </section>
            <TopItems />
            <section className='px-4 py-8 flex flex-wrap gap-6'>
                <InspirationCard
                    shape='aspect-square'
                    text='Smell the luxury'
                    bg='candles'
                    position='items-start'
                    category='candles'
                />
                <InspirationCard
                    shape='h-[200px]'
                    text='Shine'
                    bg='lamps'
                    position='items-end'
                    category='lamps'
                />
                <InspirationCard
                    shape='aspect-square'
                    text='Make yourself home'
                    bg='furniture'
                    position='items-end'
                    category='furniture'
                />
                <InspirationCard
                    shape='h-[200px]'
                    text='Other categories'
                    color='primary'
                    position='items-center'
                    category=''
                />
                <InspirationCard
                    shape='h-[400px]'
                    text='Skincare'
                    bg='cosmetics'
                    position='items-end'
                    category='cosmetics'
                />
            </section>
        </div>
    );
};

export default HomePage;
