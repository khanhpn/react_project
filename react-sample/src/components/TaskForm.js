import React, { Component } from 'react'

export default class TaskForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      txtName: '',
      txtStatus: false
    };
  }

  onHandleReset = (event) => {
    event.preventDefault();
    this.setState({
      id: '',
      txtName: '',
      txtStatus: false
    })
  }

  onHandleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  componentWillMount = () => {
    let { task } = this.props;
    if (task) {
      this.setState({
        id: task.id,
        txtName: task.name,
        txtStatus: task.status
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    let { task } = nextProps;
    if (task) {
      this.setState({
        id: task.id,
        txtName: task.name,
        txtStatus: task.status
      });
    }
  }

  onHandleCloseForm = (value) => {
    this.props.onToggleForm(true);
  }

  onHandleSubmit = (event) => {
    event.preventDefault();
    this.props.onHandleSubmit(this.state);
    this.setState({
      txtName: '',
      txtStatus: false
    });
    this.onHandleCloseForm();
  }

  titleTaskForm() {
    if (this.state.id) {
      return "Sửa Công Việc";
    } else {
      return "Thêm Công Việc";
    }
  }

  titleTaskSubmit() {
    if (this.state.id) {
      return "Cập nhật";
    } else {
      return "Thêm";
    }
  }

  render() {
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">
            <span className="fa fa-plus mr-5" onClick={this.onHandleCloseForm}></span>&nbsp;{this.titleTaskForm()}</h3>
        </div>
        <div className="panel-body">
          <form>
            <div className="form-group">
              <label>Tên :</label>
              <input type="text" className="form-control" name="txtName" onChange={this.onHandleChange} value={this.state.txtName}/>
            </div>
            <label>Trạng Thái :</label>
            <select className="form-control" required="required" name="txtStatus" onChange={this.onHandleChange} value={this.state.txtStatus}>
              <option value={true}>Kích Hoạt</option>
              <option value={false}>Ẩn</option>
            </select>
            <br />
            <div className="text-center">
              <button type="submit" className="btn btn-warning" onClick={this.onHandleSubmit}>{this.titleTaskSubmit()}</button>&nbsp;
              <button type="submit" className="btn btn-danger" onClick={this.onHandleReset}>Hủy Bỏ</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
