import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

import Button from 'components/Form/Button/Button';
import css from './Contact.module.css';

const Contact = ({ contactName, phoneNumber, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <li className={css.contacts__item}>
      {contactName}: {phoneNumber}{' '}
      <Button type="button" textContent="Delete" onClick={handleDelete} />
    </li>
  );
};

export default Contact;
