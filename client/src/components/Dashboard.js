import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/surveyList';
import Collapsible from 'react-collapsible';
//import VideoExample from './webcam';
import { CSSTransitionGroup } from 'react-transition-group';
//import ReactPlayer from 'react-player';
import ResponsivePlayer from './responsivePlayer';

class Dashboard extends Component {

    renderDropDown1() {
        return (
            <span className="trigger">
                Fights
            </span>
        );
    }

    renderDropDown2() {
        return (
            <span className="trigger">
                Cakes
            </span>
        );
    }

    renderHide() {
        return (
            <span className="triggerHide">
                Hide
            </span>
        );
    }

    render() {
    return (
        <div style={{marginTop: '30px'}}>
        <div className='rotatingimage' style={{marginLeft: 'auto', marginRight: 'auto'}}>
        <img src="testing.jpg" className="rotating" alt="1" style={{ marginLeft: 'auto', marginRight: 'auto'}}/>
        </div>
        <CSSTransitionGroup
                    transitionName="fade"
                    transitionAppear={true}
                    transitionAppearTimeout={2000}
                    transitionEnterTimeout={2000}
                    transitionLeaveTimeout={2000}
                >
        <Collapsible 
        transitionTime="500" 
        trigger={this.renderDropDown1()} 
        triggerWhenOpen={this.renderHide()}>
        <ResponsivePlayer />
        </Collapsible>
        <Collapsible 
        transitionTime="500" 
        trigger={this.renderDropDown2()} 
        triggerWhenOpen={this.renderHide()}>
        <SurveyList />
        
        </Collapsible>
        </CSSTransitionGroup>        
            <p style={{marginTop: '25px'}}></p>
            <div className="fixed-action-btn">
                <Link style={{backgroundColor: '#333'}} className="btn-floating btn-large" to="/surveys/new">
                    <i className="material-icons" style={{color: 'rgb(0, 123, 255)'}}>add</i>
                </Link>
            </div>
        </div>
    );
}
};

export default Dashboard;