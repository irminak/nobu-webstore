import { NavLink, useParams } from 'react-router-dom';
import { items } from '../data/products';
import Button from '../components/UI/Button';
import StarRating from '../components/StarRating';
import TopItems from '../components/TopItems';
import { useContext } from 'react';
import CartContext from '../store/CartContext';

const ProductDetailPage = () => {
    const { productId } = useParams();
    const cartCtx = useContext(CartContext);

    const handleAddPlanToCart = () => {
        cartCtx.addItem(product);
    };

    const product = items.find((item) => item.id === parseInt(productId, 10));

    const capitalizeFirstLetter = (string) => {
        if (!string) return '';
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    };

    console.log(product);

    return (
        <div className='pt-[70px]'>
            <div className='px-4'>
                <nav
                    aria-label='Breadcrumb'
                    className='py-4'
                >
                    <ol
                        role='list'
                        className='mx-auto flex max-w-2xl font-futura text-font text-base'
                    >
                        <li className='flex'>
                            <NavLink to='/products'>Products</NavLink>
                            <svg
                                width={16}
                                height={20}
                                viewBox='0 0 16 20'
                                fill='currentColor'
                                aria-hidden='true'
                                className='h-5 w-4 text-gray-300'
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
                                className='h-5 w-4 text-gray-300'
                            >
                                <path d='M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z' />
                            </svg>
                        </li>

                        <li className=''>
                            <NavLink
                                to={`/products/category/${product.category}/product/${product.id}`}
                                aria-current='page'
                                className='text-[#ADADAD] hover:text-font'
                            >
                                {capitalizeFirstLetter(product.name)}
                            </NavLink>
                        </li>
                    </ol>
                </nav>

                <div className='flex flex-col'>
                    <div className='rounded-lg overflow-hidden'>
                        <img
                            className='w-full '
                            src={product.img}
                            alt=''
                        />
                    </div>
                    <div className='flex flex-col gap-4 font-futura text-font'>
                        <div className='pt-8'>
                            <h2 className='text-2xl font-medium'>
                                {product.name}
                            </h2>
                        </div>
                        <div>
                            <p className='text-2xl'>$ {product.price}</p>
                        </div>
                        <div>
                            <StarRating
                                rating={product.rate}
                                totalCount={product.totalCount}
                            />
                        </div>
                        <div className=' flex flex-col gap-2'>
                            <p>
                                Size:{' '}
                                <span className='font-medium'>
                                    {product.size}
                                </span>
                            </p>
                            <p>
                                Color:{' '}
                                <span className='font-medium'>
                                    {product.color}
                                </span>
                            </p>
                            <p>
                                Material:{' '}
                                <span className='font-medium'>
                                    {product.material}
                                </span>
                            </p>
                        </div>

                        <div>
                            <Button onClick={handleAddPlanToCart} />
                        </div>
                    </div>
                </div>

                <div className=' py-8 flex flex-col font-roboto text-font gap-4'>
                    <p className='text-lg'>{product.description}</p>
                    <div>
                        <h3 className='font-medium'>Highlights</h3>
                        <ul className='list-disc pl-4 py-2'>
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
        </div>
    );
};

export default ProductDetailPage;
