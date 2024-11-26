import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db, auth } from "../../../firebaseConfig";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import universities from "../../../data/universitiesData";
import "./Universities.css";

function Universities() {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState([]);
  const user = auth.currentUser; // Logged-in user

  useEffect(() => {
    if (user) {
      // Fetch user's favorites from Firestore on component mount
      const fetchFavorites = async () => {
        const docRef = doc(db, "favorites", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setFavorites(docSnap.data().favorites || []);
        }
      };
      fetchFavorites();
    }
  }, [user]);

  const handleLearnMore = (universityId) => {
    navigate(`/universities/${universityId}`);
  };

  const toggleFavorite = async (universityId) => {
    if (!user) {
      alert("Please log in to save favorites.");
      return;
    }

    const docRef = doc(db, "favorites", user.uid);
    if (favorites.includes(universityId)) {
      // Remove from favorites
      setFavorites((prev) => prev.filter((id) => id !== universityId));
      await updateDoc(docRef, {
        favorites: arrayRemove(universityId),
      });
    } else {
      // Add to favorites
      setFavorites((prev) => [...prev, universityId]);
      await setDoc(
        docRef,
        { favorites: arrayUnion(universityId) },
        { merge: true }
      );
    }
  };

  return (
    <div className="universities-page">
      <h1>Explore Universities in Sierra Leone</h1>
      <p>
        Discover higher education institutions and their available programs.
      </p>

      <div className="universities-container">
        {universities.map((uni) => (
          <div key={uni.id} className="university-card">
            <img src={uni.logo} alt={uni.name} className="university-logo" />
            <h2>{uni.name}</h2>
            <p className="tagline">{uni.description}</p>
            <p className="location">
              <strong>Location:</strong> {uni.location}
            </p>
            <p className="type">
              <strong>Type:</strong> {uni.type}
            </p>
            <p className="program">
              <strong>Programs:</strong> {uni.programs.join(", ")}
            </p>
            <div className="action-btn">
              <button
                onClick={() => handleLearnMore(uni.id)}
                className="learn-more-button"
              >
                Learn More
              </button>
              <button
                onClick={() => toggleFavorite(uni.id)}
                className={`favorite-button ${
                  favorites.includes(uni.id) ? "favorited" : ""
                }`}
              >
                {favorites.includes(uni.id) ? "⭐" : "☆"} Favorite
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Universities;
