import React, { useState, useEffect } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PortifolioSecond from './Components/Portifolio-second/PortifolioSecond';
import EducationForm from './Components/ProfileForms/EducationForm';
import ProfileForm from './Components/ProfileForms/ProfileForm';
import ProjectsForm from './Components/ProfileForms/ProjectsForm';
import SkillsForm from './Components/ProfileForms/SkillsForm';
import WorkStatus from './Components/ProfileForms/WorkStatus';
import Intro from './Components/Intoduction/Intro';
import Contact from './Components/Contact/Contact';
import GetInTouch from './Components/Contact/GetInTouch';
import Skills from './Components/Skills/Skills';
import BottomRoute from './Components/BottomRoute';
import Education from './Components/Education/Education';
import axios from 'axios'
import { BASE_URL } from './Constant';
import Experience from './Components/Experience/Experience';
import Projects from './Components/Projects/Projects';
import { HelmetProvider } from 'react-helmet-async'; // Import HelmetProvider
import { Helmet } from 'react-helmet-async';
import Loading from './Components/Loading/Loading';
import { useTheme } from './ThemeContext';
import ToggleDarkMode from './Components/ToggleDarkMode/ToggleDarkMode';


function App() {
  const [profileDetails, setProfileDetails] = useState({});
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const { darkMode } = useTheme();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  // const navigate = useNavigate();
  const handleLogin = () => {
    // Check if the entered password matches the expected password
    const expectedPassword = '3636'; // Change this to your desired password
    if (password === expectedPassword) {
      // Set isAuthenticated to true
      setIsAuthenticated(true);
    } else {
      window.location.assign('/');
    }
  };
  useEffect(() => {
    getProfileDetails();
  }, []);

  const getProfileDetails = async () => {
    try {
      setLoading(true)
      const profileDetails = await axios.get(
        BASE_URL + "/user/get-person-details"
      );
      setProfileDetails(profileDetails.data.data.user_details);
      updateFavicon(profileDetails.data.data.user_details.photo);

      // document.title = profileDetails.data.data.user_details.fullName;
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  };
  const updateFavicon = (photoUrl) => {
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'icon';
    link.href = photoUrl; // Use the photo URL as the favicon
    document.getElementsByTagName('head')[0].appendChild(link);
  };
  return (
    <HelmetProvider>
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        <Helmet>
          <link rel="icon" href="/custom-favicon.ico" />
          {/* <meta name="google-site-verification" content="google45ca734517436249.html" /> */}
          <meta name="google-site-verification" content="U2AfPx3VHAgZ5piqeGs52mkP44vEPDAmwd8bt0R7aHY" />
          <title>{`${profileDetails.fullName || 'Your Website'} - Frontend Developer | Portfolio`}</title>
          <meta name="description" content={`Portfolio website of ${profileDetails.fullName || 'a passionate web developer'} showcasing skills, projects, education, and experience in frontend development and UI design.`} />
          <meta name="author" content="Srinivas Muchu" />
          <meta name="robots" content="index, follow" />

          {/* Open Graph meta tags */}
          <meta property="og:title" content={`${profileDetails.fullName || 'Your Website'} - My Portfolio`} />
          <meta property="og:description" content={`Check out the portfolio of ${profileDetails.fullName}.`} />
          <meta property="og:image" content={profileDetails.photo} />
          {/* <meta property="og:url" content="https://srinivas-portfolio.vercel.app/" /> */}
          <meta property="og:url" content="https://www.srinivasmuchu.site/" />
          <meta name="og:site_name" content="srinivas-portfolio" />
          <meta property="og:type" content="website" />

          {/* Twitter Card meta tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={`${profileDetails.fullName || 'Your Website'} - My Portfolio`} />
          <meta name="twitter:description" content={`Check out the portfolio of ${profileDetails.fullName}.`} />
          <meta name="twitter:image" content={profileDetails.photo} />
          <meta name="twitter:site" content="@yourtwitterhandle" />

          {/* Mobile-specific meta tags */}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <meta name="apple-mobile-web-app-title" content={`${profileDetails.fullName || 'Your Website'}`} />
          <link rel="apple-touch-icon" href={profileDetails.photo} />

          {/* Favicon */}
          <link rel="icon" href={profileDetails.photo} />

          {/* Manifest file for Progressive Web App (PWA) */}
          <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
          {/* Microsoft Clarity Tracking Script */}
          <script type="text/javascript">
            {`
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "rytiy1oxan");
            `}
          </script>
        </Helmet>
        <main>
        {loading ? <Loading/> :    <Router>
          {/* <ToggleDarkMode/> */}
          <Routes>
            <Route path='/' element={<PortifolioSecond profileDetails={profileDetails} />} />
            <Route path='/intro' element={<Intro profileDetails={profileDetails} />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/education' element={<Education profileDetails={profileDetails} />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/loading' element={<Loading />} />
            <Route path='/contact' element={<Contact profileDetails={profileDetails} />} />
           
            <Route path='/get-in-touch' element={<GetInTouch profileDetails={profileDetails} />} />
            <Route
              path='/forms'
              element={
                isAuthenticated ? (
                  <>
                    <ProfileForm />
                    <ProjectsForm />
                    <SkillsForm />
                    <WorkStatus />
                  </>
                ) : (
                  <div>
                    <p>Please enter the password to access the forms:</p>
                    <input
                      type="password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                    <button onClick={handleLogin}>Login</button>
                  </div>
                )
              }
            />
          </Routes>
        </Router>}
     
        </main>
      </div>
    </HelmetProvider>
  );
}

export default App;
