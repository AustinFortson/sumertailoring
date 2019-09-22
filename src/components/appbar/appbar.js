import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './appbar.css';
import IMG1 from '../../components/images/IMG1.png'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" id="appBar">
        <Toolbar>
            <Button href="/">
            <img src={IMG1} alt="img" height="50px" id="home"/>
            </Button>

            <Button className={classes.menuButton} href="#about">
                <Typography id="aboutUs">
                    About Us
                </Typography>
            </Button>

            <Button className={classes.menuButton} href="#contact">
                <Typography id="contactUs">
                    Contact Us
                </Typography>
            </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}