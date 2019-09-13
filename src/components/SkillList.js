import React from 'react';

import { connect } from 'react-redux';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function SkillList(props) {
  return (
    <Container maxWidth="md">
      <Typography variant="h4">Skills</Typography>
      {props.skillList.map(skill => (
        <Typography variant="body2">{skill}</Typography>
      ))}
    </Container>
  );
}

const mapStateToProps = state => ({
  skillList: state.skillList
});

export default connect(mapStateToProps)(SkillList);
