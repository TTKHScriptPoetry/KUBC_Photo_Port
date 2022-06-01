import React, { useState } from 'react'

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState; //the property names of formState -- destructure the formState object into its named properties

  function handleChange(e) {
    // -- We use the spread operator, ...formState, so we can retain the other key-value pairs in this object. 
    // Without the spread operator, the formState object would be overwritten to only contain the name: value key pair.   
    // setFormState({...formState, name: e.target.value }) // for name only

    // -- The name property of target = name attribute of the form's input element
    setFormState({...formState, [e.target.name]: e.target.value })
    
  }

  // -- Print test - not to be removed
  console.log(formState); // awesome

  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" onChange={handleChange}  defaultValue={formState.name} />
        </div>

        <div>
          <label htmlFor="email" >Email address:</label>
          <input type="email" name="email" onChange={handleChange} defaultValue={formState.email} />
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" onChange={handleChange} defaultValue={formState.message}/>
        </div>

        <button type="submit">Submit</button>

      </form>
    </section>
  )
}



export default ContactForm