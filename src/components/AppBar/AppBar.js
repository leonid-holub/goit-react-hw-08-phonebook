import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AuthNav from './AuthNav/AuthNav';
import UserMenu from './UserMenu/UserMenu';
import css from './AppBar.module.css';
import { selectorIsLoggedIn } from 'redux/auth/auth-selectors';

export default function AppBar() {
  const isLoggedIn = useSelector(selectorIsLoggedIn);

  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink to="/">PNG</NavLink>
        <AuthNav />
        {isLoggedIn ? <UserMenu /> : ''}
      </nav>
    </header>
  );
}
