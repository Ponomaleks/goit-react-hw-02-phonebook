import { v4 as uuidv4 } from 'uuid';
import { Component } from 'react';
import './App.css';
import Button from './Button/Button';
import Form from './Components/Form';
import InputName from './Components/InputName';
import Section from './Components/Section';
import Contacts from './Components/Contacts/Contacts';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addName = ({ contacts, name }) => {
    const newName = { name: name, id: uuidv4() };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newName],
    }));
  };
  handleSubmit = e => {
    e.preventDefault();
    this.addName(this.state);
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <Form name="addContact" onSubmit={this.handleSubmit}>
            <InputName value={this.state.name} onChange={this.handleChange} name="name"></InputName>
            <Button type="submit" text="Add contact"></Button>
          </Form>
        </Section>
        <Section title="Contacts">
          <Contacts contactsList={this.state.contacts}></Contacts>
        </Section>
      </>
    );
  }
}

export default App;
