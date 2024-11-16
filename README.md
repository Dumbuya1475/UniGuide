# UniGuide 🎓
<!-- UniGuide is a web-based platform designed to help users manage their diet and nutrition effectively. Built using HTML, CSS, JavaScript and firebase;for backend, it allows users to plan their meals, track daily nutritional intake, and receive tailored diet recommendations. -->

![UniGuide Banner](./src/assets/BG-Images/UG_hero.png)

UniGuide is a web-based platform designed to empower Sierra Leonean students in making informed career choices. By providing comprehensive insights into both tech and non-tech courses, UniGuide guides students on educational pathways, job opportunities, and the skills required for various professions, supporting them in building successful careers.

## 🌟 Features

- **Detailed Course Information**: Explore courses across multiple disciplines with overviews, skills acquired, and career prospects.
- **Career Pathways Guidance**: Discover job roles, career growth opportunities, and salary ranges associated with each course.
- **Responsive Dashboard**: Personalized dashboard with tailored information.
- **Intuitive, Responsive UI**: Mobile and desktop-friendly design for seamless access anywhere.

---

## 🚀 Getting Started

Follow these instructions to set up the UniGuide project locally.

### Prerequisites

- **Node.js**: Ensure Node.js is installed on your system.
- **npm**: Node Package Manager comes with Node.js and will be used to install dependencies.

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Dumbuya1475/UniGuide.git
   cd UniGuide
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**

   - Create a `.env` file in the root directory with the following Firebase configuration:

     ```plaintext
     VITE_FIREBASE_API_KEY=your-api-key
     VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
     VITE_FIREBASE_PROJECT_ID=your-project-id
     VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
     VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
     VITE_FIREBASE_APP_ID=your-app-id
     ```

   - **Note**: Replace the values with your Firebase credentials.

4. **Run the Application**

   ```bash
   npm run dev
   ```

   - The project will be available on `http://localhost:5173`.
   - The localholt number may varies

---

## 🛠️ Built With

- **React** + **Vite**: For a fast and scalable user interface.
- **Firebase**: Backend services for real-time data storage and authentication.
- **CSS**: Styling and responsive design.

---

## 📂 Project Structure

```plaintext
UniGuide
├── public
│   └── index.html              # Entry HTML file for Vite
├── src                         # Source code
│   ├── assets                  # Static assets (images, logos, videos)
│   │   ├── BG-Images/          # Background images
│   │   ├── images/             # General images
│   │   ├── logos/              # App and organization logos
│   │   ├── universities/       # University-specific images & logos
│   ├── components              # Reusable components
│   │   ├── About.jsx
│   │   ├── FAQ.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── LandingPage.jsx
│   │   ├── Login.jsx
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   ├── SignUp.jsx
│   │   ├── Team.jsx
│   │   ├── VideoWalkthrough.jsx
│   │   ├── styles/             # Component styles organized separately
│   │   │   ├── About.css
│   │   │   ├── FAQ.css
│   │   │   ├── Footer.css
│   │   │   ├── Header.css
│   │   │   ├── LandingPage.css
│   │   │   ├── Login.css
│   │   │   ├── Navbar.css
│   │   │   ├── Sidebar.css
│   │   │   ├── SignUp.css
│   │   │   └── Team.css
│   │   └── Dashboard           # Components for dashboard
│   │       ├── DashboardNavbar.jsx
│   │       ├── MainContent.jsx
│   │       ├── Sidebar.jsx
│   │       └── DashboardSections
│   │           ├── CareerDetail.jsx
│   │           ├── Careers.jsx
│   │           ├── Courses.jsx
│   │           ├── DashboardHome.jsx
│   │           ├── ExploreUniversities.jsx
│   │           ├── LearnAboutCourses.jsx
│   │           ├── Overview.jsx
│   │           ├── Settings.jsx
│   │           ├── Skills.jsx
│   │           ├── Universities.jsx
│   │           └── UniversityDetail.jsx
│   ├── data                    # Static data files
│   │   ├── coursesData.js
│   │   └── universitiesData.js
│   ├── router                  # Routing setup
│   │   └── Routes.jsx
│   ├── styles                  # Global styles and shared responsive design
│   │   ├── App.css
│   │   ├── index.css
│   │   └── responsive.css      # Styles for handling responsiveness
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry file for Vite
│   └── README.md               # Project readme file
└── .env                        # Environment variables (not to be committed)

```

---

## 📦 npm Packages

The following npm packages are installed for the UniGuide project:

- **React**: `npm install react react-dom`
- **Vite**: For a modern, fast development environment: `npm install vite`
- **Firebase**: For backend functionality, including authentication and real-time database: `npm install firebase`
- **React Router**: For handling routing: `npm install react-router-dom`

---

## 🌐 Demo

Provide a link to a live demo if available.

---

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page or submit a pull request.

---

## ✨ Acknowledgements

Thanks to the KNESST Developers Challenge for the opportunity and resources provided to bring UniGuide to life.