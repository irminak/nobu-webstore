import Slider from 'react-slick';
import ProductCard from './ProductCard';

const Choices = () => {
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
        ],
    };
    return (
        <section className='bg-secondary w-screen my-4 py-8 overflow-hidden'>
            <h2 className='px-4 pb-4 text-font font-futura text-2xl uppercase font-normal'>
                Our Top Choices
            </h2>
            <Slider {...settings}>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </Slider>
        </section>
    );
};

export default Choices;
