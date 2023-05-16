import { useRoutes } from 'react-router-dom';

import Layout from './layouts';
import Home from './pages';

const Router = () => {
  const Element = useRoutes([
    {
      path: '/',
      index: true,
      element: <Home />,
    },
  ]);
  return <Layout>{Element}</Layout>;
};

export default Router;
