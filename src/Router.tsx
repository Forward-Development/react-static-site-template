import { useRoutes } from 'react-router-dom';

import Layout from './layouts';

const Router = () => {
  const Element = useRoutes([]);
  return <Layout>{Element}</Layout>;
};

export default Router;
