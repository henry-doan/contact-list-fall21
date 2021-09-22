import { useState, useEffect } from 'react';

const ContactForm = ({ addContact, id, firstName, phone, updateContact, setEditing }) => {
  const [contact, setContact] = useState({ firstName: "", phone: "" })

  useEffect( () => {
    // check if we are editing
    if (id) {
      // pre pop the form with the values
      // setContact({ firstName: firstName, phone: phone })
      setContact({ firstName, phone })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    // if we are editing
    if (id) {
      // call the update contact (contact)
      updateContact(id, contact)
      // close out the form 
      setEditing(false)
    } else {
      // call add function 
      addContact(contact)
    }
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