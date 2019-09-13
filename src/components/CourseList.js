import React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function CourseList(props) {
  return (
    <Container maxWidth="md">
      <Typography variant="h4">Online Courses</Typography>
      {props.courseList.map(({ title }) => (
        <Typography variant="body1">{title}</Typography>
      ))}
    </Container>
  );
}

const mapStateToProps = state => ({
  courseList: state.courseList
});

export default connect(mapStateToProps)(CourseList);
