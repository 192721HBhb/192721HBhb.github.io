import React from 'react';
import TestStateChild from './childState.jsx';
class TestStateFather extends React.Component {
  constructor(props) {
    super(props);
    this.state = { testA: 1 };
    
  }
//   componentDidMount() {
//     // console.log(this.state);
//     // this.setState({ testA: this.state.testA + 1 }, () => {
//     //   console.log(this.state);
//     // }); 
//     console.log("执行·");
//   }
componentDidUpdate() {
    //console.log("执行·");
  }

  render() {
    const { testA } = this.state;
    return (
      <div className='all_box'>
        <button onClick={() => this.setState({ testA: testA + 1 })}>
          {testA}
        </button>
        <div>
        <TestStateChild testA={testA} />
        </div>
        
      </div>
    ); 
  }

}
export default TestStateFather;