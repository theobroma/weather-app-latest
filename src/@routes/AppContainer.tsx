// https://stackoverflow.com/questions/69928061/struggling-with-typescript-react-eslint-and-simple-arrow-functions-components
// https://github.com/michey85/youtube-react-router-v6/blob/router-v6.4/src/App.jsx
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import MainView from '../@views/MainView';

import { AppLayout } from './AppLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<MainView />} />
      {/* <Route path="cryptocurrencies" element={<MainView />} /> */}
      {/* <Route path="exchanges" element={<div>exchanges</div>} /> */}
      <Route path="*" element={<div>Not Found</div>} />
    </Route>,
  ),
);

export const AppContainer = () => {
  return <RouterProvider router={router} />;
};
