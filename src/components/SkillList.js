import React from 'react';

import { connect } from 'react-redux';

import Typography from '@material-ui/core/Typography';

function SkillList(props) {
  return (
    <div>
      {props.skills.map(skill => (
        <Typography variant="body2">{skill}</Typography>
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  skills: state.skills
});

export default connect(mapStateToProps)(SkillList);
