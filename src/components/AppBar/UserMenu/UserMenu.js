import { NavLink } from 'react-router-dom';

export default function UserMenu() {
  return (
    <div>
      <NavLink to="signin">User Menu Sign In</NavLink>
      <NavLink to="signup">User Menu Sign Up</NavLink>
    </div>
  );
}
