import React, { useState } from 'react'
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState; //the property names of formState -- destructure the formState object into its named properties
  const [errorMessage, setErrorMessage] = useState(''); // initial state of the errorMessage is an empty string

  function handleChange(e) {
    // -- Add validation in the handleChange function, allowing 
    // validation of the form data before syncing the form data with the state, formState

    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // assign the error message for the email input based on the isValid value
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    console.log('errorMessage', errorMessage);

    // -- We use the spread operator, ...formState, so we can retain the other key-value pairs in this object. 
    // Without the spread operator, the formState object would be overwritten to only contain the name: value key pair.   
    // setFormState({...formState, name: e.target.value }) // for name only

    // -- The name property of target e = name attribute of the form's input element
    // Only allows the state to update with the user input if there is no error message
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  } // end of handleChange 

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log(formState);
  // }
  
  // -- Print test - not to be removed
  console.log(formState); // awesome

  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" onBlur={handleChange}  defaultValue={name} />
        </div>

        <div>
          <label htmlFor="email" >Email address:</label>
          <input type="email" name="email" onBlur={handleChange} defaultValue={email} />
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" onBlur={handleChange} defaultValue={message}/>
        </div>
        {/* AND operator explained: If the first value resolves to true, the second expression is evaluated. */}
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>

      </form>
    </section>
  )
}



export default ContactForm