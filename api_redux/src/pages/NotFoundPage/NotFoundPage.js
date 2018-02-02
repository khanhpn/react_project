import React, { Component } from 'react'

class NotFoundPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="alert alert-warning">
            <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
            <strong>Not found this page</strong>
        </div>
      </div>
    )
  }
}

export default NotFoundPage;
