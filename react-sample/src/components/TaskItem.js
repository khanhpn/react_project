import React, { Component } from 'react'

export default class TaskItem extends Component {
  onHandleEdit = (event) => {
    console.log("object");
  }

  onHandleRemove = (id) => {
    this.props.onHandleRemoveJob(id);
  }

  onHandleStatus = (id) => {
    this.props.onChangeStatus(id);
  }

  onHandleEdit = (id) => {
    this.props.onHandleEditJob(id);
  }

  render() {
    let { task, index } = this.props;
    return (
      <tr>
        <td>{index}</td>
        <td>{task.name}</td>
        <td className="text-center">
          <span onClick={() => this.onHandleStatus(task.id)} className={task.status ? "label label-success" : "label label-warning"}>{task.status ? "Active" : "Hide"}</span>
        </td>
        <td className="text-center">
          <button type="button" className="btn btn-warning" onClick={() => this.onHandleEdit(task.id)}><span className="fa fa-pencil mr-5"></span>Sửa</button>&nbsp;
          <button type="button" className="btn btn-danger" onClick={() => this.onHandleRemove(task.id)}><span className="fa fa-trash mr-5"></span>Xóa</button>
        </td>
      </tr>
    )
  }
}
