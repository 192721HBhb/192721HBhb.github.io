import React, { Component } from 'react';

class TestStateChild extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      testA: props.testA, 
    }
  }

  render() {
    const { testA } = this.state;
    //console.log(this.props);
    return (
      <div>
        {testA}
      </div>
    );
  }
}

export default TestStateChild;