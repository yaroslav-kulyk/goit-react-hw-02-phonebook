import ContactListItem from './ContactListItem';

const ContactList = ({ contacts, onContactDelete }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <ContactListItem name={name} number={number} />
            <button type="button" onClick={() => onContactDelete(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
