import ContactForm from './ContactForm';
import { useState } from 'react'; 
const Contact = ({ id, firstName, phone, removeContact }) => { 
  const [editing, setEditing] = useState(false)

  return(
    <>
      <h1>{firstName}</h1>
      <p>{phone}</p>
      {
        editing ?
        <>
          <ContactForm />
          <button onClick={() => setEditing(false)}>Cancel</button>
        </>
        :
        <button onClick={() => setEditing(true)}>Edit</button>
      }
      <button onClick={() => removeContact(id)}>Delete</button>
    </>
  )
}

export default Contact;