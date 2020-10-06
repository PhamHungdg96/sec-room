import React from 'react';
import clsx from 'clsx';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {IconContext} from 'react-icons'

import {menus} from './DataNavigator'
import { withStyles } from '@material-ui/core';
import {styles} from './styles'

function Navigator(props){
  const { classes, ...other } = props;
  return (
    <IconContext.Provider value={{ color: '#fff' }}>
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem className={clsx(classes.firebase, classes.item, classes.itemmenularge)}>
          Sec-room
        </ListItem>
        {menus.map(( item, id ) => {
          console.log(item)
          if(item.children === undefined){
            return (
              <React.Fragment key={id}>
              <ListItem key={id} button className={clsx(classes.item,classes.itemActiveItem)}>
                <ListItemIcon className={classes.itemIcon}>{item.icon}</ListItemIcon>
                <ListItemText classes={{ primary: classes.itemPrimary, }} >
                  {item.id}
                </ListItemText>
              </ListItem>
              <Divider className={classes.divider} />
              </React.Fragment>
            )
          }else{
            return(
              <React.Fragment key={id}>
                <ListItem className={classes.menuHeader}>
                  <ListItemText classes={{ primary: classes.menuHeaderPrimary, }} >
                    {item.id}
                  </ListItemText>
                </ListItem>
                {item.children.map((chilval, chilid) => (
                  <ListItem key={chilid} button className={clsx(classes.item)} >
                    <ListItemIcon className={classes.itemIcon}>{chilval.icon}</ListItemIcon>
                    <ListItemText classes={{ primary: classes.itemPrimary, }} >
                      {chilval.id}
                    </ListItemText>
                  </ListItem>
                ))}

                <Divider className={classes.divider} />
              </React.Fragment>
            )
          }

        })}
      </List>
    </Drawer>
    </IconContext.Provider>
  );
}

export default withStyles(styles)(Navigator);