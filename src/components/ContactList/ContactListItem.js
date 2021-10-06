import PropTypes from 'prop-types';

const ContactListItem = ({ name, number }) => {
  return (
    <div>
      {name}: {number}
    </div>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
