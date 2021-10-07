import ContactListItem from './ContactListItem';
import PropTypes, { arrayOf } from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onContactDelete }) => {
  return (
    <ul className={s.contactList}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <ContactListItem
              name={name}
              number={number}
              onContactDelete={() => onContactDelete(id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ),
  onContactDelete: PropTypes.func,
};

export default ContactList;
