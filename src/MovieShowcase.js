import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = (movieData) => {
    // map over your movieData array and return an array of the correct JSX
    // console.log("Generate Movie Card", movieData)
    return movieData.map(card => <MovieCard 
                                  title= {card.title}
                                  genres={card.genres}
                                  IMDBRating={card.IMDBRating}
                                  poster={card.poster}
                                  />)
    }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards(movieData)}
      </div>
    )
  }
}
