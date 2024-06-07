/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const ProductCard = ({ name, price, img, id, category }) => {
    return (
        <Link
            // key={product.id}
            // href={product.href}
            className='group'
            to={`/products/category/${category}/product/${id}`}
        >
            <div className='overflow-hidden rounded-lg bg-gray-200 mx-2 border-2 border-silver'>
                <img
                    src={img}
                    // src={product.imageSrc}
                    // alt={product.imageAlt}
                    className='object-cover object-center group-hover:opacity-75 z-0'
                />
            </div>
            <h3 className='mt-4 mx-2 text-sm text-font font-roboto'>{name}</h3>
            <p className='mx-2 text-lg font-medium text-font font-roboto'>
                $ {price}
            </p>
        </Link>
    );
};

export default ProductCard;
