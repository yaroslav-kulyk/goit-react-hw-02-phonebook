import React, { Component } from 'react';
import './App.css';
const shortid = require('shortid');

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  onChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  addContact = e => {
    e.preventDefault();

    const { name, number } = this.state;
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));

    this.reset();
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.addContact}>
          <label>
            Name{' '}
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              value={this.state.name}
              onChange={this.onChange}
            />
          </label>
          <label>
            Number{' '}
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              value={this.state.number}
              onChange={this.onChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>

        <p>Find contacts by name</p>
        <input
          type="text"
          value={this.state.filter}
          onChange={this.changeFilter}
        ></input>

        <ul>
          {visibleContacts.map(contact => {
            return (
              <li key={contact.id}>
                {contact.name}: {contact.number}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
