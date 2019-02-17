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
                <p>
                  I had my first fight on April 20th 2010. I knew that night that I could take this game very far... so I went 
                  all in. I completely devoted myself to traveling and training. After reaching the 9-0 amateur mark
                  I was offered an opportunity to go to Alliance in Chula Vista, CA and train with Dominick Cruz to help get him ready for Scott Jorgensen in <a className='link' href='https://www.ufc.tv/video/dominick-cruz-vs-scott-jorgensen-wec-53'>Cruz-Jorgensen</a> .
                  At this point in my career, I was the premier up and coming amateur. After winning all of them, I got to make my
                  professional debut on Sharkfights. I was lucky enough to be invited back to Alliance to help <a className='link' href='https://www.sherdog.com/fighter/Dominick-Cruz-12107'>Dom</a> get ready for Urijah Faber
                  in the Bantamweight UFC debut. Being exposed to the best in the business helped me to formulate a fighting style/system. I was able
                  formulate a style-- or rather, mix of styles. Being given proper resistance is what self growth is all about, and without it one
                  will develop a false sense of security. This is what the world of martial arts lacks-- practicality, adaptiveness, spontanaeity, flexibility. 
                  This is precisely why I was drawn to this sport: all the garbage caked into the traditional fighting styles is eradicated here.
                  The pure, raw, practicality of martial arts flourishes in this game.
                </p>
                <h4>Penn National Gaming</h4>
                <p>
                  I began my career at Penn at Hollywood Casino at Kansas Speedway as a slot technician. In this role I developed good troubleshooting and machine/circuit repair skills.
                  While in this role I attended MCC and completed the <a className='link' href='https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/professional/ccnp-routing-switching.html'>CCNP</a> program offered there. 
                  This program instills the core mechanics of networking needed to blossom into an architect. It is the ideal prerequisite to begin a career in networking, and even IT in general.
                  Lucky for me, I was offered a position at the M Resort in Las Vegas where I could begin an IT career. I took it without a second thought.
                  In this position I have learned the essentials of IT-- troubleshooting in depth, fundamentals of operating systems, application structure, database essentials.
                  This position enabled me to see the similarities all programs have, and the client - server - database model they (mostly) all utilize.
                  Grasping this concept along with the fundamentals of Operating Systems gave me a very solid foundation upon which to grow.
                  I have gone on to automate a very broad assortment of changes to PCs on a wide scale with Powershell scripts. I have developed
                  automated python scripts to deploy large scale network changes with a customizable executable -- this makes the execution of change controls, and the rollback extremely efficient.
                  I learned these skills because I could see the day to day tasks being performed and knew this would be of great help. 
                </p>
          </TabPane>
          <TabPane tabId="2">
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
                  <Button href='https://vmware.com' style={{backgroundColor: 'black', color: 'lawngreen'}}>VMWare</Button>
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