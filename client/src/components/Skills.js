import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

class Skills extends Component {
    render() {
        return(
            <div>
            <TabPane>
                <h2 style={{textAlign: 'center', textDecoration: 'underline'}}>Networking</h2>
            <Row>
              <Col sm="6">
                <Card body style={{backgroundColor: 'limegreen', color: 'black'}}>
                  <CardTitle style={{ textDecoration: 'underline', textAlign: 'center' }}>CCNP</CardTitle>
                  <ul>
                  <li><CardText>Very strong core networking skills</CardText></li>
                  <li><CardText>Very familiar with EIGRP, OSPF, & BGP</CardText></li>
                  <li><CardText>Very familiar with Spanning Tree & SNMP</CardText></li>
                  <li><CardText>Proficient with ACLs </CardText></li>
                  <li><CardText>Highly proficient with network architecture</CardText></li>
                  </ul>
                  <Button href="https://searchnetworking.techtarget.com/definition/Cisco-Certified-Network-Professional" style={{backgroundColor: 'black', color: 'lawngreen'}}>Cisco Academy</Button>
                </Card>      
              </Col>
              <Col sm="6">
                <Card body style={{backgroundColor: 'limegreen', color: 'black'}}>
                  <CardTitle style={{ textDecoration: 'underline', textAlign: 'center' }}>Python Scripting</CardTitle>
                  <ul>
                  <li><CardText>Automate config of VLAN database, SNMP, AAA/Radius, SSH, STP</CardText></li>
                  <li><CardText>Pull running configs on a schedule & save to TFTP</CardText></li>
                  <li><CardText>Automate the building of ACLs</CardText></li>
                  <li><CardText>Automate pushing of multiple switch configs simultaneously</CardText></li>
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
            <h2 style={{textAlign: 'center', textDecoration: 'underline'}}>Servers and Virtual Machines</h2>
            <Row>
              <Col sm="6">
                <Card body style={{backgroundColor: 'limegreen', color: 'black'}}>
                  <CardTitle style={{textDecoration: 'underline', textAlign: 'center'}}>SCCM Management</CardTitle>
                  <ul>
                  <li><CardText>Setup up environments on MS Server 2016</CardText></li>
                  <li><CardText>Advanced implementation of WSUS and custom image deployment</CardText></li>
                  <li><CardText>Automatic mapping of printers and drives</CardText></li>
                  <li><CardText>Silent scheduled winidows and application updates</CardText></li>
                  </ul>
                  <Button href='https://www.microsoft.com/en-us/cloud-platform/system-center-configuration-manager-features' style={{backgroundColor: 'black', color: 'lawngreen'}}>What is SCCM</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body style={{backgroundColor: 'limegreen', color: 'black'}}>
                  <CardTitle style={{textDecoration: 'underline', textAlign: 'center'}}>Vsphere/VCenter/VMWare</CardTitle>
                  <ul>
                  <li><CardText>Build hosts from scratch and pull them into the active cluster</CardText></li>
                  <li><CardText>Configure and Optimize the VCenter server appliance</CardText></li>
                  <li><CardText>Configure administrative options for security and tiered access</CardText></li>
                  <li><CardText>Configure Failover and Load-Balancing between hosts</CardText></li>
                  <li><CardText>Apply patches and upgrade binaries</CardText></li>
                  </ul>
                  <Button href='https://vmware.com' style={{backgroundColor: 'black', color: 'lawngreen'}}>VMWare</Button>
                </Card>
              </Col>
            </Row>
            <h2 style={{textAlign: 'center', textDecoration: 'underline'}}>Phone and POS Support</h2>
            <Row>
              <Col sm="6">
                <Card body style={{backgroundColor: 'limegreen', color: 'black'}}>
                  <CardTitle style={{textDecoration: 'underline', textAlign: 'center'}}>Avaya/Nortel CS1000 PBX</CardTitle>
                  <ul>
                  <li><CardText>Configure Nortel/Avaya phones for end users</CardText></li>
                  <li><CardText>Create ACDs and CDNs for departments</CardText></li>
                  <li><CardText>Create phantom loops and dummy ACDs for voicemail</CardText></li>
                  <li><CardText>Replace blown power boards and worn hook-switches</CardText></li>
                  </ul>
                  <Button href='https://vmware.com' style={{backgroundColor: 'black', color: 'lawngreen'}}>VMWare</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body style={{backgroundColor: 'limegreen', color: 'black'}}>
                  <CardTitle style={{textDecoration: 'underline', textAlign: 'center'}}>FreePBX</CardTitle>
                  <ul>
                  <li><CardText>Build the FreePBX VM server and apply base configuration</CardText></li>
                  <li><CardText>Set up SIP license for commercial use</CardText></li>
                  <li><CardText>Build configurations for Cisco IP phones</CardText></li>
                  <li><CardText>Build configurations for Android/IOS for mobile phone use</CardText></li>
                  <li><CardText>Set up Call Routing and Queues for departments</CardText></li>
                  </ul>
                  <Button href='https://www.freepbx.org/' style={{backgroundColor: 'black', color: 'lawngreen'}}>FreePBX</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body style={{backgroundColor: 'limegreen', color: 'black'}}>
                  <CardTitle style={{textDecoration: 'underline', textAlign: 'center'}}>Android</CardTitle>
                  <ul>
                  <li><CardText>Build custom Android OS with AOSP manifest</CardText></li>
                  <li><CardText>Add/Remove features from the source</CardText></li>
                  <li><CardText>Customize appearance of top Navbar and settings icons</CardText></li>
                  <li><CardText>Join to FreePBX to use with a desk phone extension</CardText></li>
                  <li><CardText>Perform physical repairs for smartphones and tablets</CardText></li>
                  </ul>
                  <Button href='https://source.android.com/' style={{backgroundColor: 'black', color: 'lawngreen'}}>Android Open Source Project</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body style={{backgroundColor: 'limegreen', color: 'black'}}>
                  <CardTitle style={{textDecoration: 'underline', textAlign: 'center'}}>Micros</CardTitle>
                  <ul>
                  <li><CardText>Build touchscreens, create menu items, map printing, create tender media</CardText></li>
                  <li><CardText>Add, change, & create group permissions for employees</CardText></li>
                  <li><CardText>Add IP printers and workstations to the device table</CardText></li>
                  <li><CardText>Troubleshoot issues related to interface failures</CardText></li>
                  <li><CardText>Physically repair the devices, upgrade bios, add WiFi cards</CardText></li>
                  </ul>
                  <Button href='http://www.oracle.com/us/support/licensecodes/micros/index.html' style={{backgroundColor: 'black', color: 'lawngreen'}}>Micros POS</Button>
                </Card>
              </Col>
            </Row>
            <h2 style={{textAlign: 'center', textDecoration: 'underline'}}>PC/Server Administration</h2>
            <Row>
              <Col sm="6">
                <Card body style={{backgroundColor: 'limegreen', color: 'black'}}>
                  <CardTitle style={{textDecoration: 'underline', textAlign: 'center'}}>Powershell for mass Administrative Tasks</CardTitle>
                  <ul>
                  <li><CardText>Several useful <a className='link' href='https://github.com/aaely/Powershell'>powershell</a> scripts I utilize regularly</CardText></li>
                  <li><CardText>Configure and Optimize the VCenter server appliance</CardText></li>
                  <li><CardText>Remote configuration of all kinds of settings that can be applied to a list of hostnames</CardText></li>
                  <li><CardText>Automate the creation of new users</CardText></li>
                  </ul>
                  <Button href='https://docs.microsoft.com/en-us/powershell/scripting/overview?view=powershell-6' style={{backgroundColor: 'black', color: 'lawngreen'}}>Powershell</Button>
                </Card>
              </Col>
            </Row>     
          </TabPane>
        </div>
        );
    }
}

export default Skills;