import React, { useState, useEffect } from "react";
import { getUserProfile } from "../services/api";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileData = await getUserProfile();
        setUser(profileData);
      } catch (err) {
        //setError("Erreur lors de la connexion à l'API. Nouvelle tentative dans 5 secondes...");
        setTimeout(() => {
          fetchProfile();
        }, 5000);
      } finally {
        setLoading(false);
      }
    };
  
    fetchProfile();
  }, []);  

  if (loading) {
    return <div>Chargement des données...</div>;
  }

  if (!user) {
    return <div>Erreur de chargement des données utilisateur.</div>;
  }

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold">Profil utilisateur</h1>
      <div className="mt-4 p-4 bg-gray-100 rounded">
        <p><strong>Nom :</strong> {user.name}</p>
        <p><strong>Email :</strong> {user.email}</p>
        <p><strong>Cours terminés :</strong> {user.coursesCompleted}</p>
        <p><strong>Leçons terminées :</strong> {user.lessonsCompleted}</p>
      </div>
    </div>
  );
};

export default Profile;
