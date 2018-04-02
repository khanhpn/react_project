import React, { Component } from 'react'

export default class TaskItem extends Component {
  render() {
    let { task, index } = this.props;
    return (
      <tr>
        <td>{index}</td>
        <td>{task.name}</td>
        <td className="text-center">
          <span className={task.status ? "label label-success" : "label label-warning"}>{task.status ? "Active" : "Hide"}</span>
        </td>
        <td className="text-center">
          <button type="button" className="btn btn-warning"><span className="fa fa-pencil mr-5"></span>Sửa</button>&nbsp;
          <button type="button" className="btn btn-danger"><span className="fa fa-trash mr-5"></span>Xóa</button>
        </td>
      </tr>
    )
  }
}
