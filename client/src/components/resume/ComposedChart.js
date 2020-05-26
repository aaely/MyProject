import React, { PureComponent } from 'react';
import {
  ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend,
} from 'recharts';

const data = [
  {
    name: 'Front End', uv: 590, pv: 95, amt: 1400,
  },
  {
    name: 'Back End', uv: 868, pv: 70, amt: 1506,
  },
  {
    name: 'Database', uv: 1397, pv: 70, amt: 989,
  },
  {
    name: 'Automation', uv: 123, pv: 85, amt: 213,
  },
  {
    name: 'Networking', uv: 123, pv: 95, amt: 123
  }
];

const getIntroOfPage = (label) => {
    if (label === 'Front End') {
      return "Front End has been my main focus";
    } if (label === 'Back End') {
      return "Back End has been supplemental for dynamic Front End apps";
    } if (label === 'Database') {
      return "There really isn't much of an app without a database";
    } if (label === 'Automation') {
        return "An essential part of graowing a business";
    } if (label === 'Networking') {
        return "Essential for secure traffic and remote work"
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

export default class MyComposedChart extends PureComponent {

  render() {
    return (
      <ComposedChart
        layout="vertical"
        width={300}
        height={250}
        data={data}
        margin={{
          left: 30, top: 20, right: 20, bottom: 20
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
