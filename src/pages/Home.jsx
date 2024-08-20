import { NavLink } from 'react-router-dom';
import InspirationCard from '../components/InspirationCard';
import TopItems from '../components/TopItems';
import { FaArrowRight } from 'react-icons/fa';

const HomePage = () => {
    return (
        <div className='pt-[70px] sm:pt-[90px] '>
            <section className='p-4 lg:py-0 flex flex-col lg:flex-row flex-wrap gap-4 '>
                <NavLink
                    to='/inspirations'
                    className='group w-full lg:w-2/3 cursor-pointer'
                >
                    <div className='h-[400px] sm:h-[500px] bg-plants bg-no-repeat bg-center bg-cover rounded-xl'>
                        <div className='p-4 h-[400px] sm:h-[500px] w-full flex items-end rounded-xl bg-[#2e2e2e30] group-hover:bg-[#2e2e2e00] duration-300'>
                            <h2 className='text-4xl sm:text-6xl lg:text-5xl font-medium text-silver font-futura uppercase lg:group-hover:translate-x-10 duration-300 ease-in'>
                                Get Inspired
                            </h2>
                        </div>
                    </div>
                </NavLink>
                <NavLink
                    to='/products'
                    className='group p-4 sm:pt-6 flex sm:flex-col flex-grow flex-wrap items-end lg:items-start lg:justify-center sm:items-start bg-contrast  rounded-xl relative overflow-hidden'
                >
                    <FaArrowRight className='hidden lg:block absolute text-5xl text-silver top-1/2 -translate-y-1/2 -translate-x-16 lg:-translate-x-20 group-hover:-translate-x-4 xl:group-hover:translate-x-2 duration-300 ease-in' />
                    <h2 className='sm:mb-4 lg:pb-4 lg:mb-0 text-4xl sm:text-6xl lg:text-4xl font-medium text-silver font-futura uppercase cursor-pointer lg:border-b-2 lg:group-hover:translate-x-12 xl:group-hover:translate-x-20 duration-300 ease-in'>
                        Go Shopping
                    </h2>
                    <p className='py-2 sm:py-4 border-t-2 lg:border-none text-silver sm:text-3xl lg:text-xl sm:font-light lg:group-hover:translate-x-12 xl:group-hover:translate-x-20 duration-300 ease-in'>
                        Create your space
                    </p>
                </NavLink>
            </section>
            <div className='my-4 lg:my-12'>
                <TopItems />
            </div>
            <section className='px-4 py-8 flex flex-wrap gap-6'>
                <InspirationCard
                    width='lg:w-auto'
                    shape='aspect-square lg:h-[400px]'
                    text='Smell the luxury'
                    bg='candles'
                    position='items-start'
                    category='candles'
                />
                <InspirationCard
                    width='lg:w-auto lg:flex-grow'
                    shape='h-[300px] sm:h-[400px] '
                    text='Shine'
                    bg='lamps'
                    position='items-end'
                    category='lamps'
                />
                <InspirationCard
                    width='lg:w-auto lg:flex-grow'
                    shape='aspect-square lg:h-[400px] lg:aspect-auto'
                    text='Make yourself home'
                    bg='furniture'
                    position='items-end'
                    category='furniture'
                />
                <InspirationCard
                    width='lg:w-auto'
                    shape='h-[200px] sm:h-[300px] lg:aspect-square lg:h-[400px]'
                    text='Other categories'
                    color='primary'
                    position='items-center'
                    category=''
                />
                <InspirationCard
                    width='lg:w-auto lg:flex-grow'
                    shape='h-[400px] sm:h-[500px] lg:h-[400px]'
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
