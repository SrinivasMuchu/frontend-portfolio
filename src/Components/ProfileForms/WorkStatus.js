

import React,{useState} from 'react'
import Select from 'react-select'
import './ProfileForms.css'
import axios from 'axios';
import { BASE_URL } from '../../Constant';


function WorkStatus() {
    const [companyName, setCompanyName] = useState("");
    const [role, setRole] = useState("");
    const [roleDescription, setRoleDescription] = useState("");
    const [companyDescription, setCompanyDescription] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [present, setIsPresent] = useState('');
    const [selectedPresent, setSelectedIsPresent] = useState(null);
    const [location, setCompanyLocation] = useState("");
  
    const options = [
      { value: true, label: 'true' },
      { value: false, label: 'false' },
  
  ];
  
    const handleChange = (selectedPresent) => {
        setSelectedIsPresent(selectedPresent);
        setIsPresent(selectedPresent.value)
    };
  
    const handleCompanyDetails = async () => {
      try {
        const response = await axios.post(
          BASE_URL + "/experiance/create-experiance",
          {
            companyName,
            companyDescription,
            startDate,
            endDate,
            present,
            role,
            location,
            roleDescription,
          }
        );
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
  return (
    <div className='profile-forms'>
        <div className='profile-title'>Work status</div><br/>
        <div className='profile-inputs'>
            <div className='profile-span-input'>
                <span>Company Name</span>
                <input type='text' value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
            </div>
            <div className='profile-span-input'>
                <span>role</span>
                <input type='text' value={role} onChange={(e) => setRole(e.target.value)} />
            </div>
            <div className='profile-span-input'>
                <span>Role Description</span>
                <textarea onChange={(e)=>setRoleDescription(e.target.value)} value={roleDescription}/>
            </div>
            <div className='profile-span-input'>
                <span>Company Description</span>
                <textarea onChange={(e)=>setCompanyDescription(e.target.value)} value={companyDescription}/>
            </div>
            <div className='profile-span-input'>
                <span>Company start date</span>
                <input type='date' onChange={(e) => setStartDate(e.target.value)} value={startDate}/>
            </div>
            <div className='profile-span-input'>
                <span>Company end date</span>
                <input type='date'onChange={(e) => setEndDate(e.target.value)} value={endDate}/>
            </div>
            <div className='profile-span-input'>
            <span>Present</span>
            <Select
                    className='react-select'
                        value={selectedPresent}
                        onChange={handleChange}
                        options={options} />
            </div>
            <div className='profile-span-input'>
                <span>Company location</span>
                <input type='text' value={location} onChange={(e) => setCompanyLocation(e.target.value)} />
            </div>
            <button className='profile-buttons' onClick={handleCompanyDetails}>submit your experience</button>
        </div>
    </div>
  )
}

export default WorkStatus