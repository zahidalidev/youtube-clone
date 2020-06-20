import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Grid } from '@material-ui/core';
  

const VideoComments = ({commentData}) => {
    if(!commentData) return <div>Loading....</div>
    
    return ( 
        <div className="container" >
            { commentData.items.map((item)=>(
                <Grid container spacing={3}>
                    <Grid item xs={1} style={{paddingTop: 40}}>
                        <Avatar style={{width: 40, height: 40,}} alt="User Profile" src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} />
                    </Grid>
                    <Grid item xs={6} style={{paddingTop: 45, marginLeft: -50}}>
                        {/* {console.log(item.snippet)} */}
                        <Grid style={{paddingBottom: 6}}>
                            <typography><b>{item.snippet.topLevelComment.snippet.authorDisplayName}</b></typography>
                        </Grid>
                        <Grid>
                            <typography>{item.snippet.topLevelComment.snippet.textDisplay}</typography>
                        </Grid>
                    </Grid>
                </Grid>
            ))}
        </div>
     );
}
 
export default VideoComments;