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
                </ul>
                <h3 style={{color: '#444'}}>IT Technician</h3>
                <h5 style={{color: '#222', marginLeft: '10%'}}><a href='https://www.pngaming.com/about-us/contact-us'>Penn National Gaming</a></h5>
                <h5 style={{color: '#222', marginLeft: '10%'}}>Manager: Jason Gatrell</h5>
                <h5 style={{color: '#222', marginLeft: '10%'}}>610-373-2400</h5>
                <p style={{marginLeft: '10px'}}>Responsibilities:</p>
                <ul>
                    <li>Created and deployed scheduled packages and security patches for PCs via SCCM</li>
                    <li>Troubleshooting for POS, Slot MCS Systems, Lodging Managment Systems, Office Applications, etc</li>
                </ul>
                <h3 style={{color: '#444'}}>Slot Technician</h3>
                <h5 style={{color: '#222', marginLeft: '10%'}}><a href='https://www.pngaming.com/about-us/contact-us'>Penn National Gaming</a></h5>
                <h5 style={{color: '#222', marginLeft: '10%'}}>Manager: Tim Sitcha</h5>
                <h5 style={{color: '#222', marginLeft: '10%'}}>610-373-2400</h5>
                <p style={{marginLeft: '10px'}}>Responsibilities:</p>
                <ul>
                    <li>Test newly developed software for Jurisdictional Compliance</li>
                    <li>Determine if software is up to par for each Jurisdiction an approval is sought for</li>
                </ul>
                </div>
        )
    }
}