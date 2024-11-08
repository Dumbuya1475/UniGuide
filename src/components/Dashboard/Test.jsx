// Dashboard.js
import { useEffect, useState } from "react";
import { fetchUserData } from "../utils/fetchUserData"; // Update the path as necessary
import { observeUser, logoutUser } from "../utils/auth"; // Update the path as necessary
import { auth } from "../firebase"; // Ensure the correct path to your Firebase config

function Dashboard() {
  const [userData, setUserData] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Observe authentication state
    const unsubscribe = observeUser(setCurrentUser);

    return () => unsubscribe(); // Clean up subscription on unmount
  }, []);

  useEffect(() => {
    const getUserData = async () => {
      if (currentUser) {
        const data = await fetchUserData(currentUser.email);
        setUserData(data);
      }
    };

    getUserData();
  }, [currentUser]);

  const handleLogout = async () => {
    await logoutUser();
  };

  if (!userData) {
    return <div>Loading...</div>; // Handle loading state
  }

  return (
    <div>
      <h1>Welcome, {userData.fullName}</h1>
      <p>Email: {userData.email}</p>
      <p>Career Choice: {userData.careerChoice}</p>
      <p>Chosen Career: {userData.chosenCareer}</p>
      <button onClick={handleLogout}>Logout</button>
      {/* Add functionality to switch accounts if necessary */}
    </div>
  );
}

export default Dashboard;
