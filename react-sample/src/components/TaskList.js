import React, { Component } from 'react'
import TaskItem from './TaskItem';

export default class TaskList extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      filterName: '',
      filterStatus: -1 // 0: deactive, 1: active, -1: all
    }
  }

  onHandleFilter = (event) => {
    let name = event.target.name;
    let value = name === "filterName" ? event.target.value : parseInt(event.target.value);
    this.props.onHandleFilterTask(this.state);
    this.setState({
      [name]: value
    });
  }

  render() {
    let { tasks } = this.props;
    let elmTasks = tasks.map((task, index) => {
      return <TaskItem key={task.id}
        task={task} index={index} onChangeStatus={this.props.onChangeStatus}
        onHandleRemoveJob={this.props.onHandleRemoveJob}
        onHandleEditJob={this.props.onHandleEditJob} />
    });
    return (
      <div className="row mt-15">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th className="text-center">STT</th>
                <th className="text-center">Tên</th>
                <th className="text-center">Trạng Thái</th>
                <th className="text-center">Hành Động</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>
                  <input type="text" className="form-control" name="filterName" value={this.state.filterName} onChange={this.onHandleFilter} />
                </td>
                <td>
                  <select className="form-control" name="filterStatus" value={this.state.filterStatus} onChange={this.onHandleFilter} >
                    <option value={-1}>Tất Cả</option>
                    <option value={0}>Ẩn</option>
                    <option value={1}>Kích Hoạt</option>
                  </select>
                </td>
                <td></td>
              </tr>
              {elmTasks}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
