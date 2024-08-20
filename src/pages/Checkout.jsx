import { Link, NavLink } from 'react-router-dom';
import CartContext from '../store/CartContext';
import { useContext, useEffect, useState } from 'react';
import Form from '../components/Form';
import Button from '../components/UI/Button';

const CheckoutPage = () => {
    const [shippingPrice, setShippingPrice] = useState(0);
    const [thanksMessage, setThanksMessage] = useState(false);
    const { items } = useContext(CartContext);

    const cartTotal = items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price,
        0
    );

    useEffect(() => {
        if (cartTotal < 50) {
            setShippingPrice(10);
        } else if (cartTotal > 50 && cartTotal < 200) {
            setShippingPrice(15);
        } else {
            setShippingPrice(30);
        }
    }, [cartTotal]);

    const totalWithShipping = (cartTotal + shippingPrice).toFixed(2);
    return (
        <div className='pt-[70px] sm:pt-[90px] reative flex flex-col'>
            {thanksMessage ? (
                <div className='my-4 px-4'>
                    <div className='mx-auto px-4 max-w-[1000px]'>
                        <section className='mb-4 py-6 sm:py-12 px-4 bg-silver rounded-lg font-futura text-font'>
                            <h3 className=' text-xl sm:text-2xl lg:text-xl text-center'>
                                Thank you for your order. <br />
                                We are working on it.
                            </h3>
                            <div className='mt-6 lg:mt-10'>
                                <Link to='/'>
                                    <Button
                                        text='Go back shopping'
                                        onClick={() => setThanksMessage(false)}
                                    />
                                </Link>
                            </div>
                        </section>
                    </div>
                </div>
            ) : (
                <>
                    <div>
                        <div className='px-4'>
                            <nav
                                aria-label='Breadcrumb'
                                className='py-4 sm:pb-8'
                            >
                                <ol
                                    role='list'
                                    className=' flex max-w-2xl font-futura text-font text-base lg:text-lg'
                                >
                                    <li className='flex'>
                                        <NavLink to='/'>Home</NavLink>
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
                                        <NavLink to={`/cart`}>Cart</NavLink>
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
                                            to={`/checkout`}
                                            aria-current='page'
                                            className='text-[#ADADAD] hover:text-font'
                                        >
                                            Order details
                                        </NavLink>
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <div className='lg:flex lg:flex-row-reverse'>
                        <div className='px-4 lg:grow'>
                            <section className='mb-4 py-6 sm:py-8 px-4 bg-silver rounded-lg font-roboto'>
                                <h3 className=' text-xl sm:text-3xl lg:text-xl font-medium'>
                                    Order summary
                                </h3>
                                <div className='py-4'>
                                    <div className='py-4 sm:py-6 flex justify-between border-b-2 border-secondary sm:text-2xl lg:text-lg'>
                                        <p>Subtotal</p>
                                        <p>${cartTotal.toFixed(2)}</p>
                                    </div>
                                    <div className='py-4 sm:py-6 flex justify-between border-b-2 border-secondary sm:text-2xl lg:text-lg'>
                                        <p>Shipping</p>
                                        <p>${shippingPrice}.00</p>
                                    </div>
                                    <div className='pt-6 sm:pt-8 flex justify-between text-lg font-medium sm:text-2xl lg:text-lg'>
                                        <p>Order total</p>
                                        <p>${totalWithShipping}</p>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className='px-4 py-4 lg:basis-1/2'>
                            <Form
                                thanksMessage={thanksMessage}
                                setThanksMessage={setThanksMessage}
                            />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default CheckoutPage;
