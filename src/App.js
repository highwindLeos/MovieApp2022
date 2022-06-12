import React from "react";

// Class Type Component
class App extends React.Component {
  
  state = {
    isLoading : true,
    movies : [],
  }; // state 정의 : 변경될 데이터를 state 에 정의하여 서버통신 후 Front 에 출력하게됨

  componentDidMount(){ // Movie App 로딩을 실행 할 절차를 해당 함수에서 구현
    setTimeout(() =>{
      this.setState({ isLoading : false })
    }, 6000);
  } // 컴포넌트가 화면에 그려지고 실행됨

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? 'Loding...' : 'We are ready!'}</div>;
  }
}

export default App;