import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';

import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";


class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  }
   

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = data => {
    const { contacts } = this.state;

    if (contacts.find(({ name }) => name === data.name)) {
      alert(`Oh. no! ${data.name} is already exist in phonebook`);
      return;
    }
      
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            id: uuidv4(),
            name: data.name,
            number: data.number,
          },
        ],
      };
    });
  };

  handleFilter = filter => {
    this.setState({
      filter,
    });
  };

  handleDelete = idData => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== idData),
      };
    });
  };

  filteredContacts () {
    const { contacts, filter } = this.state;

    return contacts.filter(data =>
      data.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };
  
  render() {
    const { filter } = this.state;
    
    return (
      <div className="container">
        <h1 className="title">Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} />

        <h2 className="title">Contacts</h2>
        <Filter filter={filter} onChangeFilter={this.handleFilter} />

        <ContactList data={this.filteredContacts()} onDeleteButton={this.handleDelete} />

      </div>

    );
  }
}

export default App;
