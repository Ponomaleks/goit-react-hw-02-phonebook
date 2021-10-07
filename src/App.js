import { v4 as uuidv4 } from 'uuid';
import { Component } from 'react';
import './App.css';

import Form from './Components/Form';
import SectionH1 from './Components/SectionH1';
import Contacts from './Components/Contacts';
import SectionH2 from './Components/SectionH2';
import Filter from './Components/Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const newContact = { name: name, number: number, id: uuidv4() };

    if (
      !this.state.contacts.map(contact => contact.name.toLowerCase()).includes(name.toLowerCase())
    ) {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    } else alert(`${name} is already in contacts.`);
  };

  formSubmitHandler = data => {
    this.addContact(data);
  };

  deleteContactHandler = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  filterHundler = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );

    return (
      <>
        <SectionH1 title="Phonebook">
          <Form onSubmit={this.formSubmitHandler}></Form>
        </SectionH1>
        <SectionH2 title="Contacts">
          <Filter value={this.state.filter} onChange={this.filterHundler} />
          <Contacts
            contactsList={filteredContacts}
            onDeleteContact={this.deleteContactHandler}
          ></Contacts>
        </SectionH2>
      </>
    );
  }
}

export default App;
