import React from 'react';
import ContactListItem from './ContactListItem';

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return <ContactListItem key={id} name={name} number={number} />;
      })}
    </ul>
  );
};

export default ContactList;
