import React, { Component } from 'react'

import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography'
import Project from './Project'

class ProjectList extends Component {
  render() {
    return (
      <div>
        <Typography variant="h4">My Projects</Typography>
        {this.props.projectList.map((project, index) => (
          <Project data={project} key={index} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  projectList: state.projects.projectList
})

export default connect(mapStateToProps)(ProjectList)
