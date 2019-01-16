import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/surveyNew';
import Store from './Store';
import Display from './Display'
import mobileDisplay from './mobileDisplay'
import todoList from './todoList';
import AccessLog from './remoteAccess/accessLog'
import Resume from './Resume';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
        <div className="container">
        <BrowserRouter>
          <div> 
            <Header />
            <Route exact path="/" component ={Landing} />
            <Route exact path="/surveys" component ={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
            <Route path="/store" component={Store} />
            <Route path="/display" component={Display} />
            <Route path="/mobiledisplay" component={mobileDisplay} />
            <Route path="/todoList" component={todoList} />
            <Route path="/accessform" component={AccessLog} />
            <Route path="/resume" component={Resume} />
          </div>
        </BrowserRouter>
        </div>
    );
  }
}

export default connect(null, actions)(App);
