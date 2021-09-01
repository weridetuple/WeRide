import React from 'react';
import { Stack, Text, Link, FontWeights, IStackTokens } from '@fluentui/react';
import { NewDayModal } from './NewDayModal';
import NewRideButton from './NewRideButton';
import  './styles.css';
 
const stackTokens: IStackTokens = { childrenGap: 15 };

interface DayProps {
    Day: string;
  }

const Day = (props: DayProps) => {
    return (
        <Stack tokens={stackTokens} className="arrivalDepartureContent">
            <div className="weekNameTile">{props.Day}</div>
            <div className="weekDayTile">
                <NewRideButton/>
            </div>
            <div className="weekDayTile">
                <NewDayModal rideType="Departure"/>
            </div>
        </Stack>
    )
}

export {Day};