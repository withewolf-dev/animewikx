import React from "react";
import {
  makeStyles,
} from "@material-ui/core/styles";
import {AppBar,Toolbar} from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import DarkModeToggle from "react-dark-mode-toggle";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();
 
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            A N I M I X
          </Typography>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
