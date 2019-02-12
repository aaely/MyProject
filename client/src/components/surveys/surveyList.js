import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';
import { CSSTransitionGroup } from 'react-transition-group';

class SurveyList extends Component {
    componentDidMount() {
        this.props.fetchSurveys();
    }

    renderSurveys() {
        return this.props.surveys.reverse().map(survey => {
            console.log(survey);
            return(                
                <div className="card" key={survey._id} style={{marginTop: '30px', backgroundColor: '#333'}}>
                    <div className="card-content" style={{color: 'rgb(0, 123, 255)'}}>
                        <span className="card-title">Application: <span className= "right">{survey.app}</span></span>
                        <p>Technician: <span className="right">{survey.name}</span></p>
                        <p>Ticket #: <span className="right">{survey.vendorTicket}</span></p>
                        <p>Reason for entry: <span className="right">{survey.reason}</span></p>
                    </div>
                    <div className="card-action">
                        <a className="right">Time Out: {new Date(survey.date).toLocaleDateString()}</a>
                        <a className="left">Time In: {new Date(survey.date).toLocaleDateString()}</a>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <CSSTransitionGroup
                    transitionName="fade"
                    transitionAppear={true}
                    transitionAppearTimeout={1000}
                    transitionEnterTimeout={1000}
                    transitionLeaveTimeout={1000}
                >
                {this.renderSurveys()}
                </CSSTransitionGroup>
            </div>
        );
    }
}

function mapStateToProps({ surveys }) {
    return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);