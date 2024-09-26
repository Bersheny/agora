import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { fetchUserData } from '../api/table-api.js';
import LoginBanner from '../components/loginbanner/LoginBanner.jsx';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Initialize the navigate function

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const users = await fetchUserData(); // Fetch user data from Airtable
      const user = users.find(user => user.fields.mail === email);
      
      if (user) {
        if (user.fields.password_hash === password) {
          // Successful login, redirect to home ("/")
          console.log('Connexion accepté !');
          navigate('/'); // Redirect to home page
        } else {
          setErrorMessage('Mot de passe incorrect');
        }
      } else {
        setErrorMessage('Utilisateur non trouvé');
      }
    } catch (error) {
      console.error('Erreur pendant la connexion:', error);
      setErrorMessage('An error occurred during login');
    }
  };

  // Function to handle registration button click
  const handleRegisterClick = () => {
    navigate('/register'); // Redirect to the registration page
  };

  return (
    <div>
      <div className="orange-banner"></div>
      <LoginBanner />
      <form onSubmit={handleSubmit} className="form-example">
        <div>
          Mail<br />
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          Mot de passe<br />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <a href="/" className="forgot-password">Mot de passe oublié</a>

        <br /><br />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div>
          <input type="submit" className="button blue-button" value="Se connecter" />
        </div>
      </form>
      <br />
      <div>
        <button type="button" className="button green-button" onClick={handleRegisterClick}>
          Je m'inscris !
        </button>
      </div>
      <div className="orange-banner-bottom"></div>
    </div>
  );
}

export default Login;
