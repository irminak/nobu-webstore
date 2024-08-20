import { useEffect, useState } from 'react';
import { items } from '../data/products';

import Slider from 'react-slick';
import ProductCard from './ProductCard';

const TopItems = () => {
    const [topItems, setTopItems] = useState([]);

    useEffect(() => {
        selectTopItems();
    }, []);

    const selectTopItems = () => {
        const n = 8;
        const sortedItems = [...items].sort((a, b) => b.rate - a.rate);
        const thresholdRate = sortedItems[n - 1]?.rate || 0;
        const filteredItems = items.filter(
            (item) => item.rate >= thresholdRate
        );
        let selectedItems = [];
        if (filteredItems.length > n) {
            selectedItems = getRandomItems(filteredItems, n);
        } else {
            selectedItems = filteredItems;
        }
        setTopItems(selectedItems);

        const getRandomItems = (array, n) => {
            const shuffled = array.sort(() => 0.5 - Math.random());
            return shuffled.slice(0, n);
        };
    };

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            // {
            //     breakpoint: 1300,
            //     settings: {
            //         slidesToShow: 2,
            //         slidesToScroll: 1,
            //         infinite: false,
            //         dots: true,
            //     },
            // },
            // {
            //     breakpoint: 1024,
            //     settings: {
            //         slidesToShow: 2,
            //         slidesToScroll: 1,
            //         infinite: false,
            //         dots: true,
            //     },
            // },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
        ],
    };
    return (
        <section className='bg-secondary w-full  px-2 py-8 sm:py-12 overflow-hidden'>
            <h2 className='px-4 pb-4 sm:pb-8 text-font font-futura text-2xl sm:text-[42px] lg:text-3xl uppercase font-normal '>
                Our Top Choices
            </h2>
            <div className='lg:hidden'>
                <Slider {...settings}>
                    {topItems.map((topItem) => (
                        <ProductCard
                            key={topItem.id}
                            id={topItem.id}
                            img={topItem.img}
                            name={topItem.name}
                            price={topItem.price}
                            category={topItem.category}
                        />
                    ))}
                </Slider>
            </div>
            <div className='hidden lg:grid grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 gap-y-8 '>
                {topItems.map((topItem) => (
                    <ProductCard
                        key={topItem.id}
                        id={topItem.id}
                        img={topItem.img}
                        name={topItem.name}
                        price={topItem.price}
                        category={topItem.category}
                    />
                ))}
            </div>
        </section>
    );
};

export default TopItems;
