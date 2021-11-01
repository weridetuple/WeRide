import { RideDetails, TransportationType } from "../store/schema/RideDetails"
import store from './../store/Store';

const day = store().currentDate;
export let ride: RideDetails = {
    rideType: null,
    date: day,
    transportationType: TransportationType.Carpool,
    driver: null,
    passenger: null,
}