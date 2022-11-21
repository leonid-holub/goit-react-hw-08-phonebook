import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { changeContact } from 'redux/operations';
import Button from 'components/ContactsList/Form/Button/Button';
import css from './ChangeForm.module.css';

export const ChangeForm = ({ closeChangeForm, id }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        closeChangeForm();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeChangeForm]);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(changeContact({ name, number, id }));
    setName('');
    setNumber('');
    closeChangeForm();
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
    }
  };

  return (
    <form onSubmit={handleSubmit} className={css.changeForm}>
      <label>
        Name{'   '}
        <input
          placeholder="Enter new name"
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          value={name}
          onChange={handleChange}
        ></input>
      </label>
      <label>
        Number{'   '}
        <input
          placeholder="Enter new number"
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          value={number}
          onChange={handleChange}
        ></input>
      </label>
      <Button type="submit" textContent="Done" />
    </form>
  );
};
