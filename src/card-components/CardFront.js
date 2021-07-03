import React, { Component } from 'react';

export default class CardFront extends Component {

  render() {
    console.log(`url(${this.props.poster})`)
    return (
      <div className="card-front"
          style={{backgroundImage: `url(${this.props.poster})`}}>
          {/* style={{backgroundImage: `url(${this.props.poster})`}}> */}
      </div>
    )
  }
}
