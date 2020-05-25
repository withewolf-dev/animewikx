import React, { Component } from 'react'
import { withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const useStyles = ((theme) => ({
  root: {
    maxWidth: 300,
    
  },
  media: {
    height:230,
    paddingTop: '56.25%', // 16:9
  },
  title: {
    fontSize: 20,
    
  },
  root2: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));


class Display extends Component {

      render() {
        const {title,id,img,epsd,rated,score,synopsis,airing,end_date,start_date}=this.props
        const {classes}=this.props
        return (
          <>
            <Grid align="center">
              <Card className={classes.root}>
                <CardMedia className={classes.media} image={img} />
              </Card>
              <br />
              <Typography
                className={classes.title}
                variant="button"
                component="h2"
                align="inherit"
              >
                <Button variant="outlined" color="primary">
                  {title}
                </Button>
              </Typography>
            </Grid>
            <div className={classes.root2}>
              <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                  <Grid item xs>
                    <Typography>{synopsis}</Typography>
                  </Grid>
                </Grid>
              </Paper>
              <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          
          <Grid item xs zeroMinWidth>
            <Typography noWrap> 
            <span> episodes: {epsd} </span> {' '}
            <br/>
            <span>score: {score} </span>{" "}
             <span> rating:{rated}</span>   </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container  spacing={3}>
         
          <Grid item xs>
            <Typography > <span> start date:{start_date} </span>{' '}<span> <br/>end date:{end_date}</span> </Typography>
          </Grid>
        </Grid>
      </Paper>
            </div>
          </>
        );
    }
}
export default withStyles(useStyles)(Display)