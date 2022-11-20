import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading, selectError } from 'redux/selectors';
import Section from 'components/Section/Section';
import Form from 'components/ContactsList/Form/Form';
import ContactsList from 'components/ContactsList/ContacsList';

export default function Contacts() {
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
          <ContactsList />
        </Section>
      )}
    </>
  );
}
