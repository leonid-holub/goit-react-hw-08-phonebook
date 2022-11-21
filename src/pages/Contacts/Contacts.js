import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading, selectError } from 'redux/selectors';
import Form from 'components/ContactsList/Form/Form';
import ContactsList from 'components/ContactsList/ContacsList';
import css from './Contacts.module.css';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div className={css.section}>
        <h2 className={css.title}>Phonebook</h2>
        <Form />
      </div>
      {isLoading && !error && (
        <b style={{ display: 'block', color: 'white', padding: '25px 50px' }}>
          Request in progress...
        </b>
      )}
      {!isLoading && !error && (
        <div className={css.section}>
          <h2 className={css.title}>Contacts</h2>
          <ContactsList />
        </div>
      )}
    </>
  );
}
