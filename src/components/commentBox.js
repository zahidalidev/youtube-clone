import React from 'react';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import { Grid } from '@material-ui/core';


export default function CommentBox({onHandleComment}) {
 
    const [commentValue, setCommentValue] = React.useState('');

  const handleComment =(event)=>{
    setCommentValue(event.currentTarget.value);
    event.preventDefault();
  }
  const handleSubmit = (event) => {
    onHandleComment(commentValue);
    event.preventDefault();
  }
  return (
    <div style={{display: 'flex',flexWrap: 'wrap', marginTop: 90}}>
      <div>
        <Grid item xs={1}>
            <Avatar style={{width: 40, height: 40,  margin: 8 , marginLeft: '0px', marginRight: 0, marginTop: 0, marginBottom: -90}} alt="User Profile" src="#" />
        </Grid>
        <Grid item xs={6}>
            <form onSubmit={handleSubmit}>
                <TextField
                id="standard-full-width"
                style={{ margin: 8 , marginLeft: '60px', marginRight: 10, width: '98ch', marginTop: 50, marginBottom: 30}}
                placeholder="Add a public comment..."
                fullWidth
                margin="normal"
                onChange={handleComment}
                InputLabelProps={{
                    shrink: true,
                }}
                />
            </form>
        </Grid>
      </div>
    </div>
  );
}
