import React, {Component} from "react";
import Film from './Film';

class FilmList extends Component{

  render(){
    const filmListContainer = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%'
    };
    const filmNodes = this.props.films.map(film =>{
      // return (
      //   <Film name={film.name} key={film.id}>{film.url}</Film>
      // )

      return (
        <Film name={film.name} key={film.id}>{film.url}</Film>
      )
    })
    return (
      <div className="film-list" style = {filmListContainer}>
      {filmNodes}
      <a href="https://www.imdb.com/calendar/?region=gb">View more upcoming releases </a>
      </div>
    )
  }

}

export default FilmList;
