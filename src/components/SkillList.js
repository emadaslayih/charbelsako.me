import React from 'react';

import { connect } from 'react-redux';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import styles from './styles';

function SkillList(props) {
  return (
    <div>
      <Container maxWidth="md">
        <Card style={styles.card}>
          <CardContent>
            <Typography variant="h4" paragraph>
              Skills
            </Typography>
            {props.skillList.map((skill, index) => (
              <Typography variant="body2" key={index}>
                {skill}
              </Typography>
            ))}
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

const mapStateToProps = state => ({
  skillList: state.skills.skillList
});

export default connect(mapStateToProps)(SkillList);
