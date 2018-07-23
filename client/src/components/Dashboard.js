import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/surveyList';

const Dashboard = () => {
    return (
        <div style={{marginTop: '30px'}}>
            <SurveyList />
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