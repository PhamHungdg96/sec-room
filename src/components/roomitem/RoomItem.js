import React from 'react';
import {withStyles, Grid, Paper, Typography, LinearProgress} from '@material-ui/core'
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
    const tile={
        img:'images/plant.jpg',
        title:'image'
    }
    return(
        <div>
            <Grid container spacing={1}>
                <Grid item xs={6} >
                <Paper className={classes.paper} elevation={1}>
                    <Grid container spacing={0}>
                        <Grid item xs={3}>
                            <img src={tile.img} alt={tile.title} className={classes.img}/>
                        </Grid>
                        <Grid item xs={9}>
                            <div className={classes.processing}>
                                <BorderLinearProgress variant="determinate" value={50}/>
                            </div>
                            <div className={classes.Content}>
                                <Typography variant="h6" gutterBottom>
                                    Heading
                                </Typography>
                                <Typography variant="body1" gutterBottom style={{textAlign:"left"}}>
                                    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                                    unde suscipit, quam beatae rerum inventore consectetur...
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container className={classes.action}>
                        <Link to="#" className={classes.actionLink}>action</Link>
                        <span className={classes.views}>289.789</span>
                    </Grid>
                </Paper>
                </Grid>
                <Grid item xs={6} >
                <Paper className={classes.paper} elevation={1}>
                    <Grid container spacing={0}>
                        <Grid item xs={3}>
                            <img src={tile.img} alt={tile.title} className={classes.img}/>
                        </Grid>
                        <Grid item xs={9}>
                            <div className={classes.processing}>
                                <BorderLinearProgress variant="determinate" value={50}/>
                            </div>
                            <div className={classes.Content}>
                                <Typography variant="h6" gutterBottom>
                                    Heading
                                </Typography>
                                <Typography variant="body1" gutterBottom style={{textAlign:"left"}}>
                                    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                                    unde suscipit, quam beatae rerum inventore consectetur...
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container className={classes.action}>
                        <Link to="#" className={classes.actionLink}>action</Link>
                        <span className={classes.views}>289.789</span>
                    </Grid>
                </Paper>
                </Grid>
            </Grid>
        </div>
    )
}
export default withStyles(styles)(RoomItem)