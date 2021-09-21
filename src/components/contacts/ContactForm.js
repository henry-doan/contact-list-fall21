import { useState } from 'react';

const ContactForm = ({ addContact }) => {
  const [contact, setContact] = useState({ firstName: "", phone: "" })

  const handleSubmit = (e) => {
    e.preventDefault();
    // call add function 
    addContact(contact)
    // reset the form
    setContact({ firstName: "", phone: "" })
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <input 
          name="firstName" 
          value={contact.firstName}
          onChange={(e) => setContact({...contact, firstName: e.target.value })}

          placeholder="First name"
          required
        />
        <input 
          name="phone" 
          value={contact.phone}
          onChange={(e) => setContact({...contact, phone: e.target.value })}

          placeholder="Phone"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default ContactForm;