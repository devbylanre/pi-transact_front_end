import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import RootLayout from './layouts/root/Layout';
import { HelmetProvider } from 'react-helmet-async';
import AboutPage from './pages/AboutPage';
import SupportPage from './pages/SupportPage';
import PricingPage from './pages/PricingPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import AuthLayout from './layouts/auth/Layout';
import AppLayout from './layouts/app/Layout';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <IndexPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'support', element: <SupportPage /> },
      { path: 'pricing', element: <PricingPage /> },
      { path: 'privacy-policy', element: <PrivacyPage /> },
      { path: 'terms-of-use', element: <TermsPage /> },
    ],
  },
  {
    path: 'auth',
    element: <AuthLayout />,
    children: [
      { path: 'new', element: <RegisterPage /> },
      { path: 'me', element: <LoginPage /> },
    ],
  },
  {
    path: 'app',
    element: <AppLayout />,
    children: [{ index: true, element: '' }],
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
