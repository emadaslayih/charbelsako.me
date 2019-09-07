import React from 'react';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';

//colors
import indigo from '@material-ui/core/colors/indigo';

const styles = {
  link: {
    color: 'white',
    textDecoration: 'none'
  },
  footer: {
    backgroundColor: indigo[500],
    padding: 20,
    color: 'white'
  },
  listItem: { padding: 0 }
};

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
      </List>
    </div>
  );
}
