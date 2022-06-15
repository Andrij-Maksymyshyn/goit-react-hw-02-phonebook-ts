import React, { Component } from 'react';
import { FormBox, Label, Button, Input } from './ContactForm.styled';

interface IState {
  name: string,
  number: string,
};

interface IProps {
  onSubmit: ({name, number}: IState) => ({
    id: string,
    name: string,
    number: string,
  })
};


class Form extends Component<IProps, IState>{
  state = {
    name: '',
    number: '',
  };


  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        this.setState({
          name: value,
        });
        break;
      
      case 'number':
         this.setState({
          number: value,
        });
        break;
      
      default:
        console.warn(`Noexpected fields name - ${name}`)
    }   
  };



  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.onSubmit(this.state);

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <>
        <FormBox autoComplete="off" onSubmit={this.handleSubmit}>
          <Label>
            Name
            <Input
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
            />
          </Label>

          <Label>
            Number
            <Input
              type="tel"
              name="number"
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
            />
          </Label>
          <Button type="submit">Add contact</Button>
        </FormBox>
      </>
    );
  }
}

export default Form;

