import React from 'react'
import './Loading.css'

function Loading() {
    return (
        <>
         <div className='load'>
            <div className='loader-div'>
                <div className="typewriter">
                    <div className="slide"><i></i></div>
                    <div className="paper"></div>
                    <div className="keyboard"></div>
                </div>
               
            </div>
            <span style={{color:'white',marginTop:'50px'}}>Hang tight, showcasing my work...</span>
        </div>
        {/* <span style={{color:'white'}}>Hang tight, showcasing my work...</span> */}
        </>
       


    );
}

export default Loading

