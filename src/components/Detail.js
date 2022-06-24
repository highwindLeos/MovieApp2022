import React from "react";
import '../css/Detail.css'

// Class Type Component 
class Detail extends React.Component {
    
    componentDidMount(){

        const {location, history} = this.props;
        if (location.state === undefined) {
            history.push('/');
        }
        
    }

    render(){

        const { location } = this.props;
        if (location.state) {
            const movieDetail = location.state;
            return (
                    <div className="movie__detail">
                        <img src={movieDetail.poster} alt={movieDetail.title} />
                        <div className="movie__data">
                            <h3 className="movie__title">{movieDetail.title}</h3>
                            <h5 className="movie__year">{movieDetail.year}</h5>
                            <ul className="movie__genres">
                                {movieDetail.genres.map((genre, index) => {
                                    return <li key={index} className="movie__genre">{genre}</li>
                                })}
                            </ul>
                            <hr/>
                            <p className="movie__summary">{movieDetail.summary}</p>
                        </div>
                    </div>
                   )
        } else {
            return null;
        }

    } // END render()

}

export default Detail;