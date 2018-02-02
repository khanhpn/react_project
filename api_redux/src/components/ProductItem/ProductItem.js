import React, { Component } from 'react'

class ProductItem extends Component {
  render() {
    return (
      <tr>
        <td>1</td>
        <td>1</td>
        <td>iphone 6</td>
        <td>1000</td>
        <td>
          <span className="label label-danger">InStock</span>
        </td>
        <td>
          <button type="button" className="btn btn-danger mgr-10">Edit</button>
          <button type="button" className="btn btn-warning">Delete</button>
        </td>
      </tr>
    )
  }
}

export default ProductItem;
