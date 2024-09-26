const TOKEN = process.env.REACT_APP_AIRTABLE_TOKEN; // Récupère la variable d'environnement
console.log("Token:", TOKEN);

const userIdToRecordId = {
  1: "recH7Eyj8lEWCcIL9", // John Doe
  2: "rec2LID6bX1w5dvnu"  // Jane Smith
};

export async function fetchSingleUser(userId) {
  console.log("UserId:", userId);

  const recordId = userIdToRecordId[userId]; // Obtenir le RECORD_ID correspondant
  if (!recordId) {
    throw new Error("Utilisateur non trouvé.");
  }

  const response = await fetch(`https://api.airtable.com/v0/app1HhADwEzvW5A54/tblSkcO9mnIDUo8Z7?filterByFormula=RECORD_ID()="${recordId}"`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  });

if (!response.ok) {
  throw new Error("Erreur lors de la récupération des données d'Airtable.");
}

  const data = await response.json();
  if (data.records.length === 0) {
    throw new Error("Utilisateur non trouvé.");
  }
  return data.records[0].fields; // Retourne les champs de l'utilisateur
}