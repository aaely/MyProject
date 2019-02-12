import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './surveyField';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';
import _ from 'lodash';
import formFields from './formFields';

class SurveyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }
    
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
          );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
          date: new Date()
        });
      }

    renderFields() {
        return _.map(formFields, ({ label, name, type, placeholder }) => {
            return <Field key={name} component={SurveyField} placeholder={placeholder} type={type} label={label} name={name} />
        });
    }

    render() {
        const leaveTime = this.state.date.toLocaleDateString();
        return(
            <div style={{marginTop: '30px', marginBottom: '40px'}}>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <table style={{width: '100%', border: '1px solid black', marginTop: '10px', marginBottom: '20px', textAlign: 'center'}}>
                        <thead style={{backgroundColor: 'black', color: 'green'}}>
                        <tr><th>Time In</th><th>Time Out</th></tr>
                        </thead>
                        <tbody>
                        <tr><td><Field key="timeIn" component="input" style={{textAlign: 'center', width: '100px'}} type="text" label="Time In" name="timeIn" defaultValue={this.state.date.toLocaleTimeString()} /></td><td style={{textAlign: 'center', width: '100px'}}>{this.state.date.toLocaleTimeString()} /></td></tr>
                        <tr><td>{this.state.date.toLocaleDateString()}</td><td>{this.state.date.toLocaleDateString()}</td></tr>
                        </tbody>
                    </table>
                    <Link to="/surveys" className="red btn-flat white-text">
                        Cancel
                    </Link>
                    <button type="submit" className="green btn-flat right black-text">
                        Next
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    errors.email = validateEmails(values.email || '');

    _.each(formFields, ({ name, noValueError }) => {
        if(!values[name]) {
            errors[name] = noValueError;
        }
    });

    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false,
})(SurveyForm);