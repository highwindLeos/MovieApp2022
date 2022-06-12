import React from "react";
import PropsTypes from "prop-types";
import '../css/Movie.css'

// function Type Component 
function Movie({title, year, summary, poster, genres}) {
    return (
        <div className="movie">
            <img src={poster} alt={title} />
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">
                    {genres.map((genre, index) => {
                        return <li key={index} className="movie__genre">{genre}</li>
                    })}
                </ul>
                <p className="movie__summary">{summary.slice(0, 180)}...</p>
            </div>
        </div>
    )
}

Movie.propTypes = { 
    year : PropsTypes.number.isRequired ,
    title : PropsTypes.string.isRequired ,
    summary : PropsTypes.string.isRequired ,
    poster : PropsTypes.string.isRequired ,
    genres : PropsTypes.arrayOf(PropsTypes.string).isRequired ,
};

export default Movie;