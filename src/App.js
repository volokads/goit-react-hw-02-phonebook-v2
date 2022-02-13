import './App.css';
import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Form } from './components/Form/Form.jsx'
import { Filter } from "./components/Filter/Filter.jsx"
import {Contacts} from "./components/Contacts/Contacts.jsx"


class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: "",
  }
  // filterId = nanoid()

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState( {[name]: value })}

  forSubmit = (obj) => {
    const findContact = this.state.contacts.find(contact => {
      return contact.name === obj.name;
    })
    if (findContact) {
      return alert (`${obj.name} is already in phonebook`)
    }
    this.setState(prev => ({
      contacts: [{id: nanoid(),...obj}, ...prev.contacts ]
    }))
  }
  contactsFilter = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact => {
      if (contact.name.toLowerCase().includes(filter.toLocaleLowerCase())) {
        return contact;
      }
    });
  };
  deleteContact = e => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => {
        return contact.id !== e.target.parentNode.id;
      }),
    }));
  };

  render ()
  {
    return (
      <div className="App">
        <div>
          <h2>PhoneBook</h2>
          <Form onSubmit={ this.forSubmit}/>
        </div>
        <div className="Contacts">
          <h2>Contacts</h2>
          <Filter
            value={this.state.filter}
            onChange={this.handleChange}
          />
          <Contacts
            names={this.contactsFilter} onClick={ this.deleteContact }
          />
        </div>
      </div>
    )
  }
  
}

export default App;
