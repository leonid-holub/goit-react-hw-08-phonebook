import Section from 'components/Section/Section';
import Button from 'components/ContactsList/Form/Button/Button';
import css from './Home.module.css';

export default function Home() {
  return (
    <Section title="Welcome!">
      <p style={{ textAlign: 'center', marginBottom: '25px' }}>
        This is a contact storage application.
      </p>
      <ul
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <li className={css.item}>
          <p className={css.paragraph}>Rosie Simpson: 459-12-56</p>
          <Button type="button" textContent="Delete" />
        </li>
        <li className={css.item}>
          <p className={css.paragraph}>Hermione Kline: 443-89-12</p>
          <Button type="button" textContent="Delete" />
        </li>
        <li className={css.item}>
          <p className={css.paragraph}>Eden Clements: 645-17-79</p>{' '}
          <Button type="button" textContent="Delete" />
        </li>
        <li className={css.item}>
          <p className={css.paragraph}>Annie Copeland: 227-91-26</p>
          <Button type="button" textContent="Delete" />
        </li>
      </ul>
    </Section>
  );
}
