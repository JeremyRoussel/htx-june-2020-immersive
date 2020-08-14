import React, { Component } from 'react'
import Stepper from './Stepper'

class Puppies extends Component {

    constructor(props) {
        super(props)
        this.state = {
            movies: []
        }
    }


    componentDidMount = async () => {
        let url = "https://raw.githubusercontent.com/RyanHemrick/star_wars_movie_app/master/movies.json"

        let response = await fetch(url);

        let results = await response.json();

        let movies = results.movies

        console.log(movies)

        this.setState({movies: movies}, () => {
          console.log('Movies Loaded')
        }
        )

        // console.log(movies)

    }

    display(movieList) {

        let urlPartial = "https://raw.githubusercontent.com/RyanHemrick/star_wars_movie_app/master/public/images/"

        let listMovies = movieList.map((item, index) => {

            return <li key={index} style={{ listStyleType: "none" }}>
                <h3>{item.title}</h3>
                <img src={urlPartial + item.poster} height="150px" />
                <Stepper key={index} />
                </li>
        })

        return listMovies
    }

  render() {

    let movies = this.state.movies

    return (
      <>
        <h1>Movies</h1>
        {this.display(movies)}
      </>
    )
  }
}

export default Puppies
