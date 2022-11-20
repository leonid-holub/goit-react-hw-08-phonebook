import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading, selectError } from 'redux/selectors';
import Section from './Section/Section';
import Form from './Form/Form';
import Contacts from './Contacts/Contacs';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>
      {isLoading && !error && (
        <b style={{ display: 'block', color: 'white', padding: '25px 50px' }}>
          Request in progress...
        </b>
      )}
      {!isLoading && !error && (
        <Section title="Contacts">
          <Contacts />
        </Section>
      )}
    </>
  );
}
