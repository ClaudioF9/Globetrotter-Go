import React from 'react';
import LocationCard from "../../components/suggestionsCard/suggestionsCard"
import { Grid } from '@mui/material';
import "./style.css";

function Suggestions({ cheapFlights }) {
    console.log(cheapFlights);
    // return
    return (
        <div className='suggestDiv'>
            <div>
                <h1 className='title'>Suggestions</h1>
                <div className='gridDiv'>
                    <Grid container /*spacing={2} columnSpacing={0}*/ className="suggestionsGrid">
                        {cheapFlights.fares.slice(0, 6).map((fare) => {
                            return (
                                <>
                                    <Grid item className='gridItem' xs={12} sm={6} md={4}>
                                        <LocationCard  spacing={4}
                                            destination={fare.outbound.arrivalAirport.city.name}
                                            originCity={fare.outbound.departureAirport.city.name}
                                            departureDate={fare.outbound.departureDate}
                                            inboundDate={fare.inbound.departureDate}
                                            price={fare.summary.price.value}
                                            currencySymbol={fare.summary.price.currencySymbol}
                                            duration={fare.summary.tripDurationDays}
                                        />
                                    </Grid >
                                </>
                            )
                        })}
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default Suggestions;




// <Grid container spacing={0} columnSpacing={0} className="gridFormat">
//     {flightInfo.origin_to_destination_trip.map((flightArray) =>
//         flightArray.map((flightObj) => (
//             <Grid item key={flightObj.flight_number} xs={12} sm={6} md={3}>
//                 <Card className="cardy" sx={{ borderRadius: 8 }}>
//                     <CardContent>
//                         <Typography variant="h4" component="h2">
//                             {flightObj.flight_number}
//                         </Typography>
//                         <Typography color="text.secondary">
//                             {flightObj.origin_code} to {flightObj.destination_code}
//                         </Typography>
//                         <Typography variant="body2">
//                             <p>Departure time: {flightObj.departure_datetime_utc}</p>
//                             <p>Arrival time: {flightObj.arrival_datetime_utc}</p>
//                             <p>
//                                 Fare: {flightObj.regular_fare} {flightObj.currency}
//                             </p>
//                         </Typography>
//                     </CardContent>
//                 </Card>
//             </Grid>
//         ))
//     )}
// </Grid>
