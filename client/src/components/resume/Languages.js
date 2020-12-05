import React, { PureComponent } from 'react';
import {
  ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend,
} from 'recharts';

const data = [
    {
      name: 'React.js', uv: 590, pv: 95, amt: 1400,
    },
    {
      name: 'Node.js', uv: 868, pv: 80, amt: 1506,
    },
    {
      name: 'Mongo', uv: 1397, pv: 80, amt: 989,
    },
    {
      name: 'Graphql', uv: 123, pv: 70, amt: 123,
    },
    {
      name: 'SQL', uv: 123, pv: 65, amt: 123,
    },
    {
      name: 'Solidity', uv: 123, pv: 85, amt: 123,
    },
  ];
  

const getIntroOfPage = (label) => {
    if (label === 'React.js') {
      return "Extremely familiar with this library";
    } if (label === 'Node.js') {
      return "Functionally familiar over a broad spectrum of functionality";
    } if (label === 'Mongo') {
      return "Functionally familiar with complex queries, and updates";
    } if (label === 'Graphql') {
        return "Functionally familiar with all basic queries and mutations";
    } if (label === 'SQL') {
        return "Functionally familiar with all complex queries and schema, not as familiar with SPs";
    } if (label === 'Solidity') {
      return "Functionally familiar with all complex queries and schema, not as familiar with SPs";
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

export default class Languages extends PureComponent {

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