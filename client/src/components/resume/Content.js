import React, { Component } from 'react'

export default class Content extends Component {

    constructor(props) {
        super(props);
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
                <h3 style={{color: '#444'}}>System Test Engineer</h3>
                <h5 style={{color: '#222', marginLeft: '10%'}}><a href='https://gaminglabs.com/contact/'>Gaming Laboratories International LLC (GLI)</a></h5>
                <h5 style={{color: '#222', marginLeft: '10%'}}>Manager: Aaron Green</h5>
                <h5 style={{color: '#222', marginLeft: '10%'}}>732-942-3999</h5>
                <p style={{marginLeft: '10px'}}>Responsibilities:</p>
                <ul>
                    <li>Test newly developed software for Jurisdictional Compliance</li>
                    <li>Determine if software is up to par for each Jurisdiction an approval is sought for</li>
                    <li>Snoop network traffic to verify encryption is being utilized</li>
                    <li>Find ways to potentially exploit security vulnerabilities in applications</li>
                    <li>Configure systems and slot machines to perform testing</li>
                    <li>Investigate issues and provide meaningful feedback to the developers</li>
                    <li>Created a <a href='https://github.com/aaely/gli'>React App</a> to track the progress of a submissions modification testing</li>
                </ul>
                <h3 style={{color: '#444'}}>IT Technician</h3>
                <h5 style={{color: '#222', marginLeft: '10%'}}><a href='https://www.pngaming.com/about-us/contact-us'>Penn National Gaming</a></h5>
                <h5 style={{color: '#222', marginLeft: '10%'}}>Manager: Jason Gatrell</h5>
                <h5 style={{color: '#222', marginLeft: '10%'}}>610-373-2400</h5>
                <p style={{marginLeft: '10px'}}>Responsibilities:</p>
                <ul>
                    <li>Created and deployed scheduled app packages and security patches for PCs via SCCM</li>
                    <li>Troubleshooting for POS, Slot MCS Systems, Hotel Systems, Office Apps</li>
                    <li>Created custom build images for mass deployment</li>
                    <li>Created powershell scripts to manage PC inventory and automate changes</li>
                    <li>Set up POS machines for concerts and banquets</li>
                </ul>
                <h3 style={{color: '#444'}}>Slot Technician</h3>
                <h5 style={{color: '#222', marginLeft: '10%'}}><a href='https://www.pngaming.com/about-us/contact-us'>Penn National Gaming</a></h5>
                <h5 style={{color: '#222', marginLeft: '10%'}}>Manager: Tim Sitcha</h5>
                <h5 style={{color: '#222', marginLeft: '10%'}}>610-373-2400</h5>
                <p style={{marginLeft: '10px'}}>Responsibilities:</p>
                <ul>
                    <li>Install wire harness and player tracking boards in slot machines</li>
                    <li>Fix bad components on circuit boards</li>
                    <li>Replace CFL back lights with LEDs in bad Monitors</li>
                    <li>Replace bad components in slot machines</li>
                    <li>Troubleshoot issues with slot machines</li>
                    <li>Configure slot machines to be KRGC compliant</li>
                </ul>
                </div>
        )
    }
}