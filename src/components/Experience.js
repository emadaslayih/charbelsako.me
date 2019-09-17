import React from 'react'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import styles from './styles'
import Moment from 'react-moment'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}))

function Experience(props) {
  const classes = useStyles()

  return (
    <Container maxWidth="md">
      <Paper className={classes.root} style={styles.card}>
        <Typography variant="h4" paragraph>
          Work Experience
        </Typography>
        {props.experience.map(exp => (
          <React.Fragment>
            <Typography variant="body1">
              {exp.title} <b>@ {exp.company}</b>{' '}
            </Typography>
            <Typography variant="body1" style={styles.paragraph}>
              <strong> Start date{': '}</strong>
              <Moment date={exp.startDate} format="MMMM YYYY" />
            </Typography>
            <Typography variant="body1" style={styles.paragraph}>
              <strong> End date{': '}</strong>
              <Moment date={exp.endDate} format="MMMM YYYY" />
            </Typography>
          </React.Fragment>
        ))}
      </Paper>
    </Container>
  )
}

const mapStateToProps = state => ({
  experience: state.experience
})

export default connect(mapStateToProps)(Experience)
