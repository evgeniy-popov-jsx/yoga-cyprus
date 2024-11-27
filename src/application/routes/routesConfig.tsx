import { useRoutes } from 'react-router-dom';
import { ROUTES } from './routes';
import { Main } from 'presentation/pages/Main';

export const RouterConfig = () => {
  const config = useRoutes([
    {
      path: ROUTES.main,
      element: <Main />,
    },
  ]);

  return config;
};
