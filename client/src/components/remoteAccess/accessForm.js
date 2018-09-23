import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import AccessFormField from './accessFormField';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import accessFormFields from './accessFormFields';

class AccessForm extends Component {
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
        return _.map(accessFormFields, ({ label, name }) => {
            return <Field key={name} component={AccessFormField} type="text" label={label} name={name} />
        });
    }

    render() {
        return(
            <div style={{marginTop: '30px', marginBottom: '40px'}}>
                <form onSubmit={this.props.handleSubmit(this.props.onAccessSubmit)}>
                    {this.renderFields()}
                    <table style={{width: '100%', border: '3px solid black', marginTop: '10px', marginBottom: '20px', textAlign: 'center'}}>
                        <thead>
                        <tr><th>Time In</th><th>Time Out</th></tr>
                        </thead>
                        <tbody>
                        <tr><td>{this.state.date.toLocaleTimeString()}</td><td>{this.state.date.toLocaleTimeString()}</td></tr>
                        <tr><td>{this.state.date.toLocaleDateString()}</td><td>{this.state.date.toLocaleDateString()}</td></tr>
                        </tbody>
                    </table>
                    
                    <Link to="/surveys" className="red btn-flat white-text"> Cancel </Link>
                    
                    <button type="submit" className="green btn-flat right black-text">Next</button>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    _.each(accessFormFields, ({ name, noValueError }) => {
        if(values[name]) {
            errors[name] = noValueError;
        }
    });

    return errors;
}

export default reduxForm({
    validate,
    form: 'accessForm',
    destroyOnUnmount: false,
})(AccessForm);