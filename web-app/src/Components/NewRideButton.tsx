import React from 'react';
import './styles.css';
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';
import { setCurrentRide, setNewRideModal } from './../actions';
import store from '../store/Store';
import { observer } from 'mobx-react';
import { DriverPassengerState, RideDetails, RideType, TransportationType } from '../store/schema/RideDetails';
import { User } from '../store/schema/User';

interface NewRideButtonProps {
    type: RideType;
    day: Date;
}

export default observer(function NewRideButton(props: NewRideButtonProps) {
    var day = props.day;
    function onClick(ev: any) {
        setCurrentRide({
            rideType: props.type,
            date: day,
            transportationType: TransportationType.Carpool,
            driver: null,
            passenger: new Map<User, DriverPassengerState>(),
        });
        setNewRideModal(!store().modalState.createModal);

    }

    return (
        <DefaultButton className="newRideButton" text="+" onClick={onClick} />
    )
});

