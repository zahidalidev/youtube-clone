import React, { Component } from 'react';

import {Grid} from "@material-ui/core";
import VideoItem from './videoItem';

const VideoList = ({videos, onVideoSelect}) => {

    const listOfVideos = videos.map((video, id) => <VideoItem onVideoSelect={onVideoSelect} key={id} video={video} />);
    return (
        <Grid container spacing={10}>
            <Grid>
                <p style={{ fontFamily: 'Roboto, Arial, sans-serif', fontSize: '16px'}}>Up next</p>
            </Grid>
            <div style={{cursor: 'pointer !important'}}>
                {listOfVideos}
            </div>
        </Grid>
    );
}

export default VideoList;