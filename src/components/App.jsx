import { fetchContacts } from '../redux/operation.js';
import Home from 'pages/homePage.jsx';
import Adverts from 'pages/advertsPage.jsx';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { NavMenu } from './navLink/NavLink';

fetchContacts();
export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<NavMenu />}>
            <Route index element={<Home />} />
            <Route path="/adverts" element={<Adverts />} />
          </Route>
        </Routes>
        {/* <Toaster /> */}
      </Suspense>
    </>
  );
};
