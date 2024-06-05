import { useContext } from 'react';
import CartContext from '../store/CartContext';

const CartPage = () => {
    const { items, addItem, removeItem, deleteItem } = useContext(CartContext);

    const cartTotal = items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price,
        0
    );
    return (
        <>
            <div className='pt-[70px]'>
                <h2>Shopping Cart</h2>
                <ul>
                    {/* {cartCtx.items.map((item) => (
                        <CartItem
                            key={item.id}
                            name={item.name}
                            quantity={item.quantity}
                            price={item.price}
                            onIncrease={() => cartCtx.addItem(item)}
                            onDecrease={() => cartCtx.removeItem(item.id)}
                            onRemove={() => cartCtx.deleteItem(item.id)}
                        />
                    ))} */}
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
                </p>
            </div>
        </>
    );
};

export default CartPage;
