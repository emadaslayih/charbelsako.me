import React, { Component } from 'react'
import styles from './styles'
import Container from '@material-ui/core/Container'

export default class Contact extends Component {
  state = {
    name: 'Charbel',
    company: '',
    email: '',
    jobType: '',
    comment: ''
  }

  render() {
    return (
      <Container maxWidth="md" style={styles.content}>
        Contact me {this.state.name}
      </Container>
    )
  }
}
