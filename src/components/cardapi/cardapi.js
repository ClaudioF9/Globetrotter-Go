import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import "./cardapi.css"

function FlightApi(props) {
  const { airportOne, airportTwo, valueOne, valueTwo } = props;
  const [flightInfo, setFlightInfo] = useState(null);
  console.log(airportOne);
  console.log(airportTwo);
  console.log(valueOne);
  console.log('valueTwo:', valueTwo ? valueTwo.format("YYYY-MM-DD") : null);


  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://ryanair.p.rapidapi.com/flights',
      params: {
        origin_code: airportOne ? airportOne.code : null, 
        destination_code: airportTwo ? airportTwo.code : null, 
        origin_departure_date: valueOne ? valueOne.format("YYYY-MM-DD") : null, 
        destination_departure_date: valueTwo ? valueTwo.format("YYYY-MM-DD") : null
      },
      headers: {
        //'X-RapidAPI-Key': '02747c3487mshfda50de8231c020p1e7b51jsn30fae1d05955',
        'X-RapidAPI-Host': 'ryanair.p.rapidapi.com'
      }
    };
    console.log(options.params);
    axios.request(options).then(function (response) {
      setFlightInfo(response.data);
    }).catch(function (error) {
      console.error(error);
      alert("No flights to your destination, please select new destination")
    });
  }, [airportOne, airportTwo, valueOne, valueTwo]);

  if (!flightInfo) {
    return <div className='load'>Loading flight data...</div>;
  }

  return (
    <div className="headflight">
      <h2 className='flights'>Flight Data</h2>
      <FlightCard flightInfo={flightInfo} />
    </div>
  );
}

function FlightCard({ flightInfo }) {
  return (
    
    <div className="bigdivvy">
    <div className="divvy1">
    <div className="grid-wrapper">
          <div className="headtext">Departure Flights</div>
    <Grid container spacing={0} columnSpacing={2} className="gridFormat">
      {flightInfo.origin_to_destination_trip.map((flightArray) =>
        flightArray.map((flightObj) => (
          <Grid item key={flightObj.flight_number} xs={12} sm={6} md={3}>
            <Card className="cardy"  sx={{ borderRadius: 8 }}>
              <CardContent>
                <Typography variant="h4" component="h2">
                  {flightObj.flight_number}
                </Typography>
                <Typography  color="text.secondary">
                  {flightObj.origin_code} to {flightObj.destination_code}
                </Typography>
                <Typography variant="body2">
                  <p>Departure time: {new Date(flightObj.departure_datetime_utc).toLocaleString('en-UK', {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'})}</p>
                  <p>Arrival time: {new Date(flightObj.arrival_datetime_utc).toLocaleString('en-UK', {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'})}</p>
                  <p>
                    Fare: £{flightObj.regular_fare}
                  </p>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))
      )}
    </Grid>
    </div>
    </div>
    <div className="divvy2">
    <div className="grid-wrapper">
    <div className="headtext">Return Flights</div>
    <Grid container spacing={0} columnSpacing={2} className="gridFormat">
      {flightInfo.destination_to_origin_trip.map((flightArray) =>
        flightArray.map((flightObj) => (
          <Grid item key={flightObj.flight_number} xs={12} sm={6} md={3}>
            <Card className="cardy"  sx={{ borderRadius: 8 }}>
              <CardContent>
                <Typography variant="h4" component="h2">
                  {flightObj.flight_number}
                </Typography>
                <Typography  color="text.secondary">
                  {flightObj.origin_code} to {flightObj.destination_code}
                </Typography>
                <Typography variant="body2">
                  <p>Departure time: {new Date(flightObj.departure_datetime_utc).toLocaleString('en-UK', {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'})}</p>
                  <p>Arrival time: {new Date(flightObj.arrival_datetime_utc).toLocaleString('en-UK', {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'})}</p>
                  <p>
                    Fare: £{flightObj.regular_fare}
                  </p>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))
      )}
    </Grid>
    </div>
    </div>
    </div>
  );
        }


export default FlightApi;
