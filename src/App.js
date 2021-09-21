import { useState } from 'react';
import ContactList from './components/contacts/ContactList';
import ContactForm from './components/contacts/ContactForm';

const App = ({}) => {
  const [contacts, setContacts] = useState([
    {id: 1, firstName: "Tom", phone: "123-123-1233"},
    {id: 2, firstName: "Jerry", phone: "123-223-1233"},
    {id: 3, firstName: "Patrick", phone: "123-333-1233"},

  ])

  const getId = () => {
    // NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  const addContact = (incommingContact) => {
    // only doing this becuase we don't have a db
    // let newContact = { id: getId(), firstName: incommingContact.firstName, phone: incommingContact.phone}
    let newContact = { id: getId(), ...incommingContact }
    // add to the list
    setContacts([...contacts, newContact])
  }

  const removeContact = (id) => {
    setContacts(contacts.filter( c => c.id !== id))
  }

  return(
    <>
      <ContactForm addContact={addContact} />
      <ContactList contacts={contacts} removeContact={removeContact} />
    </>
  )
}

export default App;
