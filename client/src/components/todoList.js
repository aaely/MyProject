import { CSSTransitionGroup } from 'react-transition-group';
import React, { Component } from 'react';

class todoList extends Component {
  constructor(props) {
    super(props);
    this.state = {items: ['hello', 'world', 'click', 'me'], count: 0};
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleIncrement() {
    this.setState({
      count: this.state.count + 1
    });
  }

  handleDecrement() {
    if (this.state.count > 0){
    this.setState({
      count: this.state.count - 1
    });
    }

    else {
      this.setState({
        count: this.state.count
      });
    }
  }

  handleAdd() {
    const newItems = this.state.items.concat([
      prompt('Enter some text')
    ]);
    this.setState({items: newItems});
  }

  handleRemove(i) {
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({items: newItems});
  }

  render() {
    const items = this.state.items.map((item, i) => (
      <div key={item} onClick={() => this.handleRemove(i)}>
        {item}
      </div>
    ));

    return (
      <div>
        <button className="btn" onClick={this.handleAdd}>Add Item</button>
        <CSSTransitionGroup
          transitionName="example1"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}>
          {items}
        </CSSTransitionGroup>
        <button style={{marginRight: '5px'}} className="btn danger" onClick={() => this.handleDecrement()}><i className="material-icons">exposure_neg_1</i></button>
        <span style={{fontSize: '20px', fontStyle: 'bold'}}>{this.state.count}</span>
        <button style={{marginLeft: '5px'}} className="btn danger" onClick={() => this.handleIncrement()}><i className="material-icons">exposure_plus_1</i></button>
      </div>
    );
  }
}

export default todoList;