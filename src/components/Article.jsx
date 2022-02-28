
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { red } from '@mui/material/colors';

export default function Article(props) {
  return (
      <div className='container'>
    <Card  sx={{
        rowGap: 4,
        columnGap: 4,
        
    }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.photo}
          alt="photo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {props.source}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {props.content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        <p> More Details : <a href={props.link}>{props.link} </a> </p>
        </Button>
      </CardActions>
    </Card>
    </div>
  );
}









//function Article(props){
    //return(
        //<div>
           // <h1>{props.title}</h1>
           // <h2> {props.source} </h2>
           // <h2> {props.time}</h2>
           // <img src={props.photo} alt="" srcset="" />
           // <p> {props.content} </p>
           // <p> More Details : <a href={props.link}>{props.link} </a> </p>

        //</div>
    //)
//}


//export default Article;