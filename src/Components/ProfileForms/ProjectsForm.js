import React, { useState } from 'react';
import Select from 'react-select'
import './ProfileForms.css'
import axios from 'axios';
import { BASE_URL } from '../../Constant';

function ProjectsForm() {
    // Separate states for each input field
    const [projectName, setProjectName] = useState("");
  const [projectPhoto, setProjectPhoto] = useState("");
  const [projectVideo, setProjectVideo] = useState("");
  const [projectShortDescription, setProjectShortDescription] = useState("");
  const [projectDescription, setProjectDescription] = useState([]);
  const [projectStartDate, setProjectStartDate] = useState("");
  const [projectEndDate, setProjectEndDate] = useState("");
  const [SelectedPresent, setSelectedPresent] = useState(null);
  const [present, setPresent] = useState("");
  const [projectTechStack, setProjectTechStack] = useState("");
  const [projectDemoLink, setProjectDemoLink] = useState("");
  const [projectRepoLink, setProjectRepoLink] = useState("");

  const options = [
    { value: true, label: "true" },
    { value: false, label: "false" },
  ];
  const handleChange = (SelectedPresent) => {
    setSelectedPresent(SelectedPresent);
    setPresent(SelectedPresent.value);
  };
  const handleInputChange = (event) => {
    // Split the input text into an array (assuming designations are separated by commas)
    const inputText = event.target.value;
    const newDesignations = inputText
      .split(",")
      .map((designation) => designation.trim());
    setProjectDescription(newDesignations);
  };

  // Event handler to log the form data when the button is clicked
  

  const handleProjectDetails = async () => {
    try {
      const createProjects = await axios.post(
        BASE_URL + "/projects/create-project-details",
        {
          projectName,
          projectDescription,
          projectVideo,
          projectPhoto,
          projectShortDescription,
          startDate : projectStartDate,
          endDate : projectEndDate,
          techStack : projectTechStack,
          demoLink : projectDemoLink,
          repoLink : projectRepoLink,
          present,
        }
      );
      
      console.log(createProjects.data.data)
    } catch (error) {
      console.log(error);
    }
  };

    return (
        <div className='profile-forms'>
            <div className='profile-title'>Projects</div>
            <br />
            <div className='profile-inputs'>
                <div className='profile-span-input'>
                    <span>Project Name</span>
                    <input type='text' value={projectName} onChange={(e) => setProjectName(e.target.value)} />
                </div>
                <div className='profile-span-input'>
                    <span>Project photo</span>
                    <input type='text' value={projectPhoto} onChange={(e) => setProjectPhoto(e.target.value)} />
                </div>
                <div className='profile-span-input'>
                    <span>Project video</span>
                    <input type='text' value={projectVideo} onChange={(e) => setProjectVideo(e.target.value)} />
                </div>
                <div className='profile-span-input'>
                    <span>Project short Description</span>
                    <textarea value={projectShortDescription} onChange={(e) => setProjectShortDescription(e.target.value)} />
                </div>
                <div className='profile-span-input'>
                    <span>Project Description</span>
                    <input type='text' value={projectDescription.join(', ')} onInput={handleInputChange} />
                </div>
                <div className='profile-span-input'>
                    <span>Project start date</span>
                    <input type='date' value={projectStartDate} onChange={(e) => setProjectStartDate(e.target.value)} />
                </div>
                <div className='profile-span-input'>
                    <span>Project end date</span>
                    <input type='date' value={projectEndDate} onChange={(e) => setProjectEndDate(e.target.value)} />
                </div>
                <div className='profile-span-input'>
                    <span>Present</span>
                    <Select
                    className='react-select'
                        value={SelectedPresent}
                        onChange={handleChange}
                        options={options} />
                </div>
                <div className='profile-span-input'>
                    <span>Project tech stack</span>
                    <input type='text' value={projectTechStack} onChange={(e) => setProjectTechStack(e.target.value)} />
                </div>
                <div className='profile-span-input'>
                    <span>Project demo link</span>
                    <input type='text' value={projectDemoLink} onChange={(e) => setProjectDemoLink(e.target.value)} />
                </div>
                <div className='profile-span-input'>
                    <span>Project repo link</span>
                    <input type='text' value={projectRepoLink} onChange={(e) => setProjectRepoLink(e.target.value)} />
                </div>
                <button className='profile-buttons' onClick={handleProjectDetails}>
                    submit project details
                </button>
            </div>
        </div>
    );
}

export default ProjectsForm;
