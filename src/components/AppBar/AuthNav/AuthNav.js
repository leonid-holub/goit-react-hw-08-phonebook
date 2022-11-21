import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <div className={css.authorization}>
      <NavLink to="signin" className={css.navlink}>
        Sign In
      </NavLink>
      <NavLink to="signup" className={css.navlink}>
        Sign Up
      </NavLink>
    </div>
  );
}
