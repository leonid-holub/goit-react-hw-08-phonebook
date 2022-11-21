import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Section from 'components/Section/Section';
import Label from 'components/ContactsList/Form/Label/Label';
import { Link } from 'react-router-dom';
import { logIn } from 'redux/auth/auth-operations';
import Button from 'components/ContactsList/Form/Button/Button';
import css from '../../components/ContactsList/Form/Form.module.css';
import styles from './SignIn.module.css';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Section title="Sign In">
      <form autoComplete="off" onSubmit={handleSubmit} className={styles.form}>
        <Label labelName={'Email'}>
          <input
            type="email"
            name="email"
            value={email}
            className={css.input}
            onChange={handleChange}
          ></input>
        </Label>
        <Label className={css.input} labelName={'Password'}>
          <input
            type="password"
            name="password"
            value={password}
            className={css.input}
            onChange={handleChange}
          ></input>
        </Label>
        <Button type="submit" textContent="Sign In" />
      </form>
      <Link to="/signup" className={styles.link}>
        <p>Click here to Sign Up</p>
      </Link>
    </Section>
  );
}
