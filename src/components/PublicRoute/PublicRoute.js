import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectorIsLoggedIn } from 'redux/auth/auth-selectors';

export default function PublicRoute({ children }) {
  const isLoggedIn = useSelector(selectorIsLoggedIn);
  return isLoggedIn ? <Navigate to="/" /> : children;
}
