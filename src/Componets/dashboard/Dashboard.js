import React, { Component } from "react";
import Notification from "./Notification";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    // console.log(this.props);
    const { projects } = this.props;
    return (
      <div>
        <div className="row">
          <div>
            <ProjectList projects={projects} />
          </div>
          <div>
            <Notification />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.project.projects,
  };
};

export default connect(mapStateToProps)(Dashboard);
