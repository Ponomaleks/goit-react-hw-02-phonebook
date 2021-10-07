import { Component } from 'react';
import s from './Form.module.css';

import Button from './Button';
import InputName from './InputName';
import InputTel from './InputTel';

export default class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.clearForm();
  };

  clearForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <form className={s.form} name="addContact" onSubmit={this.handleSubmit}>
        <InputName value={this.state.name} onChange={this.handleChange} name="name"></InputName>
        <InputTel value={this.state.number} onChange={this.handleChange} name="number" />
        <Button type="submit" text="Add contact"></Button>
      </form>
    );
  }
}
