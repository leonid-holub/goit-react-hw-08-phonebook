import { useDispatch, useSelector } from 'react-redux';
import { update } from 'redux/filterSlice';
import Contact from './Contact/Contact';
import Label from 'components/ContactsList/Form/Label/Label';
import styles from './Form/Label/Label.module.css';
import { visibleContacts } from 'redux/selectors';
import css from './ContactsList.module.css';

const ContactsList = () => {
  const dispatch = useDispatch();

  const contactsArray = useSelector(visibleContacts);

  const handleChange = e => {
    const { value } = e.target;
    dispatch(update(value));
  };

  return (
    <>
      <Label labelName="Find contacts by name">
        <input
          className={styles.label}
          type="text"
          onChange={handleChange}
        ></input>
      </Label>
      <ul className={css.list}>
        {contactsArray.map(contact => (
          <Contact
            key={contact.id}
            contactName={contact.name}
            phoneNumber={contact.number}
            id={contact.id}
          />
        ))}
      </ul>
    </>
  );
};

export default ContactsList;
