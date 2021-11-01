import React from 'react';
import { observer, PropTypes } from 'mobx-react';
import { Stack, Text, Link, FontWeights, IStackTokens, IconButton, Label, IIconProps, IPersonaSharedProps, Persona } from '@fluentui/react';
import Store from '../store/Store';
import './styles.css';
import { showPassengerModal } from '../actions';
import { DriverPassengerState } from '../store/schema/RideDetails';
import PassengerItem from './PassengerItem';


const stackTokens: IStackTokens = { childrenGap: 5 };

function onDismiss() {
    showPassengerModal(false);
}

const cancelIcon: IIconProps = { iconName: 'Cancel' };

const examplePersona: IPersonaSharedProps = {
    imageInitials: 'AL',
    text: 'Annie Lindqvist',
    secondaryText: 'Software Engineer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
};

const examplePersona2: IPersonaSharedProps = {
    imageInitials: 'MV',
    text: 'Annie Lindqvist',
    secondaryText: 'Software Engineer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
};

export default observer(function PassengerModal() {
    var passengarList = Store().currentRide.passenger;
    var passengerArray = [];
    if (passengarList) {
        for (let key of Array.from(passengarList.keys())) {
            if (passengarList.get(key) == DriverPassengerState.Accepted) {
                passengerArray.push(key);
            }
        }
    }
    return (
        <div className="tileContent">
            <Stack className="modalStack" tokens={stackTokens}>
                <Stack tokens={stackTokens} horizontal horizontalAlign="space-between">
                    <Label >Passengers</Label>
                    <IconButton
                        iconProps={cancelIcon}
                        ariaLabel="Close popup modal"
                        onClick={onDismiss}
                    />
                </Stack>
                {passengarList &&
                    passengerArray.map(passenger => {
                        return <PassengerItem passengar={passenger} />
                    })
                }
            </Stack>
        </div >
    )
}
);