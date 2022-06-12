import React from "react";

// Class Type Component
class App extends React.Component {

  constructor(props){
    super(props);
    console.log("hellow");
  } // 생성자

  componentDidMount(){
    console.log('component Did Mount');
  } // 컴포넌트가 생성되고 실행됨

  componentDidUpdate(){
    console.log('component Did Update');
  } // 컴포넌트가 수정되면 실행됨

  componentWillUnmount(){
    console.log('Goodbye, cruel World');
  } // 컴포넌트가 화면에서 삭제되면 실행됨

  state = {
    count : 0,
  };

  add = () => {
    this.setState(current => ({count : current.count + 1,
    }));
  };
  
  minus = () => {
    this.setState(current => ({count : current.count - 1
    }));
    
  }; 

  render() {
    console.log("render"); // 랜더링.
    return (
      <div>
        <h1>the Number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;