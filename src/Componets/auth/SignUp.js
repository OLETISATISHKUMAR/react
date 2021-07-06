import React, { Component } from "react";
import TextFeild from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Grid, Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

export class SignUp extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  onSubmit = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handelChange = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="card">
        <Grid>
          <Paper elevation={10} className="paper">
            <form onSubmit={this.onSubmit} className="form">
              <Typography variant="h3" align="center" className="h3">
                Sign Up
              </Typography>
              <br></br>
              <br></br>
              <div>
                <TextFeild
                  color="primary"
                  variant="outlined"
                  onChange={this.handelChange}
                  label="first name *"
                  width="100"
                  className="textField"
                />{" "}
                <TextFeild
                  color="primary"
                  variant="outlined"
                  onChange={this.handelChange}
                  label="last name *"
                  width="100"
                />
              </div>
              <br></br>
              <div>
                <TextFeild
                  color="primary"
                  variant="outlined"
                  onChange={this.handelChange}
                  label=" email *"
                  className="email "
                />
              </div>
              <br></br>
              <div>
                <TextFeild
                  color="primary"
                  variant="outlined"
                  onChange={this.handelChange}
                  label=" password *"
                  className="textField"
                />{" "}
                <TextFeild
                  color="primary"
                  variant="outlined"
                  onChange={this.handelChange}
                  label=" confirm password *"
                  width="100"
                  className="textField"
                />
              </div>
              <br />
              <br />
              <div className="btns">
                <Button variant="contained" color="primary">
                  sign up
                </Button>
              </div>
            </form>
          </Paper>
        </Grid>
      </div>
    );
  }
}

export default SignUp;
