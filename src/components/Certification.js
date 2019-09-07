import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

const styles = { container: { marginTop: 70, textAlign: 'center' } };

export default class Certification extends Component {
  render() {
    return (
      <Typography style={styles.container} variant="h3">
        Certifications
      </Typography>
    );
  }
}
