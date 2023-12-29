// school name
// start date
// end date
// cgpa
// location
// branch/board

import React from 'react'

function EducationForm() {
    return (
        <div>
            <div>
                Education
            </div>
            <form>
                <div>
                    <span>School/collage Name</span>
                    <input type='text' />
                </div>
                <div>
                    <span>School/collage started</span>
                    <input type='text' />
                </div>
                <div>
                    <span>School/collage ended</span>
                    <input type='text' />
                </div>
                <div>
                    <span>present</span>
                    <input type='checkbox' />
                </div>
                <div>
                    <span>School/collage CGPA</span>
                    <input type='text' />
                </div>
                <div>
                    <span>School/collage Location</span>
                    <input type='text' />
                </div>
                <div>
                    <span>School/collage branch</span>
                    <input type='text' />
                </div>
                <button>Submit education details</button>
            </form>
        </div>
    )
}

export default EducationForm