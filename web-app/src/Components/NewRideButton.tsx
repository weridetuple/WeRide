import React from 'react';
import './styles.css';
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';
import { setCurrentRide, setNewRideModal } from './../actions';
import store from '../store/Store';
import { observer } from 'mobx-react';
import { DriverPassengerState, RideDetails, RideType, TransportationType } from '../store/schema/RideDetails';
import { User } from '../store/schema/User';
import { GetAllDrivers } from '../Services/Driver/GetAllDrivers';
import { UpdateDriver } from '../Services/Driver/Update';
import { DeleteDriver } from '../Services/Driver/DeleteDriver';
import { CreateDriver } from '../Services/Driver/CreateDriver';
import { GetAllCarpoolsForTransportation } from '../Services/Carpool/GetAllCarpoolsForTransportation';
import { GetAllPassengerCarpoolsForDate } from '../Services/Carpool/GetAllPassengerCarpoolForDate';

interface NewRideButtonProps {
    type: RideType;
    day: Date;
}

export default observer(function NewRideButton(props: NewRideButtonProps) {
    var day = props.day;
    var passengarList = new Map<User, DriverPassengerState>()
    passengarList.set(
        { firstName: "Madison", lastName: "Velasquez", userID: "1", email: "Madisonv100@gmail.com", image: "0", role: "Software Engineer Student" }, DriverPassengerState.Accepted)
    function onClick(ev: any) {
        //DeleteDriver('00000000000001');
        //UpdateDriver('00000000000001', 4);
        //GetAllDrivers();
        //CreateDriver('00000000000001', 4);
        //GetAllCarpoolsForTransportation("0000000000000001");
        GetAllPassengerCarpoolsForDate("00000000000001", "2021-08-01");
        setCurrentRide({
            rideType: props.type,
            date: day,
            transportationType: TransportationType.Carpool,
            driver: null,
            passenger: passengarList,
        });
        setNewRideModal(!store().modalState.createModal);

    }

    return (
        <DefaultButton className="newRideButton" text="+" onClick={onClick} />
    )
});



