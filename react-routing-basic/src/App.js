import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import ProductsPage from './pages/products';
import RootLayout from './pages/Root';
import ErroPage from './pages/Error';
import ProductDetailsPage from './pages/productDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> }, //home route.
      { path: '/products', element: <ProductsPage /> },
      { path: '/products/:productId', element: <ProductDetailsPage /> }
    ],
    errorElement: <ErroPage />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
