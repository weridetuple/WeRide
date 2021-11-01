import { mutator } from 'satcheljs';
import {
    setNewRideModal,
    showWeekPicker,
    setCurrentWeek,
    setCurrentRide,
    updateCurrentDate,
    updateCurrentTime,
    updateCurrentTransportationType,
    addRideToSchedule,
    updateCurrentRideType,
    updateCurrentRide,
    showPassengerModal
} from './actions';
import Store from './store/Store';
import store from './store/Store';


mutator(setNewRideModal, (actionMessage) => {
    store().modalState.createModal = actionMessage.value;
})

mutator(showWeekPicker, (actionMessage) => {
    store().modalState.showWeekPicker = actionMessage.value;
})

mutator(setCurrentWeek, (actionMessage) => {
    store().currentWeek = actionMessage.week;
})

mutator(setCurrentRide, (actionMessage) => {
    store().currentRide = actionMessage.ride;
})

mutator(updateCurrentDate, (actionMessage) => {
    store().currentRide.date = actionMessage.date;
})

mutator(updateCurrentTime, (actionMessage) => {
    Store().currentRide?.date.setHours(actionMessage.hours, actionMessage.minutes);
})

mutator(updateCurrentTransportationType, (actionMessage) => {
    store().currentRide.transportationType = actionMessage.transportationType;
})

mutator(addRideToSchedule, (actionMessage) => {

    store().rides.push(actionMessage.rideDetails);
})

mutator(updateCurrentRideType, (actionMessage) => {
    store().currentRide.rideType = actionMessage.rideType;
})

mutator(updateCurrentRide, (actionMessage) => {
    store().currentRide = actionMessage.ride;
})

mutator(showPassengerModal, (actionMessage) => {
    store().modalState.showPassengerModal = actionMessage.value;
})
