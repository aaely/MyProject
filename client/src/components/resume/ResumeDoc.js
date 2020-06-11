import React, { Component } from 'react'
import { Grid, Cell } from 'styled-css-grid'
import Content from './Content'
import Charts from './Charts'
import MyRadarChart from './RadarChart'
import VerticalBarChart from './VerticalBarChart'
import MyComposedChart from './ComposedChart'
import Intangibles from './Intangibles'
import Languages from './Languages'

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
                columns={"repeat(auto-fit,1fr) repeat(auto-fit,500)"}
                rows={"repeat(auto-fit,1fr) repeat(auto-fit,minmax(500px,auto))"}
                style={{backgroundColor: 'white', color: 'black'}}
                >
                    <Cell width={2} style={{marginTop: '40px', borderBottom: '5px solid black'}}><h1 style={{marginLeft: '17%'}}>Aaron Ely <span style={{color: '#666', fontSize: '20px'}}>(913) 547-2476</span></h1><h3 style={{marginLeft: '7%', color: '#fc5d01'}}>Software Developer</h3><h3 style={{marginLeft: '7%'}}><a href='https://github.com/aaely' style={{color: 'red'}}>My Github Repos</a></h3></Cell>
                    <Cell width={1} style={{marginTop:'50px'}}><Content /></Cell>
                    <Cell width={1} style={{marginTop: '50px', borderLeft: '5px solid black'}}><h3 style={{textAlign: 'center'}}>Functional Skills:</h3> <br /> <MyComposedChart /> <br /> <h3 style={{textAlign: 'center'}}>Intangibles:</h3> <br /> <Intangibles /><h3 style={{textAlign: 'center'}}>Languages:</h3><br /><Languages /> </Cell>
                    <Cell width={2} style={{marginTop: '40px'}}><h1 style={{textAlign: 'right', marginRight: '17%'}}>Aaron Ely <br /> <h3 style={{textAlign: 'right', marginRight: '7%', color: '#fc5d01'}}>Software Developer</h3></h1></Cell>
                </Grid>
            )
        }
}