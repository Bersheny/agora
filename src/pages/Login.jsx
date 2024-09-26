import React from 'react';
import LoginBanner from '../components/loginbanner/LoginBanner.jsx';
import './Login.css';

function Login() {
  return (
    <div>
        <div className="orange-banner"></div>
        <LoginBanner />
        <form action="" method="get" class="form-example">
            <div>
                Mail<br></br>
                <input type="email" id="email"></input>
            </div>

            <div>
                Mot de passe<br></br>
                <input type="password" id="password"></input>
            </div>
            <a href="/" className="forgot-password">Mot de passe oublié</a>

            <br></br><br></br>
            <div>
                <input type="submit" className="button blue-button" value="Se connecter" />
            </div>
        </form>
        <br></br>
        <div>
            <button type="button" className="button green-button">Je m'inscris !</button>
        </div>
        <div className="orange-banner-bottom"></div>
    </div>
  );
}

export default Login;