import { Component } from 'react';

class ContactFormOld extends Component {
  state = { firstName: "", phone: "" }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addContact(this.state)
    this.setState({ firstName: "", phone: "" })
  }

  render() { 
    const { firstName, phone } = this.state
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          name='firstName'
          value={firstName}
          onChange={this.handleChange}

          placeholder="Firstname"
          required
        />
        <input
          name='phone'
          value={phone}
          onChange={this.handleChange}

          placeholder="Phone"
          required
        />
        <button>Submit</button>
      </form>
    )
  }
}

export default ContactFormOld;