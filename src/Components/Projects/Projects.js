import React, { useState, useEffect } from "react";
import "./Projects.css";
import { motion } from "framer-motion";
import { ASSETS_URL, BASE_URL } from "../../Constant";
import ProjectPopUp from "./ProjectPopUp";
import BottomRoute from "../BottomRoute";
import axios from "axios";

function Projects() {
    const [projectPopUp, setProjectPopUp] = useState(false);
    const [selectedProjectName, setSelectedProjectName] = useState(null);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        getProjectDetails();
    }, []);



    const getProjectDetails = async () => {
        try {
            const projectDetails = await axios.get(
                BASE_URL + "/projects/get-project-details"
            );
            setProjects(projectDetails.data.data.all_project_details);
        } catch (error) {
            console.log(error);
        }
    };
    const handlePopUp = (item) => {
        setProjectPopUp(true);
        setSelectedProjectName(item);
    };
    const handleClose = () => {
        setProjectPopUp(false);

    };

    const projectItem = [
        {
            name: "project1",
            photo: `${ASSETS_URL}crypto-website.png`,
            repoLink: "repoLink",
            liveLink: "live link",
            video: "https://youtu.be/U9sDK8zTJ8Y?si=_oFryI83eD2FLFCq",
            skills: ["html", "css"],
            shortDesc: "gsdhsdgfhsdvbsdcvbvc",
            longDesc: ["dsgfdsfsvbnd", "hjdhcdbcncbc"]
        },
        {
            name: "project2",
            photo: "https://marathon-web-assets.s3.ap-south-1.amazonaws.com/marathon-m-logo.jpg",
            repoLink: "repoLink",
            liveLink: "live link",
            video: "https://youtu.be/U9sDK8zTJ8Y?si=_oFryI83eD2FLFCq",
            skills: ["html", "css"],
            shortDesc: "gsdhsdgfhsdvbsdcvbvcgsdhsdgfhsdvbsdcvbvcgsdhsdgfhsdvbsdcvbvcgsdhsdgfhsdvbsdcvbvcgsdhsdgfhsdvbsdcvbvcgsdhsdgfhsdvbsdcvbvc",
            longDesc: ["dsgfdsfsvbnd", "hjdhcdbcncbc"]
        },
        {
            name: "project3",
            photo: "https://marathon-web-assets.s3.ap-south-1.amazonaws.com/marathon-m-logo.jpg",
            repoLink: "repoLink",
            liveLink: "live link",
            video: "https://youtu.be/U9sDK8zTJ8Y?si=_oFryI83eD2FLFCq",
            skills: ["html", "css"],
            shortDesc: "gsdhsdgfhsdvbsdcvbvc",
            longDesc: ["dsgfdsfsvbnd", "hjdhcdbcncbc"]
        },

    ];

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
            front: 'experience',
            view: 'experience',
            frontColor: '#ff3333',
            backColor: '#ff6666',
            frontLogo: `${ASSETS_URL}worklogo.png`,
            backLogo: `${ASSETS_URL}taptoview.png`,
            navigateTo: '/experience'
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
    return (
        <>
            <div className="project-page">
                <div className="project-div">
                    {projects.map((item, index) => (
                        <motion.div
                            key={index}
                            className="project-card"
                            initial={{ opacity: 0, y: -25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring", duration: 5 }}
                        >
                            <img src={item.projectPhoto} alt="" />
                            <span className="project-heading">{item.projectName}</span>
                            {item.projectShortDescription.length > 75 ? (
                                <span className="project-desc">{`${item.projectShortDescription.substring(
                                    0,
                                    75
                                )}...`}</span>
                            ) : (
                                <span className="project-desc">{item.projectShortDescription}</span>
                            )}
                            <span className="see-more" onClick={() => handlePopUp(item)}>
                                see more
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
            {projectPopUp && (
                <ProjectPopUp projectName={selectedProjectName} onclose={handleClose} />
            )}
            <BottomRoute data={cardData} />
        </>
    );
}

export default Projects;
