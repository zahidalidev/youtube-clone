import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
     
  }));


const VideoItem = ({video, onVideoSelect}) => {
    const classes = useStyles();

    //extracting total months
    const data = video.snippet.publishedAt;
    const date = new Date(data);
    
    const oldMonth = date.getMonth();
    const oldYear = date.getFullYear();
    const oldDay = date.getDay();
    
    const currentDate = new Date();
    const CurrentMonth = currentDate.getMonth();
    const CurrentYear = currentDate.getFullYear();
    const CurrentDay = currentDate.getDay();
    

    const totalOldMonths = oldMonth + (oldYear * 12) + (oldDay/30);
    const totalCurrentMonths = CurrentMonth + (CurrentYear * 12) + (CurrentDay/30);

    const newMonths = totalCurrentMonths - totalOldMonths;

    const publishDate = date.toLocaleDateString();
    const newMonthYear = newMonths <= 12 ? `${parseInt(newMonths)} months ago` : `${parseInt(newMonths/12)} year ago`;

    return (

        <Grid className={classes.paper} elevation={0} style={{marginLeft: '-20px', margin: 5}} >
          <Grid container spacing={2}  >
            <Grid item style={{cursor: 'pointer'}}>
                <img onClick={()=>onVideoSelect(video)} width="168px" height="94.49px" className={classes.img} alt="complex" src={video.snippet.thumbnails.medium.url} />
            </Grid>

            <Grid item xs={12} sm container >
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs >
                  <Typography variant="p" style={{ fontFamily: 'Roboto, Arial, sans-serif', fontSize: '14px'}}><b>{video.snippet.title}</b></Typography>
                  <Typography style={{marginTop: '10px'}} variant="body2" gutterBottom color="textSecondary">
                    {video.snippet.channelTitle}
                  </Typography>
                  <Typography  variant="body2" color="textSecondary">
                    {newMonthYear}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

          </Grid>
        </Grid>
    );
}
 
export default VideoItem;
