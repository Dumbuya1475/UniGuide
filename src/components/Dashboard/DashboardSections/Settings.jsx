import { useEffect, useState } from "react";
import { auth, db } from "../../../firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { signOut, updatePassword } from "firebase/auth";
import "./Settings.css";

function Settings() {
  const [userData, setUserData] = useState(null);
  const [newPassword, setNewPassword] = useState("");
  const [image, setImage] = useState(
    localStorage.getItem("profilePic") || "default-profile.png"
  );
  const [newImage, setNewImage] = useState(null);
  const [careerChoice, setCareerChoice] = useState(""); // Career choice state
  const user = auth.currentUser;

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid)); // Fetch user data from Firestore
        if (userDoc.exists()) {
          const data = userDoc.data();
          setUserData(data);
          setCareerChoice(data.careerChoice || ""); // Set initial career choice if it exists
        } else {
          console.error("No such document!");
        }
      }
    };

    fetchUserData();
  }, [user]);

  // Handle sign out
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      alert("You have been signed out.");
    } catch (error) {
      console.error("Error signing out: ", error);
      alert("Error signing out. Please try again.");
    }
  };

  // Handle password change
  const handlePasswordChange = async (e) => {
    e.preventDefault();
    try {
      await updatePassword(user, newPassword);
      alert("Password updated successfully!");
      setNewPassword("");
    } catch (error) {
      console.error("Error updating password: ", error);
      alert("Error updating password. Please try again.");
    }
  };

  // Handle career path selection
  const handleCareerChoiceChange = async (e) => {
    const selectedCareer = e.target.value;
    setCareerChoice(selectedCareer);

    // Update Firestore with the selected career path
    if (selectedCareer) {
      try {
        await updateDoc(doc(db, "users", user.uid), {
          careerChoice: selectedCareer,
        });
        alert("Career path updated successfully!");
      } catch (error) {
        console.error("Error updating career path: ", error);
        alert("Error updating career path. Please try again.");
      }
    }
  };

  // Handle image upload and preview
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setNewImage(e.target.result); // Set the image preview
      };
      reader.readAsDataURL(file);
    }
  };

  // Save image changes
  const handleSaveChanges = () => {
    if (newImage) {
      localStorage.setItem("profilePic", newImage);
      setImage(newImage);
      setNewImage(null);
      window.location.reload();
    }
  };

  return (
    <div className="settings-container">
      <h2>Account Settings</h2>

      {/* Display User Data */}
      {userData ? (
        <>
          <div className="user-info">
            <p>
              <strong>Full Name:</strong> {userData.fullName || "Not available"}
            </p>
            <p>
              <strong>Email:</strong> {userData.email || "Not available"}
            </p>
            <p>
              <strong>Career Path:</strong>{" "}
              {userData.careerChoice || "Not specified"}
            </p>
          </div>
        </>
      ) : (
        <p>Loading user data...</p>
      )}

      {/* Career Path Selection (Always visible) */}
      <div className="career-path-selection">
        <p>
          <strong>Career Path:</strong>
        </p>
        <select value={careerChoice} onChange={handleCareerChoiceChange}>
          <option value="">Select your career path</option>
          <option value="Software Engineering">Software Engineering</option>
          <option value="Data Science">Data Science</option>
          <option value="Web Development">Web Development</option>
          <option value="AI/ML">AI/ML</option>
          <option value="Cyber Security">Cyber Security</option>
          <option value="Others">Others</option>
        </select>
      </div>

      {/* Change Password Form */}
      <form className="password-change-form" onSubmit={handlePasswordChange}>
        <h3>Change Password</h3>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="New Password"
          required
        />
        <button type="submit">Update Password</button>
      </form>

      {/* Profile Image Upload */}
      <h3>Profile Picture</h3>
      <input type="file" onChange={handleImageUpload} />
      <div>
        <img
          src={newImage || image}
          alt="Profile Preview"
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
        />
      </div>
      <button onClick={handleSaveChanges} disabled={!newImage}>
        Save Changes
      </button>

      {/* Sign Out Button */}
      <button className="signout-button" onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
}

export default Settings;
