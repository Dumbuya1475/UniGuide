import { useEffect, useState } from "react";
import { auth, db } from "../../../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import universities from "../../../data/universitiesData"; // Import your university data
import "./Overview.css";

function Overview() {
  const [userData, setUserData] = useState(null);
  const [favoriteUniversities, setFavoriteUniversities] = useState([]);

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          // Fetch user's favorite university IDs from Firestore
          const userFavoritesDoc = await getDoc(doc(db, "favorites", user.uid));
          if (userFavoritesDoc.exists()) {
            const { favorites } = userFavoritesDoc.data();

            // Filter the universities data to match the user's favorites
            const favoriteUnis = universities.filter((uni) =>
              favorites.includes(uni.id)
            );
            setFavoriteUniversities(favoriteUnis);
          } else {
            console.error("No favorites found for this user!");
          }

          // Fetch user's general data (optional)
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists()) {
            setUserData(userDoc.data());
          }
        } catch (error) {
          console.error("Error fetching user data or favorites:", error);
        }
      } else {
        console.log("No user is signed in.");
      }
    });

    // Cleanup on component unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="overview-container">
      <div className="overview-heading">
        <h2>Your Overview</h2>
        <p>Welcome back! Here’s a summary of your recent activities:</p>
      </div>

      {/* Welcome Message */}
      <div className="notification-center">
        <h2>Notification Center</h2>
        <div className="notifications">
          <ul>
            <li>
              {userData ? (
                <p>
                  <strong>Welcome,</strong> {userData.fullName || "User"}
                </p>
              ) : (
                <div>Loading user data...</div>
              )}
              <p>You have just signed up</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Favorite Universities Section */}
      <div className="favorite-universities">
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
              </div>
            ))}
          </div>
        ) : (
          <p>You have not marked any universities as favorites yet.</p>
        )}
      </div>
    </div>
  );
}

export default Overview;

