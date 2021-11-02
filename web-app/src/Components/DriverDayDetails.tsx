import React from 'react';
import { observer } from 'mobx-react';
import Store from '../store/Store';
import NewRideButton from './NewRideButton';
import { Stack, Text, Link, FontWeights, IStackTokens, Label, PrimaryButton, DefaultButton } from '@fluentui/react';
import './styles.css';
import { RideDetails, RideType, TransportationType } from '../store/schema/RideDetails';
import { ride } from '../Utils/createEmptyRide';
import { setCurrentRide, setNewRideModal, showPassengerModal } from '../actions';

interface DriverDayDetailsProps {
    ride: RideDetails;
}

export default observer(function DriverDayDetails(props: DriverDayDetailsProps) {

    function onEditClick() {
        setCurrentRide(props.ride);
        setNewRideModal(true);
    }

    function onPassengerClick() {
        showPassengerModal(true);
    }

    const stackTokens: IStackTokens = { childrenGap: 15 };
    var timeLabel = props.ride.rideType === RideType.Arrivel ? "Arrival Time" : "Departure Time";
    var timeOfDay = "AM";
    var hours = props.ride.date.getHours();
    if (hours >= 12) {
        timeOfDay = "PM";
        if (hours != 12) {
            hours = hours - 12;
        }
    }
    if (hours == 0) {
        hours = 12;
    }
    return (
        <Stack tokens={stackTokens}>
            <div className="rideDetails">
                <Label >{timeLabel}</Label>
                <div>{hours + " : " + props.ride.date.getMinutes() + " " + timeOfDay}</div>
            </div>
            <div className="rideDetails">
                <Label >Transportation</Label>
                <div>{props.ride.transportationType == TransportationType.Drive ? 'Drive' : "Carpool"}</div>
            </div>
            <DefaultButton className="passengerButton" onClick={onPassengerClick} text={"Passengers" + " (" + props.ride.passenger?.size + ")"} />
            <DefaultButton onClick={onEditClick} text="Edit" />
        </Stack>
    );
});


