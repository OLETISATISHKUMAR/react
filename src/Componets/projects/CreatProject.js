import React, { Component } from "react";
import TextFeild from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Grid, Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

import { connect } from "react-redux";
import { createProject } from "../../redux/Actions/createAction";

export class CreatProject extends Component {
  state = {
    title: "",
    content: "",
  };

  onSubmit = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handelChange = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createProject(this.state);
  };

  render() {
    return (
      <div className="card">
        <Grid>
          <Paper elevation={10} className="paper_T">
            <form onSubmit={this.onSubmit} className="form">
              <Typography variant="h3" align="center" className="h3">
                Creat New project
              </Typography>
              <br></br>
              <br></br>
              <div className="textField_T">
                <TextFeild
                  color="primary"
                  variant="outlined"
                  onChange={this.handelChange}
                  label="Enter your Title"
                />
              </div>
              <br></br>
              <div>
                <TextareaAutosize
                  rowsMax={10}
                  aria-label="maximum height"
                  placeholder="write here...."
                  className="textarea"
                />
              </div>
              <br />
              <br />
              <div className="btn_T">
                <Button variant="contained" color="primary">
                  Create
                </Button>
              </div>
            </form>
          </Paper>
        </Grid>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project)),
  };
};

export default connect(null, mapDispatchToProps)(CreatProject);
