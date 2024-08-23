/* eslint-disable react/prop-types */
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
        <div className='border-t-2 border-silver py-6 flex items-start lg:mr-12'>
            <div>
                <img
                    className='h-[120px] w-[120px] sm:h-[240px] sm:w-[240px] border-2 rounded-lg border-silver'
                    src={img}
                    alt=''
                />
            </div>
            <div className='font-roboto px-4 text-font flex flex-col gap-y-2 sm:gap-y-4'>
                <p className='text-lg sm:text-3xl lg:text-xl font-medium'>
                    {name}
                </p>
                <p className='text-base sm:text-2xl lg:text-lg'>${price}</p>
                <div className='border-2 sm:border-2 rounded-md w-[100px] sm:w-[160px] h-[32px] sm:h-[48px] border-silver'>
                    <button
                        onClick={onDecrease}
                        className='w-1/3 h-full hover:bg-silver sm:text-xl lg:text-lg'
                    >
                        -
                    </button>
                    <button className='w-1/3 h-full sm:text-xl lg:text-lg'>
                        {quantity}
                    </button>
                    <button
                        onClick={onIncrease}
                        className='w-1/3 h-full hover:bg-silver sm:text-xl lg:text-base'
                    >
                        +
                    </button>
                </div>
                <div className='flex pt-4 items-center gap-2 text-sm sm:text-xl lg:text-lg'>
                    {stock ? (
                        <>
                            <IoCheckmark className='text-lg sm:text-2xl lg:text-xl text-[#28AC77]' />
                            <p>In stock</p>
                        </>
                    ) : (
                        <>
                            <IoTime className='text-xl sm:text-2xl  lg:text-xl text-silver' />
                            <p>Ships in {time}</p>
                        </>
                    )}
                </div>
            </div>
            <div
                className='ml-auto  lg:hover:cursor-pointer'
                onClick={onRemove}
            >
                <FaTrashCan className='text-lg sm:text-3xl lg:text-lg text-[#c2c2c2] hover:text-font ' />
            </div>
        </div>
    );
};

export default CartItem;
