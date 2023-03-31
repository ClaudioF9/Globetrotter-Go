import React, { useEffect, useState } from "react";
import Suggestions from "../pages/suggestions/suggestions";
import axios from "axios";

function FlightSuggestions(props) {
  const [flightSuggestions, setFlightSuggestions] = useState(null);
 

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://ryanair-all-api.p.rapidapi.com/getCheapestTripPrice',
      params: {
        departure_airport_code: 'MAN',
        departure_date_from: props.depDate,
        departure_date_to: props.depRetDate,
        return_date_from: props.depRetDate,
        return_date_to: props.retDate,
        number_of_adults: '2',
        duration_days_from: '7',
        duration_days_to: '14',
        max_price: '99999'
      },
      headers: {
        // Josh key 1 (Used):
        // 'X-RapidAPI-Key': '0ada40ae03msh90d073e2992755dp158494jsndaede5858f85',
        // 'X-RapidAPI-Host': 'ryanair-all-api.p.rapidapi.com'

        // Josh key 2(Used):
        // 'X-RapidAPI-Key': '92b828285cmsh8a1a18ad6eee67bp168fe4jsn0185c9562d9c',
        // 'X-RapidAPI-Host': 'ryanair-all-api.p.rapidapi.com'

        // Josh key 3(Used):
        // 'X-RapidAPI-Key': '731410f010msh39d9105c96df32ap106c22jsnf1560507dcdd',
        // 'X-RapidAPI-Host': 'ryanair-all-api.p.rapidapi.com'

        // Claudio key:
        // 'X-RapidAPI-Key': 'f8bea1bbb1msh0f0fb2365bb7e6cp156bacjsn02ebc2142b44',
        //'X-RapidAPI-Host': 'ryanair-all-api.p.rapidapi.com'
        
        // Claudio key 2:
        //'X-RapidAPI-Key': '8b185157dfmshfda0dec136e9414p1ab5b0jsn6823246d01ec',
        //'X-RapidAPI-Host': 'ryanair-all-api.p.rapidapi.com'

        // Morgan key:
        'X-RapidAPI-Key': 'f52fefffa7msh4adaf3573b9c473p12a90djsn801350d39fda',
        'X-RapidAPI-Host': 'ryanair-all-api.p.rapidapi.com'

        // Metin key:
        // 'X-RapidAPI-Key': '5eee59729amsh14ba8d2e0c49119p1e060fjsn0283d7f8a93c',
        // 'X-RapidAPI-Host': 'ryanair-all-api.p.rapidapi.com'
        
        
        
      }
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
      setFlightSuggestions(response.data);

      // Suggestions(response.data)
    }).catch(function (error) {
      console.error(error);
    });
  }, [props.depDate, props.depRetDate, props.retDate]);

  if (!flightSuggestions) return null;

  return (
    <>     
      <Suggestions cheapFlights={flightSuggestions} />
    </>
  )


}

export default FlightSuggestions;
