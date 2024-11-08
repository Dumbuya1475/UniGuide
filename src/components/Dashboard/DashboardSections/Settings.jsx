// src/components/Dashboard/DashboardSections/Settings.jsx
import { useEffect, useState } from "react";
import { auth, db } from "../../../firebase"; // Adjust imports based on your structure
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { signOut, updatePassword } from "firebase/auth";
import "./Settings.css";

function Settings() {
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    notificationPreferences: true, // Default to true (enabled)
    privacySettings: true, // Default to true (enabled)
  });

  const [newPassword, setNewPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState(null); // State for profile picture
  const user = auth.currentUser; // Get current user

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.email));
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        }
      }
    };

    fetchUserData();
  }, [user]);

  // const handleChange = (e) => {
  //   setUserData({ ...userData, [e.target.name]: e.target.value });
  // };

  // const handleCheckboxChange = (e) => {
  //   setUserData({ ...userData, [e.target.name]: e.target.checked });
  // };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await updateDoc(doc(db, "users", user.email), userData);
      alert("Settings updated successfully!");
    } catch (error) {
      console.error("Error updating settings: ", error);
      alert("Error updating settings. Please try again.");
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      alert("You have been signed out.");
    } catch (error) {
      console.error("Error signing out: ", error);
      alert("Error signing out. Please try again.");
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    try {
      await updatePassword(user, newPassword);
      alert("Password updated successfully!");
      setNewPassword(""); // Reset password field
    } catch (error) {
      console.error("Error updating password: ", error);
      alert("Error updating password. Please try again.");
    }
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="settings-container">
      <h2>Account Settings</h2>
      <form className="settings-form" onSubmit={handleSave}>
        {/* <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={userData.fullName}
          onChange={handleChange}
          required
        /> */}
        {/* <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={userData.email}
          onChange={handleChange}
          required
          disabled // Disable to prevent changing email
        /> */}

        {/* <label>
          <input
            type="checkbox"
            name="notificationPreferences"
            checked={userData.notificationPreferences}
            onChange={handleCheckboxChange}
          />
          Enable Notifications
        </label> */}

        {/* <label>
          <input
            type="checkbox"
            name="privacySettings"
            checked={userData.privacySettings}
            onChange={handleCheckboxChange}
          />
          Share My Data
        </label> */}

        {/* <button type="submit" className="settings-button">
          Save Changes
        </button> */}
      </form>

      <form className="password-change-form" onSubmit={handlePasswordChange}>
        <h2>Change Password</h2>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="New Password"
          required
        />
        <button type="submit">Update Password</button>
      </form>

      <div className="profile-picture-section">
        <h2>Profile Picture</h2>
        {profilePicture && <img src={profilePicture} alt="Profile" />}
        <input
          type="file"
          accept="image/*"
          onChange={handleProfilePictureChange}
        />
      </div>

      <button className="signout-button" onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
}

export default Settings;
