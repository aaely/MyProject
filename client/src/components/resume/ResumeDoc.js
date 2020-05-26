import React, { Component } from 'react'
import { Grid, Cell } from 'styled-css-grid'
import Content from './Content'
import Charts from './Charts'
import MyRadarChart from './RadarChart'
import VerticalBarChart from './VerticalBarChart'
import MyComposedChart from './ComposedChart'
import Intangibles from './Intangibles'

export default class ResumeDoc extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    async componentDidMount() {
        try {

        } catch(error) {
            console.log(error);
        }
    }

    render() {
        return(
                <Grid
                columns={"repeat(auto-fit,1fr) repeat(auto-fit,1fr) repeat(auto-fit,550)"}
                rows={"repeat(auto-fit,minmax(500px,auto)) repeat(auto-fit,1fr) repeat(auto-fit,minmax(500px,auto))"}
                style={{backgroundColor: 'white', color: 'black'}}
                >
                    <Cell width={3} style={{marginTop: '20px', borderBottom: '5px solid black'}}><h1 style={{marginLeft: '17%'}}>Aaron Ely <br /> <h3 style={{marginLeft: '7%', color: '#fc5d01'}}>React Developer</h3></h1></Cell>
                    <Cell width={2} style={{marginTop:'30px'}}><Content /></Cell>
                    <Cell width={1} style={{marginTop: '30px', borderLeft: '5px solid black'}}><h3 style={{textAlign: 'center'}}>Functional Skills:</h3> <br /> <MyComposedChart /> <br /> <h3 style={{textAlign: 'center'}}>Intangibles:</h3> <br /> <Intangibles /></Cell>
                    <Cell width={3} style={{marginTop: '20px'}}><h1 style={{textAlign: 'right', marginRight: '17%'}}>Aaron Ely <br /> <h3 style={{marginRight: '7%', color: '#fc5d01'}}>React Developer</h3></h1></Cell>
                </Grid>
            )
        }
}