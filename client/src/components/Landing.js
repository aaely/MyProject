import React from 'react';
import SimpleSlider from './slideShow';

const Landing = () => {
    return (
        <div>
        <SimpleSlider />
        <div style={{ textAlign: 'center', marginTop: '30px'}}>
            <h1>
                Create a Survey!
            </h1>
            Collect feedback from your users
        </div>
        </div>
    )
}

export default Landing;