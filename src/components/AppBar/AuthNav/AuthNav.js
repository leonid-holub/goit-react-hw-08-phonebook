import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'components/ContactsList/Form/Button/Button';
import { logOut } from 'redux/auth/auth-operations';
import { selectorIsLoggedIn } from 'redux/auth/auth-selectors';

export default function AuthNav() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectorIsLoggedIn);

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <div>
      {isLoggedIn ? (
        <Button type="button" textContent="Log Out" onClick={handleClick} />
      ) : (
        <>
          <NavLink to="signin">Sign In</NavLink>
          <NavLink to="signup">Sign Up</NavLink>{' '}
        </>
      )}
    </div>
  );
}
