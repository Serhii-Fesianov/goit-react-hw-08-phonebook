import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from 'components/redux/operations';
import s from './ContactsPage.module.css';
import { ContactList } from 'components/ContactList/ContactList';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1 className={s.headText}>Phonebook</h1>
      <ContactForm />
      <h2 className={s.headText}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
