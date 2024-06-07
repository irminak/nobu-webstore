import { useParams } from 'react-router-dom';
import { items } from '../data/products';

const ProductDetailPage = () => {
    const { productId } = useParams();
    const product = items.find((item) => item.id === parseInt(productId, 10));

    console.log(product);

    return (
        <div className='pt-[70px]'>
            <div className='py-6'>
                <nav aria-label='Breadcrumb'></nav>
                <h2>{product.name}</h2>
                <p>Price: {product.price}</p>
                <p>Description: {product.description}</p>
                {/* Display other product details as needed */}
            </div>
        </div>
    );
};

export default ProductDetailPage;
