import React from 'react'

import BackButton from '../components/BackButton'

const Error = () => {
    return (
        <div className="error">
            <BackButton />
            <h1>THERE HAS BEEN ERROR <label>😞</label></h1>
        </div>
    )
}

export default Error