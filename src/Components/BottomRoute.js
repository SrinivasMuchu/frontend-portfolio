import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'


function BottomRoute({ data }) {

    const [isFlipped, setIsFlipped] = useState(false);
    const navigate = useNavigate()
    const handleNavigate = (item) => {
        navigate(item)
    }


// https://portfolio-ks.s3.ap-south-1.amazonaws.com/water-gif.gif

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };
    return (
        <motion.div initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", duration: 5 }}>
            <div className='intro-flipping-cards'  >
                {data.map((item, index) => (
                    <div key={index} className={`intro-flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>

                        <div className="intro-flip-card-inner">
                            <div className="intro-flip-card-front" style={{ background: item.frontColor }}>
                                <img src={item.frontLogo} style={{ width: '50px', height: '50px' }} />
                                <h2>{item.front}</h2>
                            </div>

                            <div className="intro-flip-card-back" style={{ background: item.backColor }} onClick={() => handleNavigate(item.navigateTo)}>

                                <img src={item.backLogo} style={{ width: '50px', height: '50px' }} />
                                <h2>click to view</h2>

                            </div>


                        </div>


                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default BottomRoute