import React, { useState } from 'react';
import './ProfileForms.css'
import Select from 'react-select'
import { BASE_URL } from '../../Constant';
import axios from 'axios';

function SkillsForm() {
  const [skillPhoto, setSkillsPhoto] = useState("");
  const [skillName, setSkillName] = useState("");
  const [skillDescription, setSkillDescription] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [selectedSkillType, setSelectedSkillType] = useState(null);
  const [skillType, setSkillType] = useState('');

  const options = [
    { value: "frontend", label: "frontend" },
    { value: "backend", label: "backend" },
    { value: "hoisting", label: "hoisting" },
  ];

  const handleChange = (selectedSkillType) => {
    setSelectedSkillType(selectedSkillType);
    setSkillType(selectedSkillType.value)
  };



  const handleSkillsDetails = async () => {
    try {
      const skills = await axios.post(BASE_URL + "/skills/skills-details", {
        skillPhoto,
        skillName,
        skillDescription,
        projectDescription,
        skillType,
      });
      console.log(skills.data.data);
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <div className='profile-forms'>
      
      <div className='profile-title'>Skills</div><br/>
      <div className='profile-inputs'>
        <div  className='profile-span-input'>
          <span>Skills Photo</span>
          <input
            type='text'
            value={skillPhoto}
            onChange={(e) => setSkillsPhoto(e.target.value)}
          />
        </div>
        <div className='profile-span-input'>
          <span>Skill Name</span>
          <input
            type='text'
            value={skillName}
            onChange={(e) => setSkillName(e.target.value)}
          />
        </div>
        <div className='profile-span-input'>
          <span>Skill type</span>
          <Select
            className='react-select'
            value={selectedSkillType}
            onChange={handleChange}
            options={options}
          />
        </div>
        <div className='profile-span-input'>
          <span>skill description</span>
          <textarea
           
            value={skillDescription}
            onChange={(e) => setSkillDescription(e.target.value)}
          />
        </div>
        <div className='profile-span-input'>
          <span>project description</span>
          <textarea
            type='text'
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
          />
        </div>
        <button onClick={handleSkillsDetails} className='profile-buttons'>Submit Skills</button>
      </div>
    </div>
  );
}

export default SkillsForm;
