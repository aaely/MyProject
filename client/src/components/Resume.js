import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

class Resume extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
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
            onClick={() => { this.toggle('2'); }}
            >
            Goals
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
                <h2 style={{textAlign: 'center'}}>About Me:</h2>
                <h4>MMA Career</h4>
                <h4>Penn National Gaming</h4>
          </TabPane>
          <TabPane tabId="2">
                <h2 style={{textAlign: 'center', textDecoration: 'underline'}}>Networking</h2>
            <Row>
              <Col sm="6">
                <Card body style={{ backgroundColor: '#666', color: 'limegreen' }} >
                  <CardTitle style={{ textDecoration: 'underline', textAlign: 'center' }}>CCNP</CardTitle>
                  <ul>
                  <li><CardText>Very strong core networking skills</CardText></li>
                  <li><CardText>Very familiar with EIGRP, OSPF, & BGP</CardText></li>
                  <li><CardText>Very familiar with Spanning Tree & SNMP</CardText></li>
                  <li><CardText>Proficient with ACLs </CardText></li>
                  </ul>
                  <Button href="https://searchnetworking.techtarget.com/definition/Cisco-Certified-Network-Professional" style={{backgroundColor: 'black', color: 'lawngreen'}}>Cisco Academy</Button>
                </Card>      
              </Col>
              <Col sm="6">
                <Card body style={{ backgroundColor: '#666', color: 'limegreen' }} >
                  <CardTitle style={{ textDecoration: 'underline', textAlign: 'center' }}>Python Scripting</CardTitle>
                  <ul>
                  <li><CardText>Automate config of VLAN database, SNMP, AAA/Radius, SSH, STP</CardText></li>
                  <li><CardText>Pull running configs on a schedule & save to TFTP</CardText></li>
                  <li><CardText>Automate the building of ACLs</CardText></li>
                  </ul>
                  <Button href="https://packetpushers.net/intro-python-network-automation" style={{backgroundColor: 'black', color: 'lawngreen'}}>Python for Network Automation</Button>
                </Card>      
              </Col>
            </Row>
            <h2 style={{textAlign: 'center', textDecoration: 'underline'}}>Web Design & Development</h2>
            <Row>
              <Col sm="6">
                <Card body style={{backgroundColor: 'limegreen', color: 'black'}}>
                  <CardTitle style={{textDecoration: 'underline', textAlign: 'center'}}>React.js</CardTitle>
                  <ul>
                  <li><CardText>Intermediate/Advanced Web Developer</CardText></li>
                  <li><CardText>Custom web reporting utilies</CardText></li>
                  <li><CardText>Simple, Animated, Effective advertisement on time schedule</CardText></li>
                  <li><CardText>Interactive menus, FAQs, Training Tips, File Sharing</CardText></li>
                  </ul>
                  <Button href='https://reactjs.org' style={{backgroundColor: 'black', color: 'lawngreen'}}>React.JS</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body style={{backgroundColor: 'limegreen', color: 'black'}}>
                  <CardTitle style={{textDecoration: 'underline', textAlign: 'center'}}>Node.JS</CardTitle>
                  <ul>
                  <li><CardText>Intermediate back-end skill</CardText></li>
                  <li><CardText>Express and Mongoose for database connection</CardText></li>
                  <li><CardText>Can use web-workers/clustering to improve performance</CardText></li>
                  <li><CardText>MongoDB Models, Automated Emails, Payment Handling</CardText></li>
                  </ul>
                  <Button href='https://nodejs.org' style={{backgroundColor: 'black', color: 'lawngreen'}}>Node.JS</Button>
                </Card>
              </Col>
            </Row>
            <h2 style={{textAlign: 'center', textDecoration: 'underline'}}>Casino Specific</h2>
            <Row>
              <Col sm="6">
                <Card body style={{backgroundColor: 'limegreen', color: 'black'}}>
                  <CardTitle>SCCM Management</CardTitle>
                  <CardText>Setup up several Labs with multiple sites in a virtual environment</CardText>
                  <CardText>Advanced implementation of WSUS and custom image deployment</CardText>
                  <CardText>Automatic mapping of printers and drives</CardText>
                  <CardText>Will obtain the certification as soon as it is financially feasible</CardText>
                </Card>
              </Col>
              <Col sm="6">
                <Card body style={{backgroundColor: 'limegreen', color: 'black'}}>
                  <CardTitle>Casino Support</CardTitle>
                  <CardText>M Resort managed by Penn National Gaming</CardText>
                  <CardText>Support all applications and systems used by Penn</CardText>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default Resume;