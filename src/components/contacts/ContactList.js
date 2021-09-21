import Contact from './Contact';

const ContactList = ({ contacts, removeContact }) => (
  <>
    {
      contacts.map( c => (
        // <Contact id={c.id} firstName={c.firstName} lastName={c.lastName} phone={c.phone}/>
        <Contact {...c} removeContact={removeContact} />
      ))
    }
  </>
)

export default ContactList;