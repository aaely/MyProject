import React, { Component } from 'react';
import AccessForm from './accessForm';
import AccessFormReview from './accessFormReview';
import { reduxForm } from 'redux-form';

class AccessLog extends Component {
    state = { showAccessFormReview: false };

    renderContent() {
        if (this.state.showAccessFormReview) {
            return <AccessFormReview 
                        onCancel={() => this.setState({ showAccessFormReview: false })}
                    />;
        }
        return <AccessForm onAccessSubmit={() => this.setState({ showAccessFormReview: true })}/>;
    }

    render() {
        return(
            <div>{this.renderContent()}</div>
        );
    }
}

export default reduxForm({
    form: 'surveyForm'
})(AccessLog);