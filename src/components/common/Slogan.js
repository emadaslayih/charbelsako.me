import React from 'react'
import blue from '@material-ui/core/colors/blue'

export default function Slogan() {
  return (
    <div
      style={{
        position: 'absolute',
        top: '15vh',
        left: 15,
        color: blue[500],
        textShadow: '2px 2px 5px #0d47a1',
        fontFamily: 'Amaranth',
        textAlign: 'left',
        width: '100%'
      }}>
      <h1 style={{ font: 'Amaranth', fontSize: 48 }}>
        Delivering cutting edge web solutions, <br />
        for your business needs.
      </h1>
    </div>
  )
}
