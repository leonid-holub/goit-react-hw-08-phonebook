import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Section from 'components/Section/Section';
import Label from 'components/ContactsList/Form/Label/Label';
import css from '../../components/ContactsList/Form/Form.module.css';
import Button from 'components/ContactsList/Form/Button/Button';
import { register } from 'redux/auth/auth-operations';
import styles from './SignUp.module.css';

export default function SignUp() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'userName':
        setUserName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name: userName, email, password }));
    setUserName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Section title="Sign Up">
      <form onSubmit={handleSubmit} autoComplete="off" className={styles.form}>
        <Label labelName={'User Name'}>
          <input
            type="text"
            name="userName"
            className={css.input}
            value={userName}
            onChange={handleChange}
          ></input>
        </Label>
        <Label className={css.input} labelName={'Email'}>
          <input
            type="email"
            name="email"
            className={css.input}
            value={email}
            onChange={handleChange}
          ></input>
        </Label>
        <Label className={css.input} labelName={'Password'}>
          <input
            type="password"
            name="password"
            className={css.input}
            value={password}
            onChange={handleChange}
          ></input>
        </Label>
        <Button type="submit" textContent="Sign Up" />
      </form>
      <Link to="/signin" className={styles.link}>
        <p>Click here to Sign In</p>
      </Link>
    </Section>
  );
}
