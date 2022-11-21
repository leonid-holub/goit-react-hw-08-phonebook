import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import Button from 'components/ContactsList/Form/Button/Button';
import {
  selectorIsLoggedIn,
  selectorUserEmail,
} from 'redux/auth/auth-selectors';
import css from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectorIsLoggedIn);
  const currentUserEmail = useSelector(selectorUserEmail);

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <>
      {isLoggedIn ? (
        <div className={css.menu}>
          <p className={css.paragraph}>Hello, {currentUserEmail}</p>
          <Button type="button" textContent="Log Out" onClick={handleClick} />
        </div>
      ) : (
        ''
      )}
    </>
  );
}
