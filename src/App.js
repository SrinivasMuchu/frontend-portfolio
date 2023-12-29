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

function App() {
  const [profileDetails, setProfileDetails] = useState({});
  useEffect(() => {
    getProfileDetails();
  }, []);

  const getProfileDetails = async () => {
    try {
      const profileDetails = await axios.get(
        BASE_URL + "/user/get-person-details"
      );
      setProfileDetails(profileDetails.data.data.user_details);
      updateFavicon(profileDetails.data.data.user_details.photo);

      // document.title = profileDetails.data.data.user_details.fullName;

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
      <div className="App">
      <Helmet>
          <link rel="icon" href="/custom-favicon.ico" />
          <title>{`${profileDetails.fullName || 'Your Website'} - My Portfolio`}</title>
          <meta name="keywords" content="portfolio, react, web development,srinivas muchu,srinivas muchu portifolio" />
          <meta name="author" content="Srinivas Muchu" />
          <meta name="robots" content="index, follow" />

          {/* Open Graph meta tags */}
          <meta property="og:title" content={`${profileDetails.fullName || 'Your Website'} - My Portfolio`} />
          <meta property="og:description" content={`Check out the portfolio of ${profileDetails.fullName}.`} />
          <meta property="og:image" content={profileDetails.photo} />
          <meta property="og:url" content="https://www.yourportfolio.com" />
          <meta name="og:site_name" content="Your Portfolio Site" />
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
          <link rel="icon" href={profileDetails.photo } />

          {/* Manifest file for Progressive Web App (PWA) */}
          <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        </Helmet>
        <Router>
          <Routes>
            <Route path='/' element={<PortifolioSecond profileDetails={profileDetails} />} />
            <Route path='/intro' element={<Intro profileDetails={profileDetails} />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/education' element={<Education profileDetails={profileDetails} />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/contact' element={<Contact profileDetails={profileDetails} />} />
            <Route path='/get-in-touch' element={<GetInTouch profileDetails={profileDetails} />} />
            <Route path='/forms'
              element={<>
                {/* <Profile />
              <Skills />
              <Projects />
              <Education />
              <WorkStatus /> */}
                <ProfileForm />
                {/* <EducationForm/> */}
                <ProjectsForm />
                <SkillsForm />
                <WorkStatus />
              </>} />
          </Routes>
        </Router>
        {/* <PortifolioFirst/> */}
        {/* <PortifolioSecond /> */}
        {/* <Profile/>
    <Skills/>
    <Projects/>
    <Education/>
    <WorkStatus/> */}
      </div>
    </HelmetProvider>
  );
}

export default App;
