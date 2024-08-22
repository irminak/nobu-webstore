import { NavLink, useParams } from 'react-router-dom';
import { items } from '../data/products';
import Button from '../components/UI/Button';
import StarRating from '../components/StarRating';
import TopItems from '../components/TopItems';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../store/CartContext';
import Alert from '../components/UI/Alert';

const ProductDetailPage = () => {
    const [showAlert, setShowAlert] = useState(false);
    const { productId } = useParams();
    const cartCtx = useContext(CartContext);

    const handleAddPlanToCart = () => {
        cartCtx.addItem(product);
        setShowAlert(true);
    };

    const product = items.find((item) => item.id === parseInt(productId, 10));

    const capitalizeFirstLetter = (string) => {
        if (!string) return '';
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    };

    useEffect(() => {
        let timer;
        if (showAlert) {
            timer = setTimeout(() => {
                setShowAlert(false);
            }, 1000);
        }
        return () => clearTimeout(timer);
    }, [showAlert]);

    return (
        <div className='pt-[90px] reative'>
            <div className='max-w-[1536px] mx-auto px-4 '>
                <nav
                    aria-label='Breadcrumb'
                    className='py-4 sm:pb-8'
                >
                    <ol
                        role='list'
                        className=' flex max-w-2xl font-futura text-font text-base sm:text-2xl lg:text-lg'
                    >
                        <li className='flex'>
                            <NavLink to='/products'>Products</NavLink>
                            <svg
                                width={16}
                                height={20}
                                viewBox='0 0 16 20'
                                fill='currentColor'
                                aria-hidden='true'
                                className='h-5 sm:h-8 w-4 text-gray-300'
                            >
                                <path d='M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z' />
                            </svg>
                        </li>
                        <li className='flex items-center'>
                            <NavLink
                                to={`/products/category/${product.category}`}
                            >
                                {capitalizeFirstLetter(product.category)}
                            </NavLink>
                            <svg
                                width={16}
                                height={20}
                                viewBox='0 0 16 20'
                                fill='currentColor'
                                aria-hidden='true'
                                className='h-5 sm:h-8 w-4 text-gray-300'
                            >
                                <path d='M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z' />
                            </svg>
                        </li>

                        <li className=''>
                            <NavLink
                                to={`/products/category/${product.category}/product/${product.id}`}
                                aria-current='page'
                                className='text-[#ADADAD] hover:text-font '
                            >
                                {capitalizeFirstLetter(product.name)}
                            </NavLink>
                        </li>
                    </ol>
                </nav>

                <div className='flex flex-col lg:flex-row lg:justify-between '>
                    <div className='rounded-lg overflow-hidden lg:flex-grow max-w-[500px]'>
                        <img
                            className='w-full'
                            src={product.img}
                            alt=''
                        />
                    </div>
                    <div className='flex flex-col gap-4 font-futura text-font lg:flex-grow lg:pl-8'>
                        <div className='pt-8 lg:pt-0'>
                            <h2 className='text-2xl sm:text-4xl lg:text-3xl font-medium'>
                                {product.name}
                            </h2>
                        </div>
                        <div>
                            <p className='text-2xl sm:text-4xl lg:text-3xl '>
                                $ {product.price}
                            </p>
                        </div>
                        <div>
                            <StarRating
                                rating={product.rate}
                                totalCount={product.totalCount}
                            />
                        </div>
                        <div className=' flex flex-col gap-2 sm:text-2xl lg:text-lg '>
                            <p>
                                Size:{' '}
                                <span className='font-medium'>
                                    {product.size}
                                </span>
                            </p>
                            <p>
                                {' '}
                                {product.category === 'candles'
                                    ? 'Scent: '
                                    : product.category === 'cosmetics'
                                    ? 'Ingredients: '
                                    : 'Color: '}
                                <span className='font-medium'>
                                    {product.category === 'candles'
                                        ? product.scent
                                        : product.category === 'cosmetics'
                                        ? product.ingredients
                                        : product.color}
                                </span>
                            </p>
                            <p>
                                {product.category === 'cosmetics'
                                    ? 'Instruction: '
                                    : 'Material: '}
                                <span className='font-medium'>
                                    {product.category === 'cosmetics'
                                        ? product.instructions
                                        : product.material}
                                </span>
                            </p>
                        </div>

                        <div className='max-w-[500px] lg:flex lg:grow lg:items-start lg:mt-8'>
                            <Button
                                onClick={handleAddPlanToCart}
                                text='Add to cart'
                            />
                        </div>
                    </div>
                </div>

                <div className=' py-8 flex flex-col font-roboto text-font gap-4 lg:my-8'>
                    <p className='sm:pb-4 text-lg sm:text-2xl lg:text-lg'>
                        {product.description}
                    </p>
                    <div>
                        <h3 className='font-medium sm:text-2xl lg:text-lg'>
                            Highlights
                        </h3>
                        <ul className='sm:ml-2 list-disc pl-4 py-2 sm:text-2xl lg:text-lg'>
                            {product.highlights.map((highlight) => (
                                <li key={highlight}>{highlight}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className='pb-8 bg-secondary'>
                <TopItems />
            </div>
            <div className='fixed z-10 top-[70px] sm:top-[90px] right-0'>
                <Alert
                    show={showAlert}
                    name={product.name}
                />
            </div>
        </div>
    );
};

export default ProductDetailPage;
