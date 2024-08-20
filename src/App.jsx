/* eslint-disable no-unused-vars */
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CartContextProvider } from './store/CartContext.jsx';

import HomePage from './pages/Home.jsx';
import ProductsPage from './pages/Products.jsx';
import RootLayout from './pages/Root.jsx';
import ErrorPage from './pages/Error.jsx';
import ProductDetailPage from './pages/ProductDetail.jsx';
import InspirationsPage from './pages/Inspirations.jsx';
import CartPage from './pages/Cart.jsx';
import CategoryPage from './pages/Category.jsx';
import CheckoutPage from './pages/Checkout.jsx';
import BlogPage from './pages/Blog.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { path: '/', element: <HomePage /> },
            { path: '/products', element: <ProductsPage /> },
            { path: '/products/category/:category', element: <CategoryPage /> },
            {
                path: '/products/category/:category/product/:productId',
                element: <ProductDetailPage />,
            },
            { path: '/inspirations', element: <InspirationsPage /> },
            { path: '/inspirations/:postId', element: <BlogPage /> },
            { path: '/cart', element: <CartPage /> },
            { path: '/checkout', element: <CheckoutPage /> },
        ],
    },
]);

function App() {
    return (
        <>
            <CartContextProvider>
                <RouterProvider router={router} />
            </CartContextProvider>
        </>
    );
}

export default App;
