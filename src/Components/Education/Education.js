import React, { useState } from "react";
import Tree from "react-d3-tree";
import { useCenteredTree } from "./Helper";
import data from "./Data.json";
import "./Education.css";
import { ASSETS_URL } from "../../Constant";
import { useNavigate } from "react-router-dom";
import BottomRoute from "../BottomRoute";

// `${ASSETS_URL}intrologo.png`
// `${ASSETS_URL}skillslogo.png`
// `${ASSETS_URL}`${ASSETS_URL}educationlogo.png`.png`
// `${ASSETS_URL}worklogo.png`
// `${ASSETS_URL}projectslogo.png`
// `${ASSETS_URL}contactlogo.png`
// `${ASSETS_URL}taptoview.png`

const containerStyles = {
  width: "100%",
  height: "70vh",
};

const renderRectSvgNode = ({ nodeDatum, toggleNode }) => (
  <g>
    {(nodeDatum.type!=='school')?
    <>
    <rect
      width="375"
      height="98"
      x="-200"
      y="-50"
      rx="8"
      ry="8"
      strokeWidth="1.75"
      onClick={toggleNode}
      fill="#fff"
      // fill= "#fef8fd"
      stroke="#b557a8"
      // #b557a8
      style={{
        boxShadow: "0px 2px 4px 0px rgba(72, 123, 253, 0.10)",
        border: "4.5px solid #b557a8",
        stroke: "#b557a8",
        // Add box shadow style
      }}
    />
    </>
    :
    <>
     <rect
      width="375"
      height="98"
      x="-200"
      y="-50"
      rx="8"
      ry="8"
      strokeWidth="1.75"
      onClick={toggleNode}
      fill="#f7edf6"
      // fill= "#fef8fd"
      stroke="#b557a8"
      // #b557a8
      style={{
        boxShadow: "0px 2px 4px 0px rgba(72, 123, 253, 0.10)",
        border: "4.5px solid #b557a8",
        stroke: "#b557a8",
        // Add box shadow style
      }}
    />
    </>}
   
    <text
      fill="black"
      onClick={toggleNode}
      strokeWidth="1"
      x="-105"
      y="-25"
      dy="1em"
      textAnchor="start"
    >
      {nodeDatum.name}
    </text>
   
    {nodeDatum.attributes?.department && (
      <text
        fill="black"
        strokeWidth="1"
        onClick={toggleNode}
        x="-105"
        y="-50"
        dy="5em"
        textAnchor="start"
      >
        {nodeDatum.attributes?.department}
      </text>
    )}

    {/* <circle
        cx="-75"
        cy="62.5"
        r="20"
        strokeWidth="1"
        fill="white"
        stroke="#4299E1"
      /> */}
    {/* <image
        href={nodeDatum.image}
        x="-140"
        y="-10"
        width="30"
        height="30"
        clipPath="url(#circleClip)"
      /> */}
    <foreignObject
      x="-190"
      y="-35"
      onClick={toggleNode}
      width="75"
      height="75"
      clipPath="url(#circleClip)"
    >
      <div className="image-container" onClick={toggleNode}>
        {nodeDatum.image!=='' ? 
        <>
         <img
          className="rounded-image"
          src={nodeDatum.image}
          alt={nodeDatum.name}
        />
        </>:''}
       
      </div>
    </foreignObject>
  </g>
);

function Education() {
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();
  const handleNavigate = (item) => {
    navigate(item);
  };
  const cardData = [
    {
      front: "Skills",
      view: "Skills",
      frontColor: "#ffac7f ",
      backColor: "#ffcfa3",
      frontLogo: `${ASSETS_URL}skillslogo.png`,
      backLogo: `${ASSETS_URL}taptoview.png`,
      navigateTo: "/skills",
    },
    {
      front: "intro",
      view: "intro",
      frontColor: "#7ad7f0 ",
      backColor: "#b7e9f7",
      frontLogo: `${ASSETS_URL}intrologo.png`,
      backLogo: `${ASSETS_URL}taptoview.png`,
      navigateTo: "/intro",
    },
    {
      front: "Projects",
      view: "Projects",
      frontColor: "#ff3333",
      backColor: "#ff6666",
      frontLogo: `${ASSETS_URL}projectslogo.png`,
      backLogo: `${ASSETS_URL}taptoview.png`,
      navigateTo: "/projects",
    },
    {
      front: "Experience",
      view: "Experience",
      frontColor: "#af7fcd",
      backColor: "#c39fd9",
      frontLogo: `${ASSETS_URL}worklogo.png`,
      backLogo: `${ASSETS_URL}taptoview.png`,
      navigateTo: "/experience",
    },
    {
      front: "Contact",
      view: "Contact",
      frontColor: "#39e75f",
      backColor: "#83f28f",
      frontLogo: `${ASSETS_URL}contactlogo.png`,
      backLogo: `${ASSETS_URL}taptoview.png`,
      navigateTo: "/contact",
    },
  ];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const [dimensions, translate, containerRef] = useCenteredTree();
  return (
    <>
      <div
        style={containerStyles}
        ref={containerRef}
        className="education-hierarchy"
      >
        <div className="text-container-info">
          <p>Short Info</p>
          <li>Toggle to view more about Education.</li>
          <li>Used react-d3, in-build infinite zoom-in-out</li>
        </div>
        <Tree
          data={data}
          // dimensions={dimensions}
          translate={translate}
          // containerRef={containerRef}
          // scaleExtent={{ min: -1000, max: 5 }}
          zoomable={true}
          renderCustomNodeElement={renderRectSvgNode}
          zoom={0.55}
          initialDepth={1}
          //   renderCustomNodeElement={(props) =>

          // RenderRectSvgNode({
          //   ...props,
          //   setActiveNode,
          //   activeNode,
          //   isMenuOpen, isDepartment, setDepartment,
          //   setIsMenuOpen,
          //   isHovered,
          //   setIsHovered,
          //   showPlus,
          //   setShowPlus,
          //   menuopen,
          //   setMenuopen,
          //   add,
          //   setAdd,
          //   isAdmin, isCollaborator,
          //   hasChildren, setHasChildren,
          //   currentSrc,
          //   setCurrentSrc, isChangingManager, setIsChangingManager,
          //   department, edit, setEdit,
          //   clickedData, setClickedData, action, setAction
          // })
          //   }
          orientation="vertical"
          pathFunc="step"
          separation={{ siblings: 3.25, nonSiblings: 3.5, parentChild: 200 }}
          // onClick={handleClick}
        />
      </div>

     <BottomRoute data={cardData}/>
    </>
  );
}

export default Education;
