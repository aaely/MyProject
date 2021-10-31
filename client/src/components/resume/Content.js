import React, { Component } from 'react'

export default class Content extends Component {

    constructor(props) {
        super();
        this.state = {

        }
    }

    async componentDidMount() {
        try{

        } catch(error) {
            console.log(error);
        }
    }

    render() {
        return(
                <div>
                <h1 style={{backgroundColor: 'green', display: 'inline-flex'}}>Work History</h1>
                <h3 style={{color: '#444'}}>Freelance Web Developer</h3>
                <h5 style={{marginLeft: '10px'}}><u>Applications Developed:</u></h5>
                <ul style={{display: 'inline-block'}}>
                    <li>Election app using Ethereum Smart Contract as database</li>
                    <li>Full Stack app providing tracking for new project submissions for software testing</li>
                    <li>Full Stack app housing a company wide wiki on a department by department basis</li>
                    <li>Full Stack App Ecommerce platform featuring using React.js and Ethereum as a database</li>
                    <li>Full Stack App featuring FlureeDB (a blockchain graphDB), Graphql, Node.js, and React.js for Ecommerce</li>
                    <li>Full Stack App featuring Parity Substrate for Ecommerce, and Instagram inspired Social Medial Platform</li>
                </ul>
                <h3 style={{color: '#444'}}>System Test Engineer</h3>
                <h5 style={{color: '#222', marginLeft: '10%'}}><a href='https://gaminglabs.com/contact/'>Gaming Laboratories International LLC (GLI)</a></h5>
                <h5 style={{color: '#222', marginLeft: '10%'}}>Manager: Aaron Green</h5>
                <h5 style={{color: '#222', marginLeft: '10%'}}>732-942-3999</h5>
                <h5 style={{marginLeft: '10px'}}><u>Responsibilities:</u></h5>
                <ul style={{display: 'inline-block'}}>
                    <li>Test newly developed software for Jurisdictional Compliance</li>
                    <li>Wireshark traffic to verify encryption and/or leakage</li>
                    <li>Exploit potential vulnerabilities</li>
                    <li>Configure systems and slot machines for testing</li>
                    <li>Priovide detailed write-ups of issues to suppliers</li>
                    <li style={{backgroundColor: 'yellow'}}>Created a <a href='https://github.com/aaely/gli'>React App</a> to track submission progress</li>
                </ul>
                <h3 style={{color: '#444'}}>IT Technician</h3>
                <h5 style={{color: '#222', marginLeft: '10%'}}><a href='https://www.pngaming.com/about-us/contact-us'>Penn National Gaming</a></h5>
                <h5 style={{color: '#222', marginLeft: '10%'}}>Manager: Jason Gatrell</h5>
                <h5 style={{color: '#222', marginLeft: '10%'}}>610-373-2400</h5>
                <h5 style={{marginLeft: '10px'}}><u>Responsibilities:</u></h5>
                <ul>
                    <li>Scheduled SCCM deployments</li>
                    <li>POS systems</li>
                    <li>Lodging Systems</li>
                    <li>Office Apps</li>
                    <li>Slot MCS Systems</li>
                    <li>Mass Deployments of images and targeted software deployments</li>
                </ul>
                <h1 style={{display: 'inline-block', backgroundColor: 'red'}}>Education</h1>
                <ul>
                <li><h5>Dapp University</h5></li>
                    <ul>    
                        <li>All courses and bootcamp</li>
                    </ul>
                    <li><h5>Metropolitan Community College</h5></li>
                    <ul>    
                        <li>Computer Science - Cisco Networking CCNA</li>
                    </ul>
                </ul>
                </div>
        )
    }
}