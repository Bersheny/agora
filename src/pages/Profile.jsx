import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Pour récupérer le paramètre de l'URL
import { fetchSingleUser } from "../api/table-api.js";
import Banner from '../components/banner/Banner.jsx';
import Navbar from '../components/navbar/Navbar.jsx';

const Profile = () => {
  const { userId } = useParams(); // Récupère l'ID de l'utilisateur depuis l'URL
  const [user, setUser] = useState(null); // Pour stocker l'utilisateur
  const [error, setError] = useState(null); // Pour gérer les erreurs

  useEffect(() => {
    const getUserData = async () => {
      try {
      if (userId) {
        const userData = await fetchSingleUser(userId); // Utilise l'ID récupéré dans l'URL
        setUser(userData);
      } else {
        setError("Aucun ID utilisateur spécifié.");
      }
    } catch (err) {
      console.error("Erreur lors du fetch des données :", err);
      setError("Erreur lors du chargement des données.");
    }
  };

  getUserData(); // Appeler la fonction au montage du composant
}, [userId]); // Re-fetch chaque fois que userId change

  if (error) {
    return <div>{error}</div>; // Afficher l'erreur s'il y en a
  }

  if (!user) {
    return <div>Chargement...</div>; // Affiche un message pendant le chargement
  }

  return (
    <div>
      <Banner />
      <h1>Profil de l'utilisateur</h1>
      <section className="infos">
        <div className="infos-left-part">
          <img src={user.profil_picture} alt={user.pseudo} className="profile-pic"></img>
          {/* ajouter un bouton de modification */}
        </div>
        <div className="infos-right-part">
          <p>{user.pseudo}</p>
          <p>{user.mail}</p>
        </div>
        {/* ajouter un bouton de modification */}
        {/* <div className="infos-right-part-to-change">
          <input type="text" placeholder="Pseudo"></input>
          <input type="text" placeholder="Mail"></input>
        </div> */}
      </section>
      <section className="bio">
        <h2>Bio</h2>
        <div className="bio-content">
          <p>{user.bio}</p>
        </div>
        {/* ajouter un bouton de modification */}
        {/* <div className="bio-content-to-change">
          <input type="textarea" placeholder="Parlez-nous un peu de vous"></input>
        </div> */}
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