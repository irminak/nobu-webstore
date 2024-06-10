import { IoCheckmark, IoTime } from 'react-icons/io5';
import { FaTrashCan } from 'react-icons/fa6';

const CartItem = ({
    name,
    img,
    quantity,
    price,
    stock,
    time,
    onIncrease,
    onDecrease,
    onRemove,
}) => {
    return (
        <div className='border-t-2 border-silver py-6 flex items-start'>
            <div>
                <img
                    className='h-[120px] border-2 rounded-lg border-silver'
                    src={img}
                    alt=''
                />
            </div>
            <div className='font-roboto px-4 text-font flex flex-col gap-y-2'>
                <p className='text-lg font-medium'>{name}</p>
                <p className='text-base'>${price}</p>
                <div className='border-2 rounded-md w-[100px] h-[32px] border-silver'>
                    <button
                        onClick={onDecrease}
                        className='w-1/3 h-full hover:bg-silver'
                    >
                        -
                    </button>
                    <button className='w-1/3 h-full'>{quantity}</button>
                    <button
                        onClick={onIncrease}
                        className='w-1/3 h-full hover:bg-silver'
                    >
                        +
                    </button>
                </div>
                <div className='flex pt-4 items-center gap-2 text-sm'>
                    {stock ? (
                        <>
                            <IoCheckmark className='text-lg text-[#28AC77]' />
                            <p>In stock</p>
                        </>
                    ) : (
                        <>
                            <IoTime className='text-xl text-silver' />
                            <p>Ships in {time}</p>
                        </>
                    )}
                </div>
            </div>
            <div
                className='ml-auto'
                onClick={onRemove}
            >
                <FaTrashCan className='text-lg text-[#c2c2c2] hover:text-font' />
            </div>
        </div>
    );
};

export default CartItem;
