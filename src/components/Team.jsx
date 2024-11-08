import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa"; // Icons

// Import images
import superImg from "../assets/images/img2.jpg";

function Team() {
  return (
    <section className="team-section">
      <div className="team-container">
        <div className="contents">
          <div className="team-header">
            <h2 className="team-title">Meet The Developer</h2>
          </div>
          <div className="team-member-container">
            <div className="team-member">
              <img src={superImg} alt="Mohamed Super Dumbuya" />
              <h3 className="team-name">Mohamed Super Dumbuya</h3>
              <h4 className="team-title">Co-Founder - Tech Inspire SL</h4>
              <p>
                Hi, I&apos; m Mohamed, a passionate software developer and
                co-founder of Tech Inspire SL. I believe that every student
                deserves access to clear, actionable information that guides
                them toward a fulfilling career path. UniGuide was created to
                empower young people to make informed, confident decisions about
                their futures. My goal is to bridge the gap between students and
                the knowledge they need to explore university programs, career
                paths, and the skills required to thrive.{" "}
              </p>
              <div className="team-social-icon">
                <a href="">
                  <FaFacebook className="team-icon" />
                </a>
                <a href="">
                  <FaLinkedin className="team-icon" />
                </a>{" "}
                <a href="">
                  <FaTwitter className="team-icon" />
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Team;
