import React from 'react'
import Typography from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import ListItemText from '@material-ui/core/ListItemText'
import styles from '../styles'
//colors

export default function Footer() {
  return (
    <div style={styles.footer}>
      <Typography variant="subtitle2" style={{ textAlign: 'center' }}>
        Copyright 2019
      </Typography>
      <List>
        <ListItem style={styles.listItem}>
          <ListItemText>
            <Typography variant="subtitle2">
              <a style={styles.link} href="https://github.com/charbelsako">
                Github account
              </a>
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem style={styles.listItem}>
          <ListItemText>
            <Typography variant="subtitle2">
              <a style={styles.link} href="https://instagram.com/charbelsako">
                Instagram account
              </a>
            </Typography>
          </ListItemText>
        </ListItem>
        {/* Linked in profile */}
        <ListItem style={styles.listItem}>
          <ListItemText>
            <Typography variant="subtitle2">
              <a
                style={styles.link}
                href="https://www.linkedin.com/in/charbel-sarkis-b3b978172/">
                Linked In
              </a>
            </Typography>
          </ListItemText>
        </ListItem>
        {/* Stackoverflow */}
        <ListItem style={styles.listItem}>
          <ListItemText>
            <Typography variant="subtitle2">
              <a
                style={styles.link}
                href="https://stackoverflow.com/users/9124091/charbel-sarkis">
                Stackoverflow
              </a>
            </Typography>
          </ListItemText>
        </ListItem>
        {/* Udemy */}
        <ListItem style={styles.listItem}>
          <ListItemText>
            <Typography variant="subtitle2">
              <a
                style={styles.link}
                href="https://www.udemy.com/user/charbel-sarkis/">
                Udemy Profile
              </a>
            </Typography>
          </ListItemText>
        </ListItem>
      </List>
    </div>
  )
}
