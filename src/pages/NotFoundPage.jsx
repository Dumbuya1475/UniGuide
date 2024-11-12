// src/pages/NotFoundPage.jsx
import { Link } from "react-router-dom";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <p>Oops! The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="home-button">
        Return to Homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;
