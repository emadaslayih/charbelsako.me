import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Drawer from '@material-ui/core/Drawer'

import List from '@material-ui/core/List'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListItem from '@material-ui/core/ListItem'

// Router import
import { Link } from 'react-router-dom'

// Icon imports
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'
import ContactIcon from '@material-ui/icons/Contacts'
import SchoolIcon from '@material-ui/icons/School'
import logo from './../../images/logo.png'

import deepPurple from '@material-ui/core/colors/deepPurple'

import { OPEN_MENU, CLOSE_MENU } from '../../actions'
import { connect } from 'react-redux'

const drawerWidth = 240

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
    }),
    backgroundColor: deepPurple[800]
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
}))

function Header(props) {
  const classes = useStyles()
  const theme = useTheme()
  // const [open, setOpen] = React.useState(false);

  function toggleNavigation() {
    if (props.open) {
      props.dispatch({ type: CLOSE_MENU, payload: { open: false } })
    } else {
      props.dispatch({ type: OPEN_MENU, payload: { open: true } })
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
        open={props.open}
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
            <Link to="/" className={classes.link}>
              <ListItem button key="0">
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
            </Link>

            <Link to="/certification" className={classes.link}>
              <ListItem button key="1">
                <ListItemIcon>
                  <SchoolIcon />
                </ListItemIcon>
                <ListItemText primary="Certifications" />
              </ListItem>
            </Link>

            <Link to="/contact" className={classes.link}>
              <ListItem button key="1">
                <ListItemIcon>
                  <ContactIcon />
                </ListItemIcon>
                <ListItemText primary="Contact Me" />
              </ListItem>
            </Link>
          </List>
        </div>
      </Drawer>
    </header>
  )
}

const mapStateToProps = state => ({
  open: state.menu.open
})

export default connect(mapStateToProps)(Header)
