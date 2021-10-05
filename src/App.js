import React, { Component } from 'react';
import './App.css';
const shortid = require('shortid');

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  onChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.contacts);
    const newArr = [
      ...this.state.contacts,
      { id: shortid.generate(), name: this.state.name },
    ];
    // const newArr = this.state.contacts.concat([
    //   { id: 'id-1', name: this.state.name },
    // ]);
    this.setState({ contacts: newArr });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.onSubmit}>
          <label>
            Имя{' '}
            <input
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              onChange={this.onChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>

        <ul>
          {this.state.contacts.map(contact => {
            return <li key={contact.id}>{contact.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
