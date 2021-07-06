import React, { Component } from "react";
import TextFeild from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Grid, Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

export class SignIn extends Component {
  state = {
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
                Sign In
              </Typography>
              <br></br>
              <br></br>
              <div className="textField_S">
                <TextFeild 
                  color="primary"
                  variant="outlined"
                  onChange={this.handelChange}
                  label="email *"
                  fullWidth
                />
              </div>
              <br></br>
              <div className="textField_S">
                <TextFeild
                  color="primary"
                  variant="outlined"
                  onChange={this.handelChange}
                  label="enter password *"
                  align="center"
                  fullWidth
                />
              </div>
              <br />
              <br />
              <div className="btns">
                <Button variant="contained" color="primary" className="btn_S">
                  sign in
                </Button>
              </div>
            </form>
          </Paper>
        </Grid>
      </div>
    );
  }
}

export default SignIn;
