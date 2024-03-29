import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import _ from 'lodash';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';

const SurveyReview = ({ onCancel, formValues, submitSurvey, history }) => {
    const reviewFields = _.map(formFields, ({ name, label }) => {
        return (
            
            <div key={name}>
                <label>{label}</label>
                <div>
                    {formValues[name]}
                </div>
            </div>
        );
    });

    return (
        <div style={{marginTop: '30px', marginBottom: '40px'}}>
            <h5>Please confirm your entries</h5>
            {reviewFields}
            <div key="timeIn">
            <label>Time In</label>
            <div>
                {formValues["timeIn"]}
            </div>
            </div>
            <button 
                className="red btn-flat"
                onClick={onCancel}
            >Back
            </button>
            <button onClick={() => submitSurvey(formValues, history)} className="green btn-flat right">
                Send Survey
                <i className="material-icons right white-text">email</i>
            </button>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        formValues: state.form.surveyForm.values
    };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyReview));