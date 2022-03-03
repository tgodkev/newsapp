import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea, CardActions } from '@mui/material';


export default function UserArticle(props) {
  return (
      <div className='container'>
    <Card  sx={{
        rowGap: 4,
        columnGap: 4,
        bgcolor: '#2D4263',
        
    }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="440"
          image={props.photo}
          alt="No image available"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
           By:  {props.author}
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
             {props.time}
          </Typography>
          <Typography variant="body1" color="text.secondary">
           {props.content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <p> More Details : <a href={props.link}>{props.link} </a> </p>
      </CardActions>
    </Card>
    </div>
  );
}









