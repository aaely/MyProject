import React, { PureComponent } from 'react';
import {
  ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend,
} from 'recharts';

const data = [
    {
      name: 'Web3.js', uv: 590, pv: 85, amt: 1400,
    },
    {
      name: 'Polkadot-js', uv: 590, pv: 85, amt: 1400,
    },
    {
      name: 'Socket.io', uv: 868, pv: 65, amt: 1506,
    },
    {
      name: 'ReactSpring', uv: 868, pv: 70, amt: 1506,
    },
    {
      name: 'Substrate', uv: 1397, pv: 75, amt: 989,
    },
    {
      name: 'Recoil.js', uv: 123, pv: 90, amt: 123,
    },
  ];
  

const getIntroOfPage = (label) => {
    if (label === 'Web3.js') {
      return "Metamask injector for Smart Contract interaction";
    } if (label === 'Socket.io') {
      return "Feature rich, event driven, real-time messaging";
    } if (label === 'Draft.js') {
      return "Allows for a rich text editor similar to Microsoft Word pad for content creation and saving with formatting";
    } if (label === 'Recoil') {
        return "The newer library for global state management utilizing React Hooks. Persistence enabled.";
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