import React from 'react'
import SrPopover from '../SrPopover'
import NotificationsIcon from '@material-ui/icons/Notifications';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {withStyles, Divider} from '@material-ui/core'
import {styles} from './styles'

function AlPopover(props){
    const {classes}= props;
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
                <NotificationsIcon />
            </IconButton>
            <SrPopover anchorEl={anchorEl} handleClose={handleClose} >
                <div className={classes.root}>
                    <Typography gutterBottom variant="h6" component="h2">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                    <Divider className={classes.divider}/>
                </div>
            </SrPopover>
        </React.Fragment>
    )
}
export default withStyles(styles)(AlPopover);