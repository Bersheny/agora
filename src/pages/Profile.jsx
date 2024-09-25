import React from 'react';
import Banner from '../components/banner/Banner.jsx';
import Navbar from '../components/navbar/Navbar.jsx';

function Home() {
  return (
    <div>
      <Banner />
      <section className="infos">
        <div className="infos-left-part">
          <img className="profile-pic"></img>
        </div>
        <div className="infos-right-part-to-change">
          <input type="text" placeholder="Pseudo"></input>
          <input type="text" placeholder="Mail"></input>
        </div>
        <div className="infos-right-part">
          {/* <p>{user.pseudo}</p>
          <p>{user.email}</p> */}
          <p>MonSuperPseudo</p>
          <p>MonEmailDEtudiant</p>
        </div>
      </section>
      <section className="bio">
        <h2>Bio</h2>
        <div className="bio-content-to-change">
          <input type="textarea" placeholder="Parlez-nous un peu de vous"></input>
        </div>
        <div className="bio-content">
          {/* <p>{userEvent.bio}</p> */}
          <p>Ma super présentation</p>
        </div>
      </section>
      <section className="tags">
        <h2>Loisirs</h2>
        <p>composant compétence</p>
        <p>autre composant compétence</p>
        <p>etc.</p>

      </section>
      <Navbar />
    </div>
  );
}

export default Home;