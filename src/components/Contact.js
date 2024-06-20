
import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
// import Navigation from './components/Navigation';


function Contact() {
  

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  function refreshPage() {
    window.location.reload(true);
  }


  // if (state.succeeded) {
    // return (
//       <div>
//         <p>Thanks for reaching out!</p>
//         <button className="button is-medium is-primary is-half m-6" onClick={()=> window.open("/#contact")}>Back to About</button>
//         {/* This form button is broken. It was supposed to refresh the page so you can submit a new form, but I'm changing this bug into a feature that takes you back to the about section. */}
//       </div>
//     );
// }


  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`A ${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (

    
    <article id="contact">
      <a href="Intro"><h3>Intro |</h3></a><a href="Portfolio"><h3>Portfolio |</h3></a><a href="Contact"><h3>Contact</h3></a>
    <h2 class="major">Contact</h2>
    <form method="post" action="#">
      <div class="fields">
        <div class="field half">
          <label for="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div class="field half">
          <label for="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div class="field">
          <label for="message">Message</label>
          <textarea name="message" id="message" rows="4"></textarea>
        </div>
      </div>
      <ul class="actions">
        <li><input type="submit" value="Send Message" class="primary" /></li>
        <li><input type="reset" value="Reset" /></li>
      </ul>
    </form>
    <ul class="icons">
      <li><a href="https://x.com/SongBirdCode" target="_blank" rel="noopener noreferrer" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
      <li><a href="https://facebook.com/ginabauza" target="_blank" rel="noopener noreferrer" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
      <li><a href="https://instagram.com/songbirdcode" target="_blank" rel="noopener noreferrer" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
      <li><a href="https://github.com/SongBirdCode" target="_blank" rel="noopener noreferrer" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
      <li><a href="https://linkedin.com/in/songbirdcode/" target="_blank" rel="noopener noreferrer" class="icon brands fa-linkedin"><span class="label">Linkedin</span></a></li>
    </ul>
  </article>
  
  );
}

export default Contact;