import React, { Component } from 'react'

export default class Product extends Component {
  onAddCart(info) {
    console.log(info.name);
  }

  onAddCart1 = () => {
    console.log(this.props.name);
  }

  render() {
    var info = this.props;
    return (
      <div>
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <div className="thumbnail">
            <img data-src="#" alt="" />
            <div className="caption">
              <h3>{info.name}</h3>
              <p>
                {info.price}
              </p>
              <p>
                <button type="button" className="btn btn-warning" onClick={() => this.onAddCart(info)}>Add cart</button>
                <button type="button" className="btn btn-warning" onClick={this.onAddCart1}>Add cart</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
