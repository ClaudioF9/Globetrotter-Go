import React from 'react';
import FlightSuggestions from './suggestionsAPI';
import { format, addWeeks } from 'date-fns'

const SetDate = () => {
    let depDate = format(addWeeks(new Date(), 4), 'yyyy-MM-dd');
    let depRetDate = format(addWeeks(new Date(), 5), 'yyyy-MM-dd');
    let retDate = format(addWeeks(new Date(), 6), 'yyyy-MM-dd');

    return (
        <div>
            <FlightSuggestions
                depDate={depDate}
                depRetDate={depRetDate}
                retDate={retDate}
            />
        </div>
    );
}

export default SetDate;
