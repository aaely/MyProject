import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Skills from './resume/Skills';
import Collapsible from 'react-collapsible';
import Bio from './resume/Bio';
import Goals from './resume/Goals';
import ResumeDoc from './resume/ResumeDoc';

class Resume extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '4'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  } 

  renderCert() {
    //<script>var stylesheet = "https://app.testdome.com/content/source/stylesheets/embed.css", link = document.createElement("link"); link.href = stylesheet, link.type = "text/css", link.rel = "stylesheet", link.media = "screen,print", document.getElementsByTagName("head")[0].appendChild(link);</script>
    return(
      <a href="https://app.testdome.com/cert/c361b6aa180b4fc98b898732257d1435" class="testdome-certificate-stamp gold"><span class="testdome-certificate-name">Aaron Ely</span><span class="testdome-certificate-test-name">React </span><span class="testdome-certificate-card-logo">TestDome<br />Certificate</span></a>
    )
  }

  render() {
    return (
      <div>
        <Nav tabs style={{backgroundColor: 'black', color: 'green', marginTop: '5px', marginBottom: '5px'}}>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Bio
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Skills
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
            className={classnames({ active: this.state.activeTab === '3' })}
            onClick={() => { this.toggle('3'); }}
            >
            Goals
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
            className={classnames({ active: this.state.activeTab === '4' })}
            onClick={() => { this.toggle('4'); }}
            >
            Resume
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
                <Bio />
          </TabPane>
          <TabPane tabId="2">
            <Skills />
          </TabPane>  
          <TabPane tabId="3">
            <Goals />
          </TabPane>
          <TabPane tabId="4">
            <ResumeDoc />
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default Resume;