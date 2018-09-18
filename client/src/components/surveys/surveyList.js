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
            return(                
                <div className="card" key={survey._id} style={{marginTop: '30px', backgroundColor: '#333'}}>
                    <div className="card-content" style={{color: 'rgb(0, 123, 255)'}}>
                        <span className="card-title">{survey.title}</span>
                        <p>{survey.body}</p>
                        <p className="right">Sent On: {new Date(survey.dateSent).toLocaleDateString()}</p>
                    </div>
                    <div className="card-action">
                        <a>Yes: {survey.yes}</a>
                        <a>No: {survey.no}</a>
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