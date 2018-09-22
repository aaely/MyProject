import React from 'react';
import { connect } from 'react-redux';
import accessFormFields from './accessFormFields';
import _ from 'lodash';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';

const AccessFormReview = ({ onCancel, accessFormValues, submitAccessForm, history }) => {
    const reviewFields = _.map(accessFormFields, ({ name, label }) => {
        return (
            <div key={name}>
                <label>{label}</label>
                <div>
                    {accessFormValues[name]}
                </div>
            </div>
        );
    });

    return (
        <div style={{marginTop: '30px', marginBottom: '40px'}}>
            <h5>Please confirm your entries</h5>
            {reviewFields}
            <button 
                className="red btn-flat"
                onClick={onCancel}
            >Back
            </button>
            <button onClick={() => submitAccessForm(accessFormValues, history)} className="green btn-flat right">
                Submit Entry
                <i className="material-icons right white-text">email</i>
            </button>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        accessFormValues: state.form.accessForm.values
    };
}

export default connect(mapStateToProps, actions)(withRouter(AccessFormReview));