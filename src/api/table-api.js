// api-table.js
const TOKEN = process.env.REACT_APP_AIRTABLE_TOKEN;

const userIdToRecordId = {
  1: "recH7Eyj8lEWCcIL9", // John Doe
  2: "rec2LID6bX1w5dvnu"  // Jane Smith
};

export async function fetchSingleUser(userId) {
  console.log("UserId:", userId);

  const recordId = userIdToRecordId[userId]; // Get corresponding RECORD_ID
  if (!recordId) {
    throw new Error("User not found."); // Error message in English
  }

  const response = await fetch(`https://api.airtable.com/v0/app1HhADwEzvW5A54/tblSkcO9mnIDUo8Z7?filterByFormula=RECORD_ID()="${recordId}"`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  });

  if (!response.ok) {
    throw new Error("Error fetching user data from Airtable."); // Handle response errors
  }

  const data = await response.json();
  if (data.records.length === 0) {
    throw new Error("User not found."); // Ensure proper error message
  }
  return data.records[0].fields; // Return the user's fields
}

export async function fetchUserData() {
  const response = await fetch("https://api.airtable.com/v0/app1HhADwEzvW5A54/tblSkcO9mnIDUo8Z7", {
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  });

  if (!response.ok) {
    throw new Error("Error fetching user data from Airtable."); // Handle response errors
  }

  const data = await response.json();
  if (data.records.length === 0) {
    throw new Error("No users found."); // Update error message for clarity
  }
  return data.records; // Return all user records, not just the fields of the first one
}


// New function to fetch posts
export async function fetchPosts() {
  const response = await fetch("https://api.airtable.com/v0/app1HhADwEzvW5A54/post", {
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  });

  if (!response.ok) {
    throw new Error("Error fetching posts from Airtable."); // Handle response errors
  }

  const data = await response.json();
  return data.records; // Return all posts
}

// New function to fetch users by their IDs
export async function fetchUsers() {
  const response = await fetch("https://api.airtable.com/v0/app1HhADwEzvW5A54/user", {
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  });

  if (!response.ok) {
    throw new Error("Error fetching users from Airtable."); // Handle response errors
  }

  const data = await response.json();
  return data.records; // Return all users
}
