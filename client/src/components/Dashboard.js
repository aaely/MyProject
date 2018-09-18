import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/surveyList';
import Collapsible from 'react-collapsible';
import VideoExample from './webcam';
import { CSSTransitionGroup } from 'react-transition-group';
import ReactPlayer from 'react-player';

const Dashboard = () => {
    return (
        <div style={{marginTop: '30px'}}>
        <div className='rotatingimage' style={{marginLeft: 'auto', marginRight: 'auto'}}>
        <img src="testing.jpg" className="rotating" alt="1" style={{ marginLeft: 'auto', marginRight: 'auto'}}/>
        </div>
        <CSSTransitionGroup
                    transitionName="fade"
                    transitionAppear={true}
                    transitionAppearTimeout={2000}
                    transitionEnterTimeout={2000}
                    transitionLeaveTimeout={2000}
                >
                <ReactPlayer url='https://www.youtube.com/watch?v=9kXyRkXyv-U' playing  style={{marginLeft: 'auto', marginRight: 'auto', marginBottom: '40px'}}/>
        </CSSTransitionGroup>
        <Collapsible 
        transitionTime="100" 
        triggerStyle={{position: 'relative', 
                       display: 'block', 
                       padding: '5px', 
                       backgroundColor: '#333', 
                       color: '#007bff', 
                       fontSize: '40px', 
                       borderStyle: 'solid', 
                       borderColor: '#007bff', 
                       borderWidth: '5px',
                       borderRadius: '25px'}} 
        trigger="Click for Surveys" 
        triggerWhenOpen="Click to hide">
        <SurveyList />
        </Collapsible>
            <p style={{marginTop: '25px'}}></p>
            <div className="fixed-action-btn">
                <Link style={{backgroundColor: '#333'}} className="btn-floating btn-large" to="/surveys/new">
                    <i className="material-icons" style={{color: 'rgb(0, 123, 255)'}}>add</i>
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;