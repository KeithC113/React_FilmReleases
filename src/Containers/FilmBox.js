import React, {Component} from 'react';
import FilmList from '../Components/FilmList';
import "../App.css";

class FilmBox extends Component{
  constructor(props){
    super(props);
    this.state = {
      films: [
        {
          id: 1,
          name: "Spider-Man: Into the Spider-Verse",
          url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
        },
        {
          id: 2,
          name: "Life Itself",
          url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
        },
        {
          id: 3,
          name: "Mary Queen of Scots",
          url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
        },
        {
          id: 4,
          name: "The Lego Movie 2: The Second Part", url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
        },
        {
          id: 5,
          name: "Captain Marvel",
          url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
        }
      ]

    }

  };

  render(){
    const filmBoxContatiner = {
      width:'500px',
      borderStyle:'solid',
      borderColor:'blue',
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingLeft: '16px',
      paddingRight: '16px'

    };
    return(
    <div className ="film-box" style = {filmBoxContatiner}>
      <h2 style = {{color:'red', textAlign:'center'}}> Upcoming Film Releases for UK </h2>
      <FilmList films={this.state.films}/>
    </div>
    )
  }

}

export default FilmBox;
