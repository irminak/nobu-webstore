/* eslint-disable no-unused-vars */
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home.jsx';
import ProductsPage from './pages/Products.jsx';
import RootLayout from './pages/Root.jsx';
import ErrorPage from './pages/Error.jsx';
import ProductDetailPage from './pages/ProductDetail.jsx';

import { createTheme, colors, ThemeProvider } from '@mui/material';
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

const theme = createTheme({
    palette: {
        secondary: {
            main: colors.teal[800],
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
