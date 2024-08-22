/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const Badge = ({ category }) => {
    return (
        <>
            <Link to={`/products/category/${category}`}>
                <div className='group px-6 sm:px-8 lg:px-6 py-2 sm:py-4 lg:py-2 rounded-md bg-secondary text-font lg:hover:bg-[#ebf0ef]'>
                    <p className='font-roboto text-sm sm:text-2xl lg:text-base lg:group-hover:text-[#777] duration-300'>
                        {category}
                    </p>
                </div>
            </Link>
        </>
    );
};

export default Badge;
