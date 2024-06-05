import { Link } from 'react-router-dom';

const Badge = ({ category }) => {
    return (
        <>
            <Link to={`/products/${category}`}>
                <div className='px-6 py-2 rounded-md bg-secondary text-font'>
                    <p className='font-roboto text-sm'>{category}</p>
                </div>
            </Link>
        </>
    );
};

export default Badge;
