import React, { Component } from 'react';

import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Project from './Project';

class ProjectList extends Component {
  render() {
    return (
      <div>
        <Typography variant="h4">My Projects</Typography>
        {this.props.projects.map(project => (
          <Project data={project} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projects
});

export default connect(mapStateToProps)(ProjectList);
