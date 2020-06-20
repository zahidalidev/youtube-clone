import React, { Component } from "react";
import {Grid} from "@material-ui/core";
import axios from 'axios';
import {SearchBar, VideoDetail, VideoList} from "./components";
import VideoComments from "./components/videoComments";
import CommentBox from "./components/commentBox";

import youtube from "./api/youtube";

const api_key = 'AIzaSyANvvRl8V20qOmKPvm4DPlXI9WHSGG66bI';

class App extends Component{
    state = {
        videos: [],
        selectedVideo: null,
        commentData: null,
        videoId: 'eIrMbAQSU34'
    }

    async componentDidMount(){
        await this.handleSubmit('java');
        await this.handleComment();
    }
    handleSubmit = async(searchValue) => {
        try{
            const response = await youtube.get("search", {
            params: {
                part: 'snippet',
                maxResults: 20,
                key: api_key,
                q: searchValue,
            }});
            this.setState({videos: response.data.items, selectedVideo: response.data.items[0], videoId: response.data.items[0].id.videoId});

            // console.log('video data', response.data.items[0].id.videoId);
        }catch(ex){
            console.log('api error', ex.message);
        }
        await this.handleComment();
    }

    handleComment = async() => {
        // console.log("commnet called");
        try{
            // console.log('video Id: ', this.state.videoId);
            const {videoId} = this.state;
            const {data} = await axios.get(`https://www.googleapis.com/youtube/v3/commentThreads?key=${api_key}&textFormat=plainText&part=snippet&videoId=${videoId}&maxResults=10`);
            this.setState({commentData: data})
        }
        catch(ex){
            console.log(ex.message);    
        }
    }

    onVideoSelect = async(video) => {
        this.setState({selectedVideo: video, videoId: video.id.videoId});

        await this.handleComment();
    }

    onHhandleComment = async(comment)=>{
        try{
            const {videoId} = this.state;
            const {data} = await axios.post(`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&key=${api_key}`).then(
                {
                    "snippet":{
                    "topLevelComment":{
                     "snippet":{
                      "textOriginal": "YOUR_COMMENT_HERE",
                      "videoId": {videoId}
                     }
                    }
                   }
                }
            );
            console.log("comment: ", data);
        }catch(ex){
            console.log(ex.message);
        }
    }
    render(){
        const {selectedVideo, videos, commentData} = this.state;
        return (
            <Grid justify="center" container spacing={10} style={{marginLeft: -75}}>
                <Grid item xs={12} style={{marginLeft: 30}}>
                    <Grid container spacing={10}>
                        <Grid item xs={12} style={{marginTop: '-7px'}}>
                            <SearchBar onFormSubmit={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={8} style={{marginTop: '-50px'}}>
                            <VideoDetail video={selectedVideo} />
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList videos = {videos} onVideoSelect = {this.onVideoSelect} />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} style={{marginLeft: 30, marginTop: -1500}}>
                    <hr style={{width: '64%', marginLeft: -5}} />
                        <CommentBox onHandleComment={this.onHhandleComment} />
                        <VideoComments commentData = {commentData} />
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}
export default App;