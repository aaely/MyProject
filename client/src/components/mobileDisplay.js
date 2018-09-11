import React, { Component } from "react";
import Fullscreen from "react-full-screen";
import SimpleSlider from './fullSlider';
 
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFull: true,
    };
  }

  componentDidMount() {
    this.goFull();
  }
 
  goFull = () => {
    this.setState({ isFull: !this.state.isFull });
  }
 
  render() {
    return (
      <div className="App" onLoad={this.goFull}>
        <button onClick={this.goFull}>
          Go Fullscreen
        </button>
 
        <Fullscreen
          enabled={this.state.isFull}
          onChange={isFull => this.setState({isFull})}
        >
          <div className="full-screenable-node">
            <SimpleSlider onLoad={this.goFull}/>
          </div>
        </Fullscreen>
      </div>
    );
  }
}
 
export default App;