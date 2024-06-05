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

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { path: '/', element: <HomePage /> },
            { path: '/products', element: <ProductsPage /> },
            { path: '/products/:productId', element: <ProductDetailPage /> },
            { path: '/inspirations', element: <InspirationsPage /> },
            { path: '/cart', element: <CartPage /> },
        ],
    },
]);

function App() {
    return (
        <CartContextProvider>
            <RouterProvider router={router} />
        </CartContextProvider>
    );
}

export default App;
