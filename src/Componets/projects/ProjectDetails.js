import React from "react";

function ProjectDetails(props) {
    const id = props.match.params.id;
  return (
    <div>
      <div>
        <span>
          <h1>Project Title -{id}</h1>
        </span>
        <p>
          This is my first React project. The poject name is Prakruthi.It tell
          about the post of User and when did they post what content they post.
        </p>
      </div>
      <hr/>
      <div>
        <span>
          <h3>Prakruthi.</h3>
        </span>
        <p>Posted by O.satish kumar</p>
        <p>May 30th 2021. </p>
      </div>
    </div>
  );
}
export default ProjectDetails;
