import { createStore } from 'satcheljs';
import { TupleStore } from './schema/TupleStore';
import '../mutators';
import { addDays, getStartDateOfWeek, DayOfWeek, } from '@fluentui/react';
import { ride } from './../Utils/createEmptyRide';
import { DriverPassengerState, RideDetails, RideType, TransportationType } from './schema/RideDetails';
import { User } from './schema/User';

const fday = getStartDateOfWeek(new Date(), DayOfWeek.Monday);

var Store = createStore<TupleStore>('TupleStore', {
    modalState: {
        createModal: false,
        showWeekPicker: false,
    },
    currentDate: new Date(),
    currentRide: {
        rideType: RideType.Arrivel,
        date: new Date(),
        transportationType: TransportationType.Carpool,
        driver: null,
        passenger: new Map<User, DriverPassengerState>(),
    },
    currentWeek: [
        fday,
        addDays(fday, 1),
        addDays(fday, 2),
        addDays(fday, 3),
        addDays(fday, 4),
    ],
    rides: [],
});





export default Store;