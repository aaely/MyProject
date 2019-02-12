import React from 'react';
import SimpleSlider from './slideShow';

const Landing = () => {
    return (
        <div>
        <SimpleSlider />
        <div style={{ textAlign: 'center', marginTop: '30px'}}>
            <h1>
                <a href="/resume">About Me</a>
            </h1>
            Aaron Ely
        </div>
        </div>
    )
}

export default Landing;