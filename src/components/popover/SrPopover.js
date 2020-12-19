import React from 'react'
import {Popover, Card} from '@material-ui/core'
import {styles} from './styles'
import {withStyles} from '@material-ui/core'

function SrPopover(props){
    const { classes, children, anchorEl, handleClose} = props;
    
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
            }}
            transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
            }}
        >
            <Card className={classes.root}>
                {children}
            </Card>
        </Popover>
    )

}
export default withStyles(styles)(SrPopover)