import React from 'react';
import {withStyles, Grid, Paper, Typography, LinearProgress,ButtonBase} from '@material-ui/core'
import {styles} from './styles'
import { Link } from 'react-router-dom';

const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 15,
      borderRadius: 15,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 15,
      backgroundColor: '#28a745',
    },
  }))(LinearProgress);


function RoomItem(props){
    const {classes}=props
    const {logo, name, description}=props
    return(
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={1}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="complex" src={logo} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                {name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                {description}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={2}>
                            <BorderLinearProgress variant="determinate" value={50}/>
                        </Grid>
                    </Grid>
                </Grid>
                <div className={classes.footer}>
                    <ButtonBase className={classes.tag}>linux</ButtonBase>
                </div>
            </Paper>
        </div>
    )
}
export default withStyles(styles)(RoomItem)