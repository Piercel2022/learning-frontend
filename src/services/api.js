const API_URL = "http://localhost:3000/api/v1";

export const getUserProfile = async () => {
  try {
    const response = await fetch(`${API_URL}/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer YOUR_ACCESS_TOKEN", // Ajouter un token si nécessaire
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return null;
  }
};

export const fetchCourses = () => {
  return fetch('/api/courses').then(response => response.json());
};
