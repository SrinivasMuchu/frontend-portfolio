import React, { useState } from 'react';
import FlipCard from 'reactjs-flip-card';
import { motion } from 'framer-motion'
import { ASSETS_URL } from '../../Constant';
import './PortifolioSecond.css';
import { useNavigate } from 'react-router-dom';
import Typed from 'react-typed';

function PortifolioSecond({profileDetails}) {
  console.log(profileDetails)
  const [isFlipped, setIsFlipped] = useState(false);

  const navigate = useNavigate()

  const arrayOfList = [
    'Frontend Developer',
    'Backend Developer',
    'FullStack Web Developer',
    'Reactjs Developer',
    'MERN Stack Developer'

  ]

  const cardData = [
    {
      front: 'Introduction',
      view: 'Introduction',
      frontColor: '#fff560',
      backColor: '#fff895',
      frontLogo: `${ASSETS_URL}intrologo.png`,
      backLogo: `${ASSETS_URL}taptoview.png`,
      navigateTo: '/intro'
    },
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
    // Add more cards as needed
  ];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  const handleNavigate = (item) => {
    navigate(item)
  }

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemFrame = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className='main-div'>
      <div className='profile-details'>
      <div className='stars'>
                <div className='star-1'>
                  <img src={`${ASSETS_URL}star-logo.svg`}/>
                </div>
                <div className='star-2'>
                <img src={`${ASSETS_URL}star-logo.svg`} className='star-2-img1'/>
                <img src={`${ASSETS_URL}star-logo.svg`} className='star-2-img2'/>
                </div>
                <div className='star-3'>
                <img src={`${ASSETS_URL}star-logo.svg`}/>
                </div>
              </div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", duration: 5 }}
          className='profile-details1'>
             
          <div className='photo-details'>
            <div className='only-details'>
              <span>Hi,  I'M</span>
              <span className='firstname'>{profileDetails.fullName} </span>
              <span className='typing-home'>
                 <Typed
                strings={arrayOfList}
                typeSpeed={140}
                backSpeed={50}
                loop
              />
              </span>
            </div>
            <img src={profileDetails.photo} alt="logo" />
          </div>
          <div className='portifolio-desc'>
            <span>This is my Portfolio</span>
          </div>

        </motion.div>
      </div>


      <motion.div className='flipping-cards'
       variants={container}
       initial="hidden"
       animate="visible">
        {cardData.map((item, index) => (
          <motion.div key={index} variants={itemFrame} className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
            <div className="flip-card-inner">
              <div className="flip-card-front" style={{ background: item.frontColor }}>
                <img src={item.frontLogo} style={{ width: '50px', height: '50px' }} />
                <h2>{item.front}</h2>
              </div>

              <div className="flip-card-back" style={{ background: item.backColor }} onClick={() => handleNavigate(item.navigateTo)}>

                <img src={item.backLogo} style={{ width: '50px', height: '50px' }} />
                <h2>Click to view my {item.view}</h2>

              </div>


            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default PortifolioSecond;
