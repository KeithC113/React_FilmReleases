import React, {Component} from "react";

class Film extends Component{

  render(){
    return(
      <div className="film">
      <h4>{this.props.children}</h4>
      <p>{this.props.name}</p>
      </div>
    )

  }

}
export default Film;
