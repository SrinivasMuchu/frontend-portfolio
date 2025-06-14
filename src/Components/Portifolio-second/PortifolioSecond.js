import React from 'react';
import { ASSETS_URL } from '../../Constant';
import './PortifolioSecond.css';
import { useNavigate } from 'react-router-dom';
import Typed from 'react-typed';

function PortifolioSecond({ profileDetails }) {
  const navigate = useNavigate();

  const cardData = [
    {
      emoji: '💡',
      title: 'Introduction',
      navigateTo: '/intro',
    },
    {
      emoji: '🛠️',
      title: 'Skills',
      navigateTo: '/skills',
    },
    {
      emoji: '🎓',
      title: 'Education',
      navigateTo: '/education',
    },
    {
      emoji: '💻',
      title: 'Projects',
      navigateTo: '/projects',
    },
    {
      emoji: '📈',
      title: 'Experience',
      navigateTo: '/experience',
    },
    {
      emoji: '📞',
      title: 'Contact',
      navigateTo: '/contact',
    },
  ];

  const arrayOfList = [
    'Frontend Developer',
    'Backend Developer',
    'FullStack Web Developer',
    'Reactjs Developer',
    'MERN Stack Developer'
  ];

  return (
    <div className='main-div'>
      <div className='profile-section'>
        <div className='profile-text'>
          <h1 className='profile-name'>
            👋 Hey there! I'm {profileDetails.fullName}
          </h1>
          <h2 className='profile-role'>Frontend Developer | UI Enthusiast</h2>
          <span className='typing-home'>
            <Typed
              strings={arrayOfList}
              typeSpeed={140}
              backSpeed={50}
              loop
            />
          </span>
          <p className='profile-desc'>🚀 I build beautiful and performant web interfaces.</p>
          <div className='profile-buttons1'>
            <a href={profileDetails.resume} className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Download Resume</a>
            <button className='btn btn-outline' onClick={() => navigate('/contact')}>Contact Me</button>
          </div>
        </div>
        <div className='profile-image-container'>
          <img src={profileDetails.photo} alt={profileDetails.fullName} className='profile-image' />
        </div>
      </div>
      <div className='cards-grid'>
        {cardData.map((item, idx) => (
          <section key={idx} className='static-card' onClick={() => navigate(item.navigateTo)}>
            <span className='card-emoji'>{item.emoji}</span>
            <h3 className='card-title'>{item.title}</h3>
          </section>
        ))}
      </div>
    </div>
  );
}

export default PortifolioSecond;
