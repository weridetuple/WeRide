import { action, orchestrator } from 'satcheljs';
import { findAvailableDrivers } from './actions';

orchestrator(findAvailableDrivers, async (actionMessage) => {
    ///Grab all schedules that are of type driver, equal the current date, and 
    await fetch(`https://weridebackend20210702125346.azurewebsites.net/tuple/schedule`)
        .then(response => console.log(response));
})