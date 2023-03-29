import React from 'react';
import LocationCard from "../../components/suggestionsCard/suggestionsCard"
import { Grid } from '@mui/material';
import "./style.css";

function Suggestions({ cheapFlights }) {
    console.log(cheapFlights);
    // return
    return (
        <div className='suggestDiv' id='Cheap Flights'>
            <div>
                <h1 className='title'>Cheap Flights</h1>
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

