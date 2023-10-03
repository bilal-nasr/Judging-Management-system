import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Cards() {
  return (
    <Card sx={{ maxWidth: 320 }}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{margin:'auto', marginTop:'20px'}} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Startup
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Startup
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}