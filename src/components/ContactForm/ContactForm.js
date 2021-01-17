import React, { Component } from 'react';
import PropTypes from "prop-types";
import s from "./ContactForm.module.css";

export default class ContactForm extends Component {

  static propTypes = {
  onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: ''
  } 

  reset = () => {
    this.setState({ name: '', number: '' });
  };
  
  onSubmitContactForm = e => {
    e.preventDefault();
    
    this.props.onSubmit(this.state);

    this.reset();
  };

 onChangeContactForm = e => {
    const { name, value } = e.target;
    
    this.setState({
      [name]: value,
    });
  };


  render() {
    const { name, number } = this.state;

    return (
      <div className={s.inner}>
        <form className={s.form} onSubmit={this.onSubmitContactForm}>
          <label className={s.label}>
            Name
          <input
              name="name"
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={this.onChangeContactForm}
              className={s.input}
            />
          </label>
          <label className={s.label}>
            Phone
          <input
              name="number"
              type="text"
              placeholder="Enter Phone Number"
              value={number}
               onChange={this.onChangeContactForm}
              className={s.input}
            />
          </label>
          <button type="submit" className={s.button}>Add contacts</button>
        </form>
      </div>
    );
  }
};




