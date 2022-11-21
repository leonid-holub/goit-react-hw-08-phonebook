import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectorIsLoggedIn } from 'redux/auth/auth-selectors';

export default function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(selectorIsLoggedIn);
  return isLoggedIn ? children : <Navigate to="/" />;
}
