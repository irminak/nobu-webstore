/* eslint-disable react/prop-types */
import { IoCheckmarkCircleOutline } from 'react-icons/io5';

const Alert = ({ show, name }) => {
    return (
        <div
            className={`bg-secondary rounded-lg w-screen text-font font-futura border-2 border-primary text-base transition-transform duration-300 ${
                show ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
            <div className='py-4 sm:py-8 pl-4 pr-8 flex items-center justify-center'>
                <IoCheckmarkCircleOutline className='text-3xl sm:text-4xl text-primary' />
                <p className='pl-4 sm:text-2xl'>
                    Product <span className='font-medium'>{name} </span>has been
                    added to the cart
                </p>
            </div>
        </div>
    );
};

export default Alert;
