import { NavLink, Link } from 'react-router-dom';
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
        <Link to="/" className={css.link}>
          M|C
        </Link>
        {isLoggedIn ? (
          <NavLink to="contacts" className={css.navlink}>
            Contacts
          </NavLink>
        ) : (
          <AuthNav />
        )}
        {isLoggedIn ? <UserMenu /> : ''}
      </nav>
    </header>
  );
}
