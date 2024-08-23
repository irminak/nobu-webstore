/* eslint-disable react/prop-types */
import { IoCheckmarkCircleOutline } from 'react-icons/io5';

const Alert = ({ show, name }) => {
    return (
        <div
            className={`bg-silver shadow-md rounded-lg w-full text-font font-futura  text-base transition-transform duration-300 ${
                show ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
            <div className='py-4 lg:py-4 pl-4 pr-8 flex items-center justify-center'>
                <IoCheckmarkCircleOutline className='text-4xl lg:text-2xl text-primary' />
                <p className='pl-4 text-sm sm:text-base'>
                    Product <span className='font-medium'>{name} </span>has been
                    added to the cart
                </p>
            </div>
        </div>
    );
};

export default Alert;
