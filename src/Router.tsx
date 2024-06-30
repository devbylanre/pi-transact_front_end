import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import RootLayout from './layouts/root/Layout';
import { HelmetProvider } from 'react-helmet-async';
import AboutPage from './pages/AboutPage';
import SupportPage from './pages/SupportPage';
import PricingPage from './pages/PricingPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <IndexPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'support', element: <SupportPage /> },
      { path: 'pricing', element: <PricingPage /> },
    ],
  },
]);

const Router = () => {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
};

export default Router;
