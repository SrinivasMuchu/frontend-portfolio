import React, { useState, useEffect } from "react";
import Typed from "react-typed";
import axios from "axios";
import { ASSETS_URL, BASE_URL } from '../../Constant';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';


function GetInTouch({ profileDetails }) {
  console.log(profileDetails.designations)
  const [clientName, setClientName] = useState('')
  const [clientEmail, setClientEmail] = useState('')
  const [clientPhoneNumber, setClientPhoneNumber] = useState('')
  const [clientMessage, setClientMessage] = useState('')
  const [showMessage, setShowMessage] = useState(false);


  const toastStyle = {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    pauseOnHover: true,
    draggable: true,
  };

  const handleProjectDetails = async () => {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Phone number validation regex pattern (basic example, adjust as needed)
    const phoneNumberPattern = /^\d{10}$/;

    // Basic form validation
    if (!clientName) {
      // If any field is empty, show an error toast
      toast.error("Please enter a valid name", toastStyle);
      return;
    }

    // Email validation
    if (!emailPattern.test(clientEmail) || !clientEmail) {
      // If email is not valid, show an error toast
      toast.error("Please enter a valid email address", toastStyle);
      return;
    }

    // Phone number validation
    if (!phoneNumberPattern.test(clientPhoneNumber)) {
      // If phone number is not valid, show an error toast
      toast.error("Please enter a valid 10-digit phone number", toastStyle);
      return;
    }
    if (!clientMessage) {
      toast.error("Please fill message", toastStyle);
    }
    try {
      const createProjects = await axios.post(
        BASE_URL + "/contact/create-contact-details",
        {
          clientName,
          clientEmail,
          clientPhoneNumber,
          clientMessage
        }
      );
      toast.success("Thanks for reviewing my portfolio , I got your response", toastStyle);
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 5000);
      setClientEmail('')
      setClientMessage('')
      setClientName('')
      setClientPhoneNumber('')

      console.log(createProjects.data.data)
    } catch (error) {
      console.log(error);
    }
  };

  // const [profileDetails, setProfileDetails] = useState([]);
  // const [profilePhoto, setProfilePhoto] = useState('');
  // const [fullName, setFullName] = useState('');
  // useEffect(() => {
  //   getProfileDetails();
  // }, []);

  // const getProfileDetails = async () => {
  //   try {
  //     const profileDetails = await axios.get(
  //       BASE_URL + "/user/get-person-details"
  //     );

  //     setProfileDetails(profileDetails.data.data.user_details.designations);
  //     setProfilePhoto(profileDetails.data.data.user_details.photo)
  //     setFullName(profileDetails.data.data.user_details.fullName)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const arrayOfList = [
    'Frontend Developer',
    'Backend Developer',
    'FullStack Web Developer',
    'Reactjs Developer',
    'MERN Stack Developer'

  ]
  const nav = useNavigate();

  const handleBack = () => {
    nav(-1);
  };


  return (
    <div className="get-in-touch">
      <div className="contact-profile">
        <div className="back-icon-btn" onClick={handleBack}>
          <img
            src={`${ASSETS_URL}leftArrow.png`}
            alt=""
            style={{ width: "25px", height: "25px" }}
          />
          <span>Back</span>
        </div>
        <img src={profileDetails.photo} alt="" className="profile-logo-contact" />
        <br />
        <span className="userName">{profileDetails.fullName}</span>

        <span className="input-typing">
          <Typed
            strings={arrayOfList}
            typeSpeed={140}
            backSpeed={50}
            loop
          />
        </span>
      </div>
      <div className="form-page">
        <div className="heading-get-touch">
          <span>Get In Touch</span>
        </div>
        <div className="form">
          <div className="form-box">
            <div className="individual-input">
              <label>Name</label>
              <input type="text" placeholder="Enter your Name" value={clientName} onChange={(e) => setClientName(e.target.value)} />
            </div>
            <div className="individual-input">
              <label>Email:</label>
              <input type="email" placeholder="Enter your Email" value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} />
            </div>
            <div className="individual-input">
              <label>Phone Number:</label>
              <input type="tel" placeholder="Enter your phone number" value={clientPhoneNumber} onChange={(e) => setClientPhoneNumber(e.target.value)} />
            </div>
            <div className="individual-input">
              <label>Message:</label>
              <textarea placeholder="Enter your Message...." value={clientMessage} onChange={(e) => setClientMessage(e.target.value)} />
            </div>
            {showMessage && (
              <div className="individual-input-1">
                <span>Mail sent successfully! Check your inbox.</span>
              </div>
            )}
            <div className="individual-btn">
              <button onClick={handleProjectDetails}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;