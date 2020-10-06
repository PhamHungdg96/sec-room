import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import {styles} from './styles'
import AlPopover from '../popover/Alarm/AlPopover';
import UsPopover from '../popover/user/UsPopover';


function Header(props) {
  const { classes, onDrawerToggle } = props;
  return (
    <React.Fragment>
      <AppBar component="div" className={classes.secondaryBar} color="primary" position="static" elevation={0}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={1}>
            <Hidden smUp>
              <Grid item>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={onDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Hidden>
            <Grid item xs>
              <Typography color="inherit" variant="h4" component="h1">
                Sec-Room
              </Typography>
            </Grid>
            <Grid item>
              <AlPopover/>
            </Grid>
            <Grid item>
              <UsPopover/>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar component="div" color="info" position="static" elevation={0}
      >
        <Tabs value={0} textColor="inherit">
          <Tab textColor="inherit" label="Search" />
          <Tab textColor="inherit" label="Series" />
          <Tab textColor="inherit" label="Featured" />
          <Tab textColor="inherit" label="Videos" />
        </Tabs>
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func.isRequired,
};

export default withStyles(styles)(Header);
