import React, { Component } from 'react';
import { connect } from 'react-redux';
import Certification from './Certification';
import Typography from '@material-ui/core/Typography';

const styles = {
  container: {
    marginTop: 60,
    textAlign: 'center'
  }
};
class CertificationList extends Component {
  render() {
    const { certs } = this.props;
    return (
      <div style={styles.container}>
        <Typography variant="h1">Certifications</Typography>
        {certs.map((cert, index) => (
          <Certification data={cert} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  certs: state.certifications
});

export default connect(mapStateToProps)(CertificationList);
