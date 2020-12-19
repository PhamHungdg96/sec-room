import React from 'react';
import {IconButton, withStyles} from '@material-ui/core'
import './Compose.css';

const styles = theme=>({
  compose:{
    padding: "10px",
    display: 'flex',
    alignItems: 'center',
    background: 'white',
    borderTop: '1px solid #eeeef1',
    position: 'fixed',
    width: '100%',
    bottom: '0px',
    [theme.breakpoints.up('sm')]:{
      width: 'calc(100% - 256px)'
    }
  }
})
function Compose(props) {
    const {mobileOpen, classes}=props
    console.log('mobileOpen: ', mobileOpen)
    return (
      <div className={classes.compose}>
        <input
          type="text"
          className="compose-input"
          placeholder="Type a message, @name"
        />
        {
          props.rightItems.map((v,id)=>(
          <IconButton color="primary" aria-label="upload picture" component="span" key={id}>{v}</IconButton>
          ))
        }
      </div>
    );
}
export default withStyles(styles)(Compose)