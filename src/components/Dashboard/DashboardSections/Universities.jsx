import { db, auth } from "../../../firebaseConfig";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";

import { useState, useEffect } from "react";
import universities from "../../../data/universitiesData";
import { useNavigate } from "react-router-dom";
import "./Universities.css";

import "./Universities.css";

function Universities() {
  const navigate = useNavigate();

  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState([]); // State for favorite universities
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

  // Toggle favorite state for a university

  // Filter universities based on the selected category and search query
  const filteredUniversities = universities.filter((uni) => {
    const matchesCategory = filter === "All" || uni.category === filter;
    const matchesSearch =
      uni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      uni.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      uni.programs.some((program) =>
        program.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesCategory && matchesSearch;
  });

  // Get the list of favorite universities
  const favoriteUniversities = universities.filter((uni) =>
    favorites.includes(uni.id)
  );

  return (
    <div className="universities-page">
      <h1>Explore Universities in Sierra Leone</h1>
      <p>
        Discover higher education institutions and their available programs.
      </p>

      {/* Filter and Search Bar */}
      <div className="filter-search-container">
        <div className="filter-container">
          <label htmlFor="category-filter">Filter by Category:</label>
          <select
            id="category-filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="category-dropdown"
          >
            <option value="All">All</option>
            <option value="A">Category A</option>
            <option value="B">Category B</option>
            <option value="C">Category C</option>
          </select>
        </div>

        <div className="search-container">
          <label htmlFor="search-bar">Search:</label>
          <input
            type="text"
            id="search-bar"
            placeholder="Search by name, location, or program"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-bar"
          />
        </div>
      </div>

      <div className="universities-container">
        {filteredUniversities.length > 0 ? (
          filteredUniversities.map((uni) => (
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
                <a
                  href={uni.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="website-link"
                >
                  Visit Website
                </a>
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
          ))
        ) : (
          <p>No universities match your search criteria.</p>
        )}
      </div>

      {/* Overview Section for Favorites */}
      <div className="overview-section">
        <h2>Your Favorite Universities</h2>
        {favoriteUniversities.length > 0 ? (
          <div className="universities-container">
            {favoriteUniversities.map((uni) => (
              <div key={uni.id} className="university-card">
                <img
                  src={uni.logo}
                  alt={uni.name}
                  className="university-logo"
                />
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
                <a
                  href={uni.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="website-link"
                >
                  Visit Website
                </a>
              </div>
            ))}
          </div>
        ) : (
          <p>You have not favorited any universities yet.</p>
        )}
      </div>
    </div>
  );
}

export default Universities;
