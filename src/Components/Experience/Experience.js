import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../../Constant';
import axios from 'axios';
import './Experience.css';
import { ASSETS_URL } from '../../Constant'
import BottomRoute from '../BottomRoute';

function Experience() {

  const [experiance, setExperiance] = useState([]);


  useEffect(() => {
    getExperienceDetails()
  }, [])

  const getExperienceDetails = async () => {
    try {
      const allExperianceDetails = await axios.get(BASE_URL + "/experiance/get-experiance");
      setExperiance(allExperianceDetails.data.data.all_experiance);

    } catch (error) {
      console.log(error)
    }
  }
  console.log(experiance);

  const cardData = [
    {
      front: 'intro',
      view: 'intro',
      frontColor: '#ffac7f ',
      backColor: '#ffcfa3',
      frontLogo: `${ASSETS_URL}intrologo.png`,
      backLogo: `${ASSETS_URL}taptoview.png`,
      navigateTo: '/intro'
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
      front: 'projects',
      view: 'projects',
      frontColor: '#ff3333',
      backColor: '#ff6666',
      frontLogo: `${ASSETS_URL}projectslogo.png`,
      backLogo: `${ASSETS_URL}taptoview.png`,
      navigateTo: '/projects'
    },
    {
      front: 'skills',
      view: 'skills',
      frontColor: '#af7fcd',
      backColor: '#c39fd9',
      frontLogo: `${ASSETS_URL}skillslogo.png`,
      backLogo: `${ASSETS_URL}taptoview.png`,
      navigateTo: '/skills'
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
  const exprArray = [

    {
      companyName: "bLDBDV",
      companyDescription: "ifrhbvy8o",
      startDate: new Date("2023-12-06T00:00:00.000Z").toISOString().split('T')[0],
      endDate: new Date("2023-12-26T00:00:00.000Z").toISOString().split('T')[0],
      present: false,
      role: "fhbvhiesi",
      location: "neflgh",
      roleDescription: "fjebo8ye",
      companyPhoto: 'https://marathon-web-assets.s3.ap-south-1.amazonaws.com/marathon-m-logo.jpg',
      name: 'Marathon',
      description: 'sdhfsdjgfdhgfhd',
    },
    {
      companyName: "bLDBDV",
      companyDescription: "ifrhbvy8o",
      startDate: new Date("2023-12-06T00:00:00.000Z").toISOString().split('T')[0],
      endDate: new Date("2023-12-26T00:00:00.000Z").toISOString().split('T')[0],
      present: false,
      role: "fhbvhiesi",
      location: "neflgh",
      roleDescription: "fjebo8ye",
      companyPhoto: 'https://marathon-web-assets.s3.ap-south-1.amazonaws.com/marathon-m-logo.jpg',
      name: 'Marathon',
      description: 'sdhfsdjgfdhgfhd',
    },
    {
      companyName: "bLDBDV",
      companyDescription: "ifrhbvy8o",
      startDate: new Date("2023-12-06T00:00:00.000Z").toISOString().split('T')[0],
      endDate: new Date("2023-12-26T00:00:00.000Z").toISOString().split('T')[0],
      present: false,
      role: "fhbvhiesi",
      location: "neflgh",
      roleDescription: "fjebo8ye",
      companyPhoto: 'https://marathon-web-assets.s3.ap-south-1.amazonaws.com/marathon-m-logo.jpg',
      name: 'Marathon',
      description: 'sdhfsdjgfdhgfhd',
    },
    {
      companyName: "bLDBDV",
      companyDescription: "ifrhbvy8o",
      startDate: new Date("2023-12-06T00:00:00.000Z").toISOString().split('T')[0],
      endDate: new Date("2023-12-26T00:00:00.000Z").toISOString().split('T')[0],
      present: false,
      role: "fhbvhiesi",
      location: "neflgh",
      roleDescription: "fjebo8ye",
      companyPhoto: 'https://marathon-web-assets.s3.ap-south-1.amazonaws.com/marathon-m-logo.jpg',
      name: 'Marathon',
      description: 'sdhfsdjgfdhgfhd',
    },
    {
      companyName: "bLDBDV",
      companyDescription: "ifrhbvy8o",
      startDate: new Date("2023-12-06T00:00:00.000Z").toISOString().split('T')[0],
      endDate: new Date("2023-12-26T00:00:00.000Z").toISOString().split('T')[0],
      present: false,
      role: "fhbvhiesi",
      location: "neflgh",
      roleDescription: "fjebo8ye",
      companyPhoto: 'https://marathon-web-assets.s3.ap-south-1.amazonaws.com/marathon-m-logo.jpg',
      name: 'Marathon',
      description: 'sdhfsdjgfdhgfhd',
    },
    {
      companyName: "bLDBDV",
      companyDescription: "ifrhbvy8o",
      startDate: new Date("2023-12-06T00:00:00.000Z").toISOString().split('T')[0],
      endDate: new Date("2023-12-26T00:00:00.000Z").toISOString().split('T')[0],
      present: false,
      role: "fhbvhiesi",
      location: "neflgh",
      roleDescription: "fjebo8ye",
      companyPhoto: 'https://marathon-web-assets.s3.ap-south-1.amazonaws.com/marathon-m-logo.jpg',
      name: 'Marathon',
      description: 'sdhfsdjgfdhgfhd',
    },
  ];


  return (
    <>
      <div className='exp-page'>
        <div className='experience-list'>
          <div className='even-items'>
            {experiance.map((item, index) => (
              <div
                key={index}
                className='experience-item'
                style={{ visibility: index % 2 !== 0 ? 'hidden' : 'visible' }}
              >
                <div className='even-details-outline'>
                  <div className='even-details-tri'>
                    <div className='details-container'>
                      <div className='experience-name'>
                        <span >{item.companyName}</span>
                      </div>

                      <div className='experience-dates'>
                        <div>
                          <span className='exp-role-text'>Start :</span>
                          <span>{item.startDate}</span>
                        </div>
                        <div>
                          <span className='exp-role-text'>End :</span>
                          {item.present === true ? <span>present</span> : <span>{item.endDate}</span>}
                        </div>
                        {/* <span >start:{item.startDate}</span>
                        <span >{item.present === true ? 'present' : `end:${item.endDate}`}</span> */}
                      </div>
                      <div className='exp-role'>
                        <span className='exp-role-text'>Role :</span>
                        <span>{item.role}</span>
                      </div>
                      <div className='exp-role'>
                        <span className='exp-role-text'>Role desc:</span>
                        <span>{item.roleDescription}</span>
                      </div>
                      <div className='exp-role'>
                        <span className='exp-role-text'>company desc:</span>
                        <span>{item.companyDescription}</span>
                      </div>
                      <div className='exp-addr'>
                        <span className='exp-role-text'>location:</span>
                        <address>{item.location}</address>
                      </div>

                      {/* <span>role:{item.role}</span> */}
                      {/* <span className='experience-description'>role desc:{item.roleDescription}</span> */}
                      {/* <span className='experience-description'>company desc:{item.companyDescription}</span> */}
                      {/* <address className='company-location'>location:{item.location}</address> */}
                    </div>
                    <div className='triangle'></div>
                  </div>
                </div>
                <div className='photo-container-right'>
                  <img src={item.companyLogo} alt={item.companyName} />
                </div>
              </div>
            ))}
          </div>
          <div className='ver-div'>
            <div className='ver-line'></div>
          </div>

          <div className='odd-items'>
            {experiance.map((item, index) => (
              <div
                key={index}
                className='experience-item-even'
                style={{ visibility: index % 2 === 0 ? 'hidden' : 'visible' }}
              >

                <div className='photo-container-left'>
                  <img src={item.companyLogo} alt={item.companyName} />
                </div>
                <div className='details-outline'>
                  <div className='details-tri'>
                    <div className='triangle-right'></div>
                    <div className='odd-details-container'>
                      <span className='experience-name'>{item.companyName}</span>
                      <div className='experience-dates'>
                        <div>
                          <span className='exp-role-text'>Start :</span>
                          <span>{item.startDate}</span>
                        </div>
                        <div>
                          <span className='exp-role-text'>End :</span>
                          {item.present === true ? <span>present</span> : <span>{item.endDate}</span>}
                        </div>
                        {/* <span >start:{item.startDate}</span>
                        <span >{item.present === true ? 'present' : `end:${item.endDate}`}</span> */}
                      </div>
                      <div className='exp-role'>
                        <span className='exp-role-text'>Role :</span>
                        <span>{item.role}</span>
                      </div>
                      <div className='exp-role'>
                        <span className='exp-role-text'>Role desc:</span>
                        <span>{item.roleDescription}</span>
                      </div>
                      <div className='exp-role'>
                        <span className='exp-role-text'>company desc:</span>
                        <span>{item.companyDescription}</span>
                      </div>
                      <div className='exp-addr'>
                        <span className='exp-role-text'>location:</span>
                        <address>{item.location}</address>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='experience-mobile'>
          <div className='exp-item'>
            {experiance.map((item, index) => (
              <div
                key={index}
                className='experience-item-mob'
              // style={{ visibility: index % 2 !== 0 ? 'hidden' : 'visible' }}
              >
                <div className='exp-box'>
                  <img className='comp-logo-mob' src={item.companyLogo} alt={item.companyName} />
                  <div className='exp-hori-vert'></div>
                  <div>
                    <span className='exp-mob-title'>{item.companyName}</span>
                    <div className='experience-mob-dates'>
                      <span >start:{item.startDate}</span>
                      <span >{item.present === true ? 'present' : `end:${item.endDate}`}</span>
                    </div>
                    <div className='exp-role'>
                      <span className='exp-role-text'>Role :</span>
                      <span>{item.role}</span>
                    </div>
                    <div className='exp-role'>
                      <span className='exp-role-text'>Role desc:</span>
                      <span>{item.roleDescription}</span>
                    </div>
                    <div className='exp-role'>
                      <span className='exp-role-text'>company desc:</span>
                      <span>{item.companyDescription}</span>
                    </div>
                    <div className='exp-addr'>
                      <span className='exp-role-text'>location:</span>
                      <address>{item.location}</address>
                    </div>

                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <BottomRoute data={cardData} />
    </>

  );
}

export default Experience;
