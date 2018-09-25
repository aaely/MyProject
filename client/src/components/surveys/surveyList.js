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
                        <span className="card-title"><strong>Vendor: </strong><span className="right"><a>{survey.vendor}</a></span></span>
                        <p><strong>Vendor Technician: </strong><span className="right">{survey.name}</span></p>
                        <p><strong>Application: </strong><span className="right">{survey.app}</span></p>
                        <p><strong>Technician Email: </strong>{survey.email.map(a => {
                            return(
                                <span className="right">{a.email}</span>
                            );
                        })} </p>
                        <p><strong>Ticket #: </strong><span className="right">{survey.vendorTicket}</span></p>
                        <p><strong>Reason for Entry: </strong><span className="right">{survey.reason}</span></p>
                        <p className="card-title" style={{display: 'block', textAlign: 'center'}}><strong>Entered On: </strong>{new Date(survey.date).toLocaleDateString()}</p>
                    </div>
                    <div className="card-action">
                        <a>Time In : {survey.timeIn}</a>
                        <a className="right">Time Out : {survey.timeOut}</a>
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