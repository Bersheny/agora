const TOKEN = process.env.REACT_APP_AIRTABLE_TOKEN; // Récupère la variable d'environnement
console.log("Token:", TOKEN);

export async function fetchUserData() {
  const response = await fetch("https://api.airtable.com/v0/app1HhADwEzvW5A54/tblSkcO9mnIDUo8Z7", {
  headers: {
    Authorization: `Bearer ${TOKEN}`
  }
});

if (!response.ok) {
  throw new Error("Erreur lors de la récupération des données d'Airtable.");
}

  const data = await response.json();
  return data.records; // Retourne les enregistrements (l'ensemble des utilisateurs)
}