import { useContext } from 'react';
import CartContext from '../store/CartContext';
import CartItem from '../components/CartItem';
import Button from '../components/UI/Button';

const CartPage = () => {
    const { items, addItem, removeItem, deleteItem } = useContext(CartContext);

    const cartTotal = items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price,
        0
    );
    return (
        <>
            <div className='pt-[70px] px-4 text-font'>
                <div>
                    <h2 className='pt-4 font-roboto text-2xl font-medium'>
                        Shopping Cart
                    </h2>
                </div>
                <div className='flex flex-col py-4'>
                    <section className='mb-6'>
                        <CartItem />
                        <CartItem />
                    </section>
                    <section className='py-6 px-4 bg-silver rounded-lg font-roboto'>
                        <h3 className=' text-xl font-medium'>Order summary</h3>
                        <div className='py-4'>
                            <div className='py-4 flex justify-between border-b-2 border-secondary'>
                                <p>Subtotal</p>
                                <p>${cartTotal}</p>
                            </div>
                            <div className='py-4 flex justify-between border-b-2 border-secondary'>
                                <p>Shipping</p>
                                <p>$10</p>
                            </div>
                            <div className='py-6 flex justify-between text-lg font-medium'>
                                <p>Order total</p>
                                <p>${cartTotal + 10}</p>
                            </div>
                        </div>
                        <Button text='Checkout' />
                    </section>
                </div>
                {/* <ul>
                    {items.map((item) => (
                        <div key={item.id}>
                            <p>{item.name}</p>

                        </div>
                    ))}
                </ul>
                <div className='cart-note'>
                    {items.length === 0 ? (
                        <p>
                            Your cart is empty. Go back and add some diet
                            programs.
                        </p>
                    ) : (
                        <p>
                            The more copies of a given program you buy, the more
                            opportunities you will get. <br />
                            We do not duplicate recipes.
                        </p>
                    )}
                </div>
                <p className='cart-total'>
                    <p>Total</p>
                    <p>${cartTotal}</p>
                </p> */}
            </div>
        </>
    );
};

export default CartPage;
