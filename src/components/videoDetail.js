import React from 'react';

import {Paper, Typography, Grid} from "@material-ui/core";


const VideoDetail = ({video}) => {
    if(!video) return <div>Loading....</div>

    const data = video.snippet.publishedAt;
    const date = new Date(data);

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    const publishDate = date.toLocaleDateString(undefined, options);



    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    // style={{height: "10%", marginLeft: "30px"}
    console.log(video);
    return ( 
        <React.Fragment >
            <Grid style={{marginLeft: '20px'}}>
                <iframe title={video.snippet.channelTitle} allowFullScreen width="870" height="500" src={videoSrc} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
            </Grid>
            <Grid style={{width: "789", height: "444", marginLeft: '20px', marginTop: '20px'}}>
                <Typography variant="h5">{video.snippet.title} - {video.snippet.channelTitle}</Typography>
                <Typography style={{marginTop: '10px', marginBottom: '10px'}} variant="body2" color="textSecondary">{publishDate}</Typography>
                <hr  style={{borderWidth: 0.7 }}></hr>
                <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle2">{video.snippet.description}</Typography>
            </Grid>
        </React.Fragment>
     );
}
 
export default VideoDetail;