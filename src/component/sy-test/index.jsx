import React from 'react';


class SyTest extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
     testA: 1,
    }; 
    this.testRef = React.createRef();
    this.test2Ref = React.createRef();
  }
  componentDidMount() {
    console.log(this.testRef.current.innerHTML); 
  }
  cs1=()=>{
    this.test2Ref.current.focus();
  }
render() {
    const { testA } = this.state;
    return (
      <div className='all_box'>
        <button ref={this.testRef}   onClick={this.cs1}>
        <input type="text" ref={this.test2Ref} />
        
           
           {testA}
        </button>
      </div>
    );
  }
}


export default SyTest;