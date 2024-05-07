// import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
// import { getUser } from '../../redux/selectors';

export const NavMenu = () => {
  //   const { isLoggedIn } = useSelector(getUser);

  return (
    <>
      <header>
        <nav>
          <Link to="/"> Home</Link>

          <Link to="/adverts">Adverts</Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
};
