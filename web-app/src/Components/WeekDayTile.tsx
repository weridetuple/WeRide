import React from 'react';
import { observer } from 'mobx-react';
import Store from '../store/Store';
import NewRideButton from './NewRideButton';
import { Stack, Text, Link, FontWeights, IStackTokens, Label } from '@fluentui/react';
import './styles.css';
import { RideDetails, RideType, TransportationType } from '../store/schema/RideDetails';
import DriverDayDetails from './DriverDayDetails';

interface WeekDayTileProps {
    type: RideType;
    day: Date;
}

export default observer(function WeekDayTile(props: WeekDayTileProps) {
    var showContent = false;
    var details: RideDetails | null = null;

    (Store().rides.forEach(ride => {
        if (ride.date.toLocaleDateString("en-us") === props.day.toLocaleDateString("en-us")) {
            if (ride.rideType === props.type) {
                details = ride;
                showContent = true;
            }
        }
    }))

    var tileLabel = props.type == RideType.Arrivel ? 'Arrival' : 'Departure';
    return (

        <div className="weekDayTileContent">
            <Stack>
                <Stack.Item align="start">
                    <Label>{tileLabel}</Label>
                </Stack.Item>
                <Stack.Item align="center" >
                    {!showContent &&
                        <div className="newRideButtonContainer">
                            <NewRideButton {...props} />
                        </div>}
                    {showContent && details != null &&
                        <DriverDayDetails ride={details} />
                    }
                </Stack.Item>
            </Stack >
        </div>

    );
});


