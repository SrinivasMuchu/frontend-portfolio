import React from 'react';
import { ASSETS_URL } from '../../Constant';
import { useNavigate } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import './Contact.css'
// import ToggleDarkMode from '../ToggleDarkMode/ToggleDarkMode';
// `${ASSETS_URL}homeLogo.png`

function Contact({ profileDetails }) {
  const controls = useAnimation();

  const bounceAnimation = {
    y: [0, -30, 0], // Bouncing animation along the y-axis
    transition: {
      duration: 0.5, // Duration of the entire animation
      repeat: 1, // Repeat the animation indefinitely
      repeatType: 'reverse', // Reverse the animation on each repeat
    },
  };
  const encodedMessage = encodeURIComponent("Hi, I'm messaging you by seeing your portfolio");
const whatsappMessage = `https://wa.me/+91${profileDetails.phoneNumber}?text=${encodedMessage}`;

  // Start the animation when the component mounts
  React.useEffect(() => {
    controls.start(bounceAnimation);
  }, [controls]);
  const nav = useNavigate()
  const handleNavigate = () => {
    nav('/')
  }
  const cardData = [
    {
      name: 'Email',
      logo: 'https://portfolio-ks.s3.ap-south-1.amazonaws.com/mail-logo-img.gif',
      color: '#d44638',
      link: profileDetails.email,
      userName: profileDetails.email,
      view: 'mail'
    },
    {
      name: 'Linkedin',
      logo: 'https://portfolio-ks.s3.ap-south-1.amazonaws.com/linkedin-img-logo.gif',
      color: '#3c94e4',
      link: profileDetails.linkedin,
      userName: profileDetails.linkedinName,
      view: 'view'
    },
    {
      name: 'Github',
      logo: 'https://portfolio-ks.s3.ap-south-1.amazonaws.com/github-cat.gif',
      color: '#999999',
      link: profileDetails.github,
      userName: profileDetails.githubName,
      view: 'view'
    },
    {
      name: 'PhoneNumber',
      logo: 'https://portfolio-ks.s3.ap-south-1.amazonaws.com/phone-texting.gif',
      color: '#73c3f3',
      link: profileDetails.phoneNumber,
      userName: profileDetails.phoneNumber,
      view: 'call'
    },
    {
      name: 'Whatsapp',
      logo: 'https://portfolio-ks.s3.ap-south-1.amazonaws.com/whatsapp-chat.gif',
      color: '#25d366',
      userName: 'srinivasmuchu',
      link: whatsappMessage,
      view: 'chat'
    },
  ];
  const handleNavigateTo = (item) => {
    if (item.view === 'mail') {
      // If it's an email, open the default email client
      window.location.href = item.link;
    }
    // Check if the link is a phone number
    else if (item.view === 'call') {
      // If it's a phone number, initiate a phone call
      window.location.href = item.link;
    }
    // Check if the link is an external link
    else if (item.link.startsWith('http') || item.link.startsWith('https')) {
      // If it's an external link, open it in a new tab
      window.open(item.link, '_blank');
    }
  }
  return (
    <div className='contact-page'>
      <div className='nav-to-home' >
        <div className='nav-home-div' onClick={handleNavigate}>
          <img src={`${ASSETS_URL}leftArrow.png`} alt='' />
          <img src={`${ASSETS_URL}homeLogo.png`} alt='' />
          <span>home</span>
         
        </div>
     

      </div>
      <motion.div className='contact-me' initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", duration: 5 }}>
        <span >Contact Me</span>
      </motion.div>
      <motion.div className='contact-desc' initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", duration: 5 }}>
        <span>Below are my contact details you can reach out to me</span>
      </motion.div>
      <div className='flex-links'>
        {cardData.map((item, index) => (
          <motion.div key={index} animate={controls} >

           
              {
                item.view === 'mail' ? (
                  <a href={`mailto:${item.link}`} target='_blank' className='link-style'>
                    <div className='logo-circle' style={{ background: item.color }} title={item.userName}>
                      <img src={item.logo} alt={item.name} className='logo' />
                      <span>{item.name}</span>
                      <span >{item.view}</span>
                      <img src={`${ASSETS_URL}Link-logo.png`} alt='' className='link-logo' />
                      </div>
                  </a>
                ) : item.view === 'call' ? (
                  <a href={`tel:${item.link}`} target='_blank' className='link-style'>
                    <div className='logo-circle' style={{ background: item.color }} title={item.userName}>
                      <img src={item.logo} alt={item.name} className='logo' />
                      <span>{item.name}</span>
                      <span >{item.view}</span>
                      <img src={`${ASSETS_URL}Link-logo.png`} alt='' className='link-logo' />
                      </div>
                  </a>
                ) : (
                  <a href={item.link} target='_blank' className='link-style'>
                   <div className='logo-circle' style={{ background: item.color }} title={item.userName}>
                      <img src={item.logo} alt={item.name} className='logo' />
                      <span>{item.name}</span>
                      <span >{item.view}</span>
                      <img src={`${ASSETS_URL}Link-logo.png`} alt='' className='link-logo' />
                      </div>
                  </a>
                )
              }


        
          </motion.div>
        ))}
      </div>
      <div className='get-touch'>
        <a href='/get-in-touch' className='get-touch-link'>
          <span>Get in touch with me</span>
          <img src={`${ASSETS_URL}rightArrow.png`} alt='' />
        </a>

      </div>
    </div>
  );
}

export default Contact;
