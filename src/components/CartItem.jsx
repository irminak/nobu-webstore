import item from '../assets/item1.png';
import { IoCheckmark } from 'react-icons/io5';
import { FaTrashCan } from 'react-icons/fa6';

const CartItem = () => {
    return (
        <div className='border-t-2 border-silver py-6 flex items-start'>
            <div>
                <img
                    className='h-[120px] border-2 rounded-lg border-silver'
                    src={item}
                    alt=''
                />
            </div>
            <div className='font-roboto px-4 text-font flex flex-col gap-y-2'>
                <p className='text-lg font-medium'>Basic Tee</p>
                <p className='text-base'>$32.00</p>
                <div className='border-2 rounded-md w-[100px] h-[32px] border-silver'>
                    <button className='w-1/3 h-full hover:bg-silver'>-</button>
                    <button className='w-1/3 h-full'>1</button>
                    <button className='w-1/3 h-full hover:bg-silver'>+</button>
                </div>
                <div className='flex pt-4 items-center gap-2 text-sm'>
                    <IoCheckmark className='text-lg text-[#28AC77]' />
                    <p>In stock</p>
                </div>
            </div>
            <div className='ml-auto'>
                <FaTrashCan className='text-lg text-[#c2c2c2] hover:text-font' />
            </div>
        </div>
    );
};

export default CartItem;
