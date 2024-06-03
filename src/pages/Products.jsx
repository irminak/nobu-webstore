import { Link } from 'react-router-dom';

const ProductsPage = () => {
    return (
        <>
            <h1>Products Page</h1>
            <ul>
                <li>
                    <Link to='/products/'>Product 1</Link>
                </li>
                <li>
                    <Link>Product 2</Link>
                </li>
                <li>
                    <Link>Product 3</Link>
                </li>
            </ul>
        </>
    );
};

export default ProductsPage;
