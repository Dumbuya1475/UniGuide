// src/components/DashboardNavbar.jsx
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import { auth, db } from "../../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import Sidebar from "./Sidebar";
import "./DashboardNavbar.css";

function DashboardNavbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State to track sidebar visibility
  const [userData, setUserData] = useState(null); // State to store user data
  const [profilePic, setProfilePic] = useState(
    localStorage.getItem("profilePic") || "default-profile.png"
  ); // State to store profile picture

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Listen for changes to localStorage and update the profile picture state
  useEffect(() => {
    const handleStorageChange = () => {
      const newProfilePic =
        localStorage.getItem("profilePic") || "default-profile.png";
      setProfilePic(newProfilePic);
    };

    // Add event listener to detect changes in localStorage
    window.addEventListener("storage", handleStorageChange);

    return () => {
      // Cleanup event listener on unmount
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Listen for authentication state changes and fetch user data
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists()) {
            setUserData(userDoc.data());
          } else {
            console.error("No such document!");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    });

    // Cleanup subscription on component unmount
    return () => unsubscribe();
  }, []);

  return (
    <nav className="dashboard-navbar">
      <div className="navbar-content">
        <div className="left">
          <FaBars onClick={toggleSidebar} className="menu-icon" />
          {userData ? (
            <p>Welcome, {userData.fullName || "User"}</p>
          ) : (
            <div>...</div>
          )}
        </div>
        <img
          src={profilePic}
          alt="Profile"
          className="profileImage"
          style={{ width: "40px", height: "40px", borderRadius: "50%" }}
        />
      </div>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </nav>
  );
}

export default DashboardNavbar;
