import React, { PureComponent } from 'react';
import {
  ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend,
} from 'recharts';

const data = [
    {
      name: 'Adaptation', uv: 590, pv: 90, amt: 1400,
    },
    {
      name: 'Learning Curve', uv: 868, pv: 90, amt: 1506,
    },
    {
      name: 'Teamwork', uv: 1397, pv: 80, amt: 989,
    },
    {
      name: 'Leadership', uv: 123, pv: 70, amt: 123,
    },
  ];
  

const getIntroOfPage = (label) => {
    if (label === 'Adaptation') {
      return "Front End has been my main focus";
    } if (label === 'Learning Curve') {
      return "How quickly can a new skill be acquired";
    } if (label === 'Teamwork') {
      return "How well one meshes with group tasks";
    } if (label === 'Leadership') {
        return "A measure of ones ability to direct ones self and others";
    }
  };
  
  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="intro">{getIntroOfPage(label)}</p>
        </div>
      );
    }
  
    return null;
  };

export default class Intangibles extends PureComponent {

  render() {
    return (
      <ComposedChart
        layout="vertical"
        width={300}
        height={250}
        data={data}
        margin={{
          top: 20, right: 20, bottom: 20, left: 30,
        }}
        style={{margin: '0 auto'}}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis type="number"/>
        <YAxis dataKey="name" type="category"/>
        <Tooltip content={<CustomTooltip />}/>
        {/*<Area dataKey="amt" fill="#8884d8" stroke="#8884d8" />*/}
        <Bar dataKey="pv" barSize={20} fill="blue" />
        {/*<Line dataKey="uv" stroke="#ff7300" />*/}
      </ComposedChart>
    );
  }
}