import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Skills from './Skills';

class Resume extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '2'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  renderBio() {
    return (
      <div>
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
      </div>
    );
  }

  renderGoals() {
    return(
      <div>
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
      </div>
    );
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
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
                {/*this.renderBio()*/}
                under construction
          </TabPane>
          <TabPane tabId="2">
            <Skills />
          </TabPane>  
          <TabPane tabId="3">
            {/*this.renderGoals()*/}
            under construction
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default Resume;