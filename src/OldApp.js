import { Component } from 'react';
import ContactList from './components/contacts/ContactList';
import ContactForm from './components/contacts/ContactForm';

class App extends Component {
  state = { contacts: [
    { id: 1, firstName: "Tom", phone: "123-123-1233" },
    { id: 2, firstName: "Jerry", phone: "333-123-1233" },
    { id: 3, firstName: "Patrick", phone: "323-123-1233" },
  ]}

  getId = () => {
    // NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  deleteContact = (id) => {
    const { contacts } = this.state 
    this.setState({ contacts: contacts.filter( c => c.id !== id)})
  }

  addContact = (incommingContact) => {
    const { contacts } = this.state
    // need to do because no db
    let newContact = { id: getId(), ...incommingContact}
    // let newContact = { id: getId(), firstName: incommingContact.firstName, phone: incommingContact.phone}
    this.setState({ contacts: [...contacts, newContact]})
  }

  updateContact = (id, incommingContact) => {
    const updatedContacts = this.state.contacts.map( c => {
      if (c.id === id) {
        return incommingContact
      }
      return c
    })
    this.setState({ contacts: updatedContacts })
  }

  render() {
    const { contacts } = this.state
    return (
      <>
        <h1>React Contact List!</h1>
        <ContactForm addContact={this.addContact} />
        <ContactList 
          contacts={this.state.contacts}
          deleteContact={this.deleteContact} 
          updateContact={this.updateContact}
        />
        {/* <ContactList contacts={contacts} /> */}
      </>
    )
  }
}

export default App;