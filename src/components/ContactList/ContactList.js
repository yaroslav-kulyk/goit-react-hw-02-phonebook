import ContactListItem from './ContactListItem';
import PropTypes, { arrayOf } from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onContactDelete }) => {
  return (
    <ul className={s.contactList}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.item}>
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

ContactList.propTypes = {
  contacts: arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ),
  onContactDelete: PropTypes.func,
};

export default ContactList;
