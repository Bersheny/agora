import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Initialize navigate for redirection

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form (optional, add more robust validation as needed)
    if (!email || !password) {
      setErrorMessage('Both email and password are required.');
      return;
    }

    try {
      // Send POST request to Airtable API to add a new user
      const response = await fetch("https://api.airtable.com/v0/app1HhADwEzvW5A54/tblSkcO9mnIDUo8Z7", {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_TOKEN}`, // Replace with your Airtable token from .env
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields: {
            mail: email,
            password_hash: password, // In production, you should hash the password before sending it
          },
        }),
      });

      if (response.ok) {
        // Successful registration, redirect to home ("/")
        console.log('Registration successful');
        navigate('/'); // Redirect to home page
      } else {
        throw new Error('Failed to register the user');
      }
    } catch (error) {
      console.error('Error registering:', error);
      setErrorMessage('An error occurred during registration');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="form-example">
        <div>
          Email<br />
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          Password<br />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <br /><br />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div>
          <input type="submit" className="button blue-button" value="Register" />
        </div>
      </form>
      <br />
    </div>
  );
}

export default Register;
