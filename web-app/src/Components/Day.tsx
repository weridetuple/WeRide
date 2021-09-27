import React from 'react';
import { Stack, Text, Link, FontWeights, IStackTokens, Label } from '@fluentui/react';
import NewDayModal from './NewDayModal';
import NewRideButton from './NewRideButton';
import './styles.css';
import Store from '../store/Store';
import WeekDayTile from './WeekDayTile';
import { RideType, TransportationType } from '../store/schema/RideDetails';
import { observer } from 'mobx-react';

const stackTokens: IStackTokens = { childrenGap: 15 };

interface DayProps {
    Day: string;
}

export default observer(function Day(props: DayProps) {
    var day = Store().currentWeek[0];
    switch (props.Day) {
        case 'Monday':
            day = Store().currentWeek[0];
            break;
        case 'Tuesday':
            day = Store().currentWeek[1];
            break;
        case 'Wednesday':
            day = Store().currentWeek[2];
            break;
        case 'Thursday':
            day = Store().currentWeek[3];
            break;
        case 'Friday':
            day = Store().currentWeek[4];
            break;
    }

    const tileProps = { // make sure all required component's inputs/Props keys&types match
        type: RideType.Arrivel,
        day: day
    }
    const departureTileProps = { // make sure all required component's inputs/Props keys&types match
        type: RideType.Departure,
        day: day
    }
    return (
        <Stack tokens={stackTokens} className="arrivalDepartureContent">
            <div className="weekNameTile">
                <Stack horizontal={true} horizontalAlign="space-evenly">
                    <Label>{props.Day}</Label>
                    <Label>{day.getMonth() + 1 + '/' + day.getDate()}</Label>
                </Stack>

            </div>
            <div className="weekDayTile">
                <WeekDayTile {...tileProps} />
            </div>
            <div className="weekDayTile">
                <WeekDayTile {...departureTileProps} />
            </div>
        </Stack >
    )
}

);