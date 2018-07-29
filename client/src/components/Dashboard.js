import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/surveyList';
import Collapsible from 'react-collapsible';

const Dashboard = () => {
    return (
        <div style={{marginTop: '30px'}}>
        <Collapsible 
        transitionTime="100" 
        triggerStyle={{position: 'relative', 
                       display: 'block', 
                       padding: '20px', 
                       backgroundColor: '#333', 
                       color: '#007bff', 
                       fontSize: '40px', 
                       borderStyle: 'solid', 
                       borderColor: '#007bff', 
                       borderWidth: '5px',
                       borderRadius: '25px'}} 
        trigger="Click for Surveys" 
        triggerWhenOpen="Click to hide">
            <p><SurveyList /></p>
        </Collapsible>
            <p style={{marginTop: '25px'}}></p>
            <div className="fixed-action-btn">
                <Link style={{backgroundColor: '#333'}} className="btn-floating btn-large" to="/surveys/new">
                    <i className="material-icons" style={{color: '#4cff00'}}>add</i>
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;