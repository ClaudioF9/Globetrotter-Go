import * as React from 'react';
import { Card, CardContent, Typography} from '@mui/material';
import MultipleStopOutlinedIcon from '@mui/icons-material/MultipleStopOutlined';
import "./style.css";

function LocationCard(props) {
  console.log('Hello');
  console.log(props);
  return (
    <Card className='cards'>      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.originCity}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {new Date(props.departureDate).toLocaleString('en-UK', {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'})}
        </Typography>
        <MultipleStopOutlinedIcon />
        <Typography gutterBottom variant="h5" component="div">
          {props.destination}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {new Date(props.inboundDate).toLocaleString('en-UK', {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'})}
        </Typography>      
        <Typography gutterBottom variant="h5" component="div">
          {props.currencySymbol}{((Math.round((props.price) * 100) / 100).toFixed(2))}
          
        </Typography> 
        <Typography gutterBottom variant="h5" component="div">
          {props.duration} days
        </Typography>          
      </CardContent>      
    </Card>
  );
}

export default LocationCard;