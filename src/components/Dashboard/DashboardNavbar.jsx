// src/components/DashboardNavbar.jsx
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import { auth, db } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import "./DashboardNavbar.css";

function DashboardNavbar() {
  const [userData, setUserData] = useState(null);
  // const [profilePic, setProfilePic] = useState(
  const [profilePic] = useState(
    localStorage.getItem("profilePic") || "default-profile.png"
  );

  useEffect(() => {
    // Observe authentication state
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Fetch user data from Firestore
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
      } else {
        console.log("No user is signed in.");
      }
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  // Save and load profile picture from localStorage
  // const handleImageUpload = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       const base64Image = e.target.result;
  //       localStorage.setItem("profilePic", base64Image);
  //       setProfilePic(base64Image);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  return (
    <nav className="dashboard-navbar">
      <div className="navbar-content">
        <div className="left">
          <FaBars />
          {userData ? (
            <p>Welcome, {userData.fullName || "User"}</p>
          ) : (
            <div>...</div>
          )}
        </div>
        {/* <p>
          <span>Career Choice: </span>
          {userData?.careerChoice || "Not specified"}
        </p> */}
        <img src={profilePic} alt="Profile" className="profileImage" />
        {/* <input type="file" onChange={handleImageUpload} /> */}
      </div>
      <ul className="dashboard-navbar-links">
        {/* <li>
          <NavLink to="/dashboard/skills" activeClassName="active">
            Profile
          </NavLink>
        </li> */}
      </ul>
    </nav>
  );
}

export default DashboardNavbar;
