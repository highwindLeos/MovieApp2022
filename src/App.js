import React from "react";
import axios from "axios";
import Movie from "./Movie";
import './App.css'

// Class Type Component
class App extends React.Component {
  
  state = {
    isLoading : true,
    movies : [],
  }; // state 정의 : 변경될 데이터를 state 에 정의하여 서버통신 후 Front 에 출력하게됨

  getMovies = async() => {
    const {
      data : {
        data : { movies },
      },
    } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating'); // 모든 응답을 대기함

    this.setState({movies, isLoading : false}); // 스테이트 배열에 객체 값을 세팅
  }
  componentDidMount(){ // Movie App 로딩을 실행 할 절차를 해당 함수에서 구현
    this.getMovies()
  } // 컴포넌트가 화면에 그려지고 실행됨

  render() {
    const { isLoading, movies } = this.state;
    return (
    <section class="container">
      { isLoading ? (
        <div className="loader">
          <span className="loader__text">Lording...</span>
        </div>
      ) : (
        <div className="movies">
          {movies.map(movie => (
            <Movie 
            key={movie.id} 
            id={movie.id} 
            year={movie.year} 
            title={movie.title} 
            summary={movie.summary} 
            poster={movie.medium_cover_image} /> 
            // API 서버의 resoponse Data를  state 설정하고 값들을 prorps 을 Movie Component 에 전달
          ))}
        </div>
      )} 
    </section>
    )
  }
}

export default App;