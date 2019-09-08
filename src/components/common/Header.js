import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';

import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';

// Router import
import Link from 'react-router-dom/Link';

// Icon imports
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import ContactIcon from '@material-ui/icons/Contacts';
import SchoolIcon from '@material-ui/icons/School';
import logo from './../../images/logo.png';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  hide: {
    display: 'none'
  },
  root: {
    flexGrow: 1
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  // appBarShift: {
  //   width: `calc(100% - ${drawerWidth}px)`,
  //   marginLeft: drawerWidth,
  //   transition: theme.transitions.create(['margin', 'width'], {
  //     easing: theme.transitions.easing.easeOut,
  //     duration: theme.transitions.duration.enteringScreen
  //   })
  // },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  // contentShift: {
  //   transition: theme.transitions.create('margin', {
  //     easing: theme.transitions.easing.easeOut,
  //     duration: theme.transitions.duration.enteringScreen
  //   }),
  //   marginLeft: 0
  // },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  link: { textDecoration: 'none', color: 'black' }
}));

export default function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  function toggleNavigation() {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }

  return (
    <header>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <IconButton
            onClick={toggleNavigation}
            edge="start"
            color="inherit"
            className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <img src={logo} className="center-logo logo" alt="" />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="left"
        open={open}
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper
        }}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={toggleNavigation}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <div
          role="presentation"
          onClick={toggleNavigation}
          onKeyDown={toggleNavigation}>
          <List>
            <ListItem button key="0">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <Link to="/" className={classes.link}>
                <ListItemText primary="Home" />
              </Link>
            </ListItem>

            <ListItem button key="1">
              <ListItemIcon>
                <SchoolIcon />
              </ListItemIcon>
              <Link to="/certification" className={classes.link}>
                <ListItemText primary="Certifications" />
              </Link>
            </ListItem>

            <ListItem button key="1">
              <ListItemIcon>
                <ContactIcon />
              </ListItemIcon>
              <Link to="/contact" className={classes.link}>
                <ListItemText primary="Contact Me" />
              </Link>
            </ListItem>
          </List>
        </div>
      </Drawer>
    </header>
  );
}
