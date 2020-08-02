import React, {Component} from "react";

class Film extends Component{

  render(){

    const filmContainer = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      borderStyle:'solid',
      borderColor:'orange',
      fontFamily: 'times-roman',
      fontSize: '10',
      margin:'5px'
    };
    return(
      <div className="film" style = {filmContainer}>
      <h4>{this.props.children}</h4>
      <p>{this.props.name}</p>
      </div>
    )
  }
}
export default Film;
