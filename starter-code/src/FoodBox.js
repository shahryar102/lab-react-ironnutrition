import React, { Component } from "react";

class FoodBox extends Component {

  state = { ...this.props }

  changeTheQuantity = (e) => {
    
    this.setState({
      'quantity': e.target.value,
    })
  }


  render() {
    return (
      <div className="box">
        {Math.random()}
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.name}</strong> <br />
                <small>{this.props.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number" name={this.props.name} defaultValue={this.props.quantity} onChange={this.changeTheQuantity}/>
              </div>
              <div className="control">
                <button className="button is-info" onClick={(e) => this.props.updateFoodList(this.state)} >+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default FoodBox;