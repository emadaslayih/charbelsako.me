import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { Button } from '@material-ui/core';

const styles = {
  container: { marginTop: 70, textAlign: 'center' },
  card: { margin: 20, padding: 20 },
  // needs to be reused
  link: { color: 'white', textDecoration: 'none' },
  center: { justifyContent: 'center' },
  media: { height: 140 }
};

class Certification extends Component {
  render() {
    const { link, title, description } = this.props.data;
    let { image } = this.props.data;

    if (!image) {
      image = '/assets/images/no-image-wider.jpeg';
    }

    return (
      <Container maxWidth="md" style={styles.container}>
        <Card style={styles.card}>
          <CardActionArea>
            <CardMedia style={styles.media} image={image} title={title} />
            <CardContent>
              <Typography variant="h5">{title}</Typography>
              <Typography component="p">{description}</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions style={styles.center}>
            <Button color="primary" variant="contained">
              <a href={link} style={styles.link}>
                View Certificate Page
              </a>
            </Button>
            {/* <Button color="primary" variant="contained">
              View Code
            </Button> */}
            {/* <Button
              color="primary"
              variant="contained"
              style={{ marginLeft: 'auto' }}>
              View Live
            </Button> */}
          </CardActions>
        </Card>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  certs: state.certifications
});

export default connect(mapStateToProps)(Certification);
