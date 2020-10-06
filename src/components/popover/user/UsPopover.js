import React from 'react'
import SrPopover from '../SrPopover'
import {IconButton} from '@material-ui/core';
import {List, ListItem, ListItemText, withStyles} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import {styles} from './styles';

function AlPopover(props){
    const {classes}=props
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClickInfo=(event)=>{
        setAnchorEl(event.currentTarget)
    }
    const handleClose=()=>{
        setAnchorEl(null);
    }
    return (
        <React.Fragment>
            <IconButton color="inherit" onClick={handleClickInfo}>
                <Avatar src="/static/images/avatar/1.jpg" alt="My Avatar" />
              </IconButton>
            <SrPopover anchorEl={anchorEl} handleClose={handleClose} >
                <List disablePadding={true}>
                <Link to='#' className={classes.item}>
                    <ListItem style={{padding:'2px 8px'}} button>
                        <ListItemText>
                            Sign In
                        </ListItemText>
                    </ListItem>
                </Link>
                <Link to='#' className={classes.item}>
                    <ListItem style={{padding:'2px 8px'}} button>
                        <ListItemText>
                            Sign Out
                        </ListItemText>
                    </ListItem>
                </Link>
                </List>
            </SrPopover>
        </React.Fragment>
    )
}
export default withStyles(styles)(AlPopover);