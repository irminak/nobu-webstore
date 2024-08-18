import { useContext, useEffect, useState } from 'react';
import CartContext from '../store/CartContext';
import CartItem from '../components/CartItem';
import Button from '../components/UI/Button';

import { BsStars } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const CartPage = () => {
    const [shippingPrice, setShippingPrice] = useState(0);
    const { items, addItem, removeItem, deleteItem } = useContext(CartContext);

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
        <>
            <div className='pt-[70px] sm:pt-[90px] px-4 text-font'>
                <div>
                    <h2 className='py-4 sm:pl-4 font-roboto text-2xl sm:text-4xl lg:text-3xl font-medium'>
                        Shopping Cart
                    </h2>
                </div>
                {items.length === 0 ? (
                    <div className='pb-8 lg:pb-12'>
                        <div className='border-t-2 border-b-2 border-silver py-6 sm:py-10 lg:py-6 my-6 px-4 text-lg sm:text-2xl lg:text-lg text-center font-futura text-font '>
                            <p className='relative inline'>
                                Your cart is empty. Go back and get inspired.{' '}
                                <BsStars className='text-contrast absolute top-0 -right-5' />
                            </p>
                        </div>
                        <Link to='/products'>
                            <Button text='Continue shopping' />
                        </Link>
                    </div>
                ) : (
                    <div className='flex flex-col lg:flex-row py-4'>
                        <section className='mb-6 lg:basis-4/6'>
                            {items.map((item) => (
                                <CartItem
                                    key={item.id}
                                    name={item.name}
                                    img={item.img}
                                    stock={item.stock}
                                    time={item.time}
                                    quantity={item.quantity}
                                    price={item.price}
                                    onIncrease={() => addItem(item)}
                                    onDecrease={() => removeItem(item.id)}
                                    onRemove={() => deleteItem(item.id)}
                                />
                            ))}
                        </section>

                        <section className='py-6 sm:py-8 px-4 bg-silver rounded-lg font-roboto lg:grow lg:self-start'>
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
                                <div className='py-6 sm:py-8 flex justify-between text-lg font-medium sm:text-2xl lg:text-lg'>
                                    <p>Order total</p>
                                    <p>${totalWithShipping}</p>
                                </div>
                            </div>
                            <Link to='/checkout'>
                                <Button text='Checkout' />
                            </Link>
                        </section>
                    </div>
                )}
            </div>
        </>
    );
};

export default CartPage;
