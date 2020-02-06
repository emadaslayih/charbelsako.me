import React from 'react'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Email from '@material-ui/icons/Email'
import Comment from '@material-ui/icons/Comment'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}))

export default function InputTextField(props) {
  const classes = useStyles()

  return (
    <TextField
      value={props.value}
      name={props.id}
      id={props.id}
      type={props.type}
      onChange={props.onChange}
      className={classes.margin}
      label={props.label}
      placeholder={props.placeholder}
      multiline={props.multiline}
      rows={4}
      variant="outlined"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {props.icon === 'account' && <AccountCircle />}
            {props.icon === 'email' && <Email />}
            {props.icon === 'comment' && <Comment />}
          </InputAdornment>
        )
      }}
    />
  )
}
