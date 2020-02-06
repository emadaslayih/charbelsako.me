import React from 'react'
import { Container } from '@material-ui/core'

export default function BackgroundImage(props) {
  return (
    <Container
      style={{
        width: '100%',
        height: '65vh',
        overflow: 'hidden',
        padding: 0,
        margin: 0
      }}
      maxWidth="xl">
      <img
        src={props.image}
        alt=""
        style={{
          objectFit: 'cover',
          width: '100%',
          height: 'auto'
        }}
      />
    </Container>
  )
}
