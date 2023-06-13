import React from 'react'

function Fotter() {
    return (
        <div>
            <hr />
            <div className='footer'>
                <p>
                    ©{new Date().getFullYear()} my-site
                </p>
            </div>
        </div>
    )
}

export default Fotter
