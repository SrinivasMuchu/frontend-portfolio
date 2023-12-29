import React, { useState } from 'react'
import './Intro.css'
import { ASSETS_URL } from '../../Constant'
import { motion } from 'framer-motion'
// import userLogo from '../../assets/`${ASSETS_URL}user-profile.png`;

// import download from '../../assets/`${ASSETS_URL}download-resume.png`'
import { useNavigate } from 'react-router-dom';
import BottomRoute from '../BottomRoute';
import { saveAs } from 'file-saver';

function Intro({ profileDetails }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate()
  const handleNavigate = (item) => {
    navigate(item)
  }
  const cardData = [
    {
      front: 'Skills',
      view: 'Skills',
      frontColor: '#ffac7f ',
      backColor: '#ffcfa3',
      frontLogo: `${ASSETS_URL}skillslogo.png`,
      backLogo: `${ASSETS_URL}taptoview.png`,
      navigateTo: '/skills'
    },
    {
      front: 'Education',
      view: 'Education',
      frontColor: '#7ad7f0 ',
      backColor: '#b7e9f7',
      frontLogo: `${ASSETS_URL}educationlogo.png`,
      backLogo: `${ASSETS_URL}taptoview.png`,
      navigateTo: '/education'
    },
    {
      front: 'Projects',
      view: 'Projects',
      frontColor: '#ff3333',
      backColor: '#ff6666',
      frontLogo: `${ASSETS_URL}projectslogo.png`,
      backLogo: `${ASSETS_URL}taptoview.png`,
      navigateTo: '/projects'
    },
    {
      front: 'Experience',
      view: 'Experience',
      frontColor: '#af7fcd',
      backColor: '#c39fd9',
      frontLogo: `${ASSETS_URL}worklogo.png`,
      backLogo: `${ASSETS_URL}taptoview.png`,
      navigateTo: '/experience'
    },
    {
      front: 'Contact',
      view: 'Contact',
      frontColor: '#39e75f',
      backColor: '#83f28f',
      frontLogo: `${ASSETS_URL}contactlogo.png`,
      backLogo: `${ASSETS_URL}taptoview.png`,
      navigateTo: '/contact'
    },

  ];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };


  const downloadPdf = () => {
    navigate('https://portfolio-ks.s3.ap-south-1.amazonaws.com/SRINIVAS+Resume.pdf')
  };
  return (
    <>
      <div className='intro-page'>
        <motion.div className='intro-hello' initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", duration: 5 }}>
          <span>Hey! I'm {profileDetails.fullName}</span>
        </motion.div>
        <motion.div className='intro-matter' initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", duration: 5 }}>
          <span>{profileDetails.aboutMe}</span>
        </motion.div>
        <motion.div className='download-resume' initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 5 }}>
          <a href='https://portfolio-ks.s3.ap-south-1.amazonaws.com/SRINIVAS+Resume.pdf' target='_blank'>

            <button ><img src={`${ASSETS_URL}download-resume.png`} />Resume</button>
          </a>

        </motion.div>
        <motion.div className='intro-profile' initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 5 }}>
          <img src={profileDetails.photo} alt='' />
        </motion.div>

        <div>

        </div>
      </div>
      <BottomRoute data={cardData} />
    </>

  )
}

export default Intro