import React, { useState,useEffect } from 'react';
import './ProfileForms.css'
import axios from 'axios';
import { BASE_URL } from '../../Constant';

function ProfileForm() {
    const [photo, setPhoto] = useState("");
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [aboutMe, setAboutMe] = useState("");
    const [linkedIn, setLinkedIn] = useState("");
    const [github, setGithub] = useState("");
    const [designations, setDesignations] = useState([]);
  
  
    const handleProfileDetails = async () => {
      try {
        const createProfileDetails = await axios.post(
          BASE_URL + "/user/person-details",
          {
            photo,
            fullName,
            email,
            phoneNumber,
            designations,
            aboutMe,
            linkedin : linkedIn,
            github,
          }
        );
        console.log(createProfileDetails.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    // Event handler for input change
    const handleInputChange = (event) => {
      // Split the input text into an array (assuming designations are separated by commas)
      const inputText = event.target.value;
      const newDesignations = inputText
        .split(",")
        .map((designation) => designation.trim());
      setDesignations(newDesignations);
    };
  return (
    <div className='profile-forms'>
      <div className='profile-title'>Profile details</div><br/>
      <div className='profile-inputs'>
        <div className='profile-span-input'>
          <span>Profile photo</span>
          <input
            type='text'
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
        </div>
        <div  className='profile-span-input'>
          <span>Full name</span>
          <input
            type='text'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className='profile-span-input'>
          <span>Phone Number</span>
          <input
            type='tel'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className='profile-span-input'>
          <span>Email</span>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='profile-span-input'>
          <span>Designations</span>
          <input type="text" value={designations.join(', ')} onInput={handleInputChange} />
        </div>
        <div className='profile-span-input'>
          <span>About me</span>
          <input
            type='text'
            value={aboutMe}
            onChange={(e) => setAboutMe(e.target.value)}
          />
        </div>
        <div className='profile-span-input'>
          <span>LinkedIn</span>
          <input
            type='text'
            value={linkedIn}
            onChange={(e) => setLinkedIn(e.target.value)}
          />
        </div>
        <div className='profile-span-input'>
          <span>Github</span>
          <input
            type='text'
            value={github}
            onChange={(e) => setGithub(e.target.value)}
          />
        </div>
        <button onClick={handleProfileDetails} className='profile-buttons'>Submit profile details</button>
      </div>
    </div>
  );
}

export default ProfileForm;
