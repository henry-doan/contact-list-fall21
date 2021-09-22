import Contact from './Contact';

const ContactList = ({ contacts, removeContact, updateContact }) => (
  <>
    {
      contacts.map( c => (
        // <Contact id={c.id} firstName={c.firstName} lastName={c.lastName} phone={c.phone}/>
        <Contact 
          {...c} 
          removeContact={removeContact} 
          updateContact={updateContact}
        />
      ))
    }
  </>
)

export default ContactList;