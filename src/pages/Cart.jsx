import { useContext } from 'react';
import CartContext from '../store/CartContext';
import CartItem from '../components/CartItem';
import Button from '../components/UI/Button';

import { BsStars } from 'react-icons/bs';

const CartPage = () => {
    const { items, addItem, removeItem, deleteItem } = useContext(CartContext);

    const cartTotal = items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price,
        0
    );

    const totalWithShipping = (cartTotal + 10).toFixed(2);
    return (
        <>
            <div className='pt-[70px] px-4 text-font'>
                <div>
                    <h2 className='py-4 font-roboto text-2xl font-medium'>
                        Shopping Cart
                    </h2>
                </div>
                {items.length === 0 ? (
                    <div className='pb-8'>
                        <div className='border-t-2 border-b-2 border-silver py-6 my-6 px-4 text-lg text-center font-futura text-font relative'>
                            <p>Your cart is empty. Go back and get inspired.</p>
                            <div className='absolute top-5 right-1'>
                                <BsStars className='text-contrast' />
                            </div>
                        </div>
                        <Button text='Continue shopping' />
                    </div>
                ) : (
                    <div className='flex flex-col py-4'>
                        <section className='mb-6'>
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

                        <section className='py-6 px-4 bg-silver rounded-lg font-roboto'>
                            <h3 className=' text-xl font-medium'>
                                Order summary
                            </h3>
                            <div className='py-4'>
                                <div className='py-4 flex justify-between border-b-2 border-secondary'>
                                    <p>Subtotal</p>
                                    <p>${cartTotal.toFixed(2)}</p>
                                </div>
                                <div className='py-4 flex justify-between border-b-2 border-secondary'>
                                    <p>Shipping</p>
                                    <p>$10</p>
                                </div>
                                <div className='py-6 flex justify-between text-lg font-medium'>
                                    <p>Order total</p>
                                    <p>${totalWithShipping}</p>
                                </div>
                            </div>
                            <Button text='Checkout' />
                        </section>
                    </div>
                )}
            </div>
        </>
    );
};

export default CartPage;
