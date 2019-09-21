import React from 'react'
import PropTypes from 'prop-types'
// Custom css
import styles from './styles'
// Material ui
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import Container from '@material-ui/core/Container'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Carousel from './Carousel'

import { withStyles } from '@material-ui/core/styles'

import grey from '@material-ui/core/colors/grey'
import lightBlue from '@material-ui/core/colors/lightBlue'

const githubColor = grey[900]
const liveColor = lightBlue[900]

const GithubButton = withStyles(theme => ({
  root: {
    backgroundColor: githubColor,
    '&:hover': {
      backgroundColor: grey[800]
    }
  }
}))(Button)

const WebsiteButton = withStyles(theme => ({
  root: {
    backgroundColor: liveColor,
    '&:hover': {
      backgroundColor: lightBlue[800]
    }
  }
}))(Button)

function Project(props) {
  const { title, description, code, live, sliderInfo } = props.data

  return (
    <Container maxWidth="md" style={styles.content}>
      <Card style={styles.card}>
        <CardContent>
          <Typography variant="h5" paragraph>
            {title}
          </Typography>
          {/* Custom made carousel */}
          <Carousel sliderInfo={sliderInfo} />
          <Typography component="p">{description}</Typography>
        </CardContent>
        <CardActions style={styles.center}>
          <GithubButton color="primary" variant="contained">
            <a href={code} style={styles.link}>
              View Code
            </a>
          </GithubButton>
          <WebsiteButton
            color="primary"
            variant="contained"
            style={{ marginLeft: 'auto' }}>
            <a href={live} style={styles.link}>
              View Live
            </a>
          </WebsiteButton>
        </CardActions>
      </Card>
    </Container>
  )
}

Project.propTypes = {
  data: PropTypes.object.isRequired
}

export default Project
