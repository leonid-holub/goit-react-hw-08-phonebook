import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { deleteContact } from 'redux/operations';
import Button from 'components/ContactsList/Form/Button/Button';
import { ChangeForm } from './ChangeForm/ChangeForm';
import css from './Contact.module.css';

const Contact = ({ contactName, phoneNumber, id }) => {
  const [isChanging, setIsChanging] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  const handleChangeContact = () => {
    setIsChanging(true);
    Notify.info('Press "Escape" to close the edit form.', {
      position: 'center-top',
    });
  };

  const closeChangeForm = () => {
    setIsChanging(false);
  };

  return (
    <li className={css.contacts__item}>
      <p className={css.paragraph}>
        {contactName}: {phoneNumber}{' '}
      </p>
      {isChanging ? (
        <ChangeForm closeChangeForm={closeChangeForm} id={id}></ChangeForm>
      ) : (
        <div className={css.buttons}>
          <Button type="button" textContent="Delete" onClick={handleDelete} />
          <Button
            type="button"
            textContent="Edit"
            onClick={handleChangeContact}
          />
        </div>
      )}
    </li>
  );
};

export default Contact;
