import React, { useEffect, useState } from "react";
import { fetchUserData } from "../api/table-api.js"; // Assure-toi que le chemin est correct
import Banner from '../components/banner/Banner.jsx';
import Navbar from '../components/navbar/Navbar.jsx';

const Profile = () => {
  const [users, setUsers] = useState([]); // Pour stocker tous les utilisateurs
  const [error, setError] = useState(null); // Pour gérer les erreurs

  useEffect(() => {
    const getUserData = async () => {
      try {
        const records = await fetchUserData(); // Appelle la fonction fetch
        if (records && records.length > 0) {
          setUsers(records.map(record => record.fields)); // Stocke les utilisateurs dans l'état
        } else {
          setError("Aucun utilisateur trouvé.");
        }
      } catch (err) {
        console.error("Erreur lors du fetch des données :", err);
        setError("Erreur lors du chargement des données.");
      }
    };

    getUserData(); // Appeler la fonction au montage du composant
  }, []);

  if (error) {
    return <div>{error}</div>; // Afficher l'erreur s'il y en a
  }

  if (users.length === 0) {
    return <div>Chargement...</div>; // Affiche un message pendant le chargement
  }

  return (
    <div>
      <Banner />
      <h1>Liste des utilisateurs</h1>
      {users.map((user, index) => (
        <div key={index}>
          <h2>Utilisateur {user.user_id}</h2>
          <p>Pseudo : {user.pseudo}</p>
          <p>Nom : {user.name}</p>
          <p>Prénom : {user.surname}</p>
          <p>Email : {user.mail}</p>
          <p>XP : {user.xp}</p>
          <p>Niveau : {user.level}</p>
          <p>Image de profil : <img src={user.profil_picture} alt={user.pseudo} /></p>
        </div>
      ))}
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
          <p>Ma super présentation trop bien !</p>
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

export default Profile;