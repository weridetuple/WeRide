import React from 'react';
import { observer, PropTypes } from 'mobx-react';
import { Stack, Text, Link, FontWeights, IStackTokens } from '@fluentui/react';
import { TextField, MaskedTextField } from '@fluentui/react/lib/TextField';
import { Dropdown, DropdownMenuItemType, IDropdownOption, IDropdownStyles } from '@fluentui/react/lib/Dropdown';
import './styles.css';
import { Label } from '@fluentui/react/lib/Label';
import { ChoiceGroup, IChoiceGroupOption } from '@fluentui/react/lib/ChoiceGroup';
import Store from '../store/Store';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import {
  DatePicker,
  DayOfWeek,
  mergeStyles,
} from '@fluentui/react';
import { DriverPassengerState, RideType, TransportationType } from '../store/schema/RideDetails';
import { addRideToSchedule, findAvailableDrivers, setNewRideModal, updateCurrentDate, updateCurrentRide, updateCurrentRideType, updateCurrentTime, updateCurrentTransportationType } from '../actions';

const stackTokens: IStackTokens = { childrenGap: 15 };

const options: IChoiceGroupOption[] = [
  { key: 'drive', text: 'drive', onClick: onSelectDrive },
  { key: 'carpool', text: 'carpool', onClick: onSelectCarpool },
];

var timeOfDay = "AM"

function onArrivalSelect() {
  updateCurrentRideType(RideType.Arrivel);
}

function onDepartureSelect() {
  updateCurrentRideType(RideType.Departure);
}

function onDateSelect(date: any) {
  updateCurrentDate(date);
}

function onSelectDrive() {
  updateCurrentTransportationType(TransportationType.Drive)
}

function onSelectCarpool() {
  updateCurrentTransportationType(TransportationType.Carpool)
}

function onBecomeDriverClick() {
  setNewRideModal(false);
  updateCurrentRide(Store().currentRide);
  addRideToSchedule(Store().currentRide);
}

export default observer(function NewDayModal() {
  var hours: string | number = Store().currentRide?.date.getHours().toString();
  var minutes: string | number = Store().currentRide?.date.getMinutes().toString();
  var drivers = [];

  if (Number(hours) > 12) {
    timeOfDay = "PM";
    hours = (Number(hours) - 12).toString();
  }
  if (Number(hours) == 0) {
    hours = '12';
  }

  if (minutes?.length == 1) {
    minutes = '0' + minutes;
  }

  function onFindDriverClick() {
    findAvailableDrivers();
    drivers.push({ firstName: "Madison", lastName: "Velasquez", userID: "1", email: "Madisonv100@gmail.com", image: "0", role: "Software Engineer Student" })
  }

  function updateHours(event: React.FormEvent<HTMLDivElement>, item: any) {
    var newHours = Number(item.key);
    hours = Number(newHours);
    if (minutes) {
      if (timeOfDay == "PM") {
        newHours += 12;
      }
      else {
        if (newHours % 12 == 0) {
          newHours = 0;
        }
      }
      updateCurrentTime(newHours, Number(minutes), timeOfDay);
    }
  }

  function updateMinutes(event: React.FormEvent<HTMLDivElement>, item: any) {
    if (hours) {
      var newMinutes = Number(item.key);
      minutes = newMinutes;
      updateCurrentTime(Number(hours), newMinutes, timeOfDay);
    }
  }

  function onTimeOfDayChange(event: React.FormEvent<HTMLDivElement>, item: any) {
    timeOfDay = item.key;
    var newHours = Number(hours);
    if (minutes) {
      if (timeOfDay == "PM") {
        newHours += 12;
      }
      else {
        if (newHours % 12 == 0) {
          newHours = 0;
        }
      }
      updateCurrentTime(Number(newHours), Number(minutes), timeOfDay);
    }
  }

  var rideType = "";
  if (Store().currentRide?.rideType == RideType.Arrivel) {
    rideType = "arrival";
  }
  else if (Store().currentRide?.rideType == RideType.Departure) {
    rideType = "departure";
  }

  var selectdKey = "";
  if (Store().currentRide?.transportationType == TransportationType.Carpool) {
    selectdKey = "carpool";
  }
  else if (Store().currentRide?.transportationType == TransportationType.Drive) {
    selectdKey = "drive";
  }

  const rideTypeOptions: IChoiceGroupOption[] = [
    { key: 'arrival', text: 'Arrival', iconProps: { iconName: 'Sunny' }, onClick: onArrivalSelect },
    { key: 'departure', text: 'Departure', iconProps: { iconName: 'PartlyCloudyNight' }, onClick: onDepartureSelect },
  ];

  var timeLabel = Store().currentRide.rideType == RideType.Arrivel ? "Arrival Time" : "Departure Time";


  return (
    <div className="tileContent">
      <Stack tokens={stackTokens}>
        <Stack.Item align="center">
          <ChoiceGroup defaultSelectedKey={rideType} options={rideTypeOptions} />
        </Stack.Item>
        <div className="rideAttributes">
          <DatePicker
            aria-expanded={false}
            initialPickerDate={Store().currentRide?.date}
            value={Store().currentRide?.date}
            onSelectDate={onDateSelect}
            //firstDayOfWeek={firstDayOfWeek}
            //placeholder="Select a date..."
            ariaLabel="Select a date"
          // DatePicker uses English strings by default. For localized apps, you must override this prop.
          //strings={defaultDatePickerStrings}
          />
        </div>
        <div className="rideAttributes">
          <Label >{timeLabel}</Label>
          <Stack horizontal={true}>
            <Dropdown
              placeholder="AM"
              onChange={onTimeOfDayChange}
              options={[
                { key: 'AM', text: 'AM' },
                { key: 'PM', text: 'PM' },
              ]}
            />
            <Dropdown
              placeholder={hours}
              onChange={updateHours}
              options={[
                { key: 1, text: '1' },
                { key: 2, text: '2' },
                { key: 3, text: '3' },
                { key: 4, text: '4' },
                { key: 5, text: '5' },
                { key: 6, text: '6' },
                { key: 7, text: '7' },
                { key: 8, text: '8' },
                { key: 9, text: '9' },
                { key: 10, text: '10' },
                { key: 11, text: '11' },
                { key: 12, text: '12' },
              ]}
            />
            <Dropdown
              placeholder={minutes}
              onChange={updateMinutes}
              options={[
                { key: 0, text: '00' },
                { key: 15, text: '15' },
                { key: 30, text: '30' },
                { key: 45, text: '45' },
              ]}
            />
          </Stack>
        </div>
        <div className="rideAttributes">
          <ChoiceGroup
            label="Pick method of transportation"
            defaultSelectedKey={selectdKey}
            options={options}
          />
        </div>
        {Store().currentRide?.transportationType == TransportationType.Carpool &&
          <PrimaryButton text="Find Drivers" allowDisabledFocus onClick={onFindDriverClick} />
        }
        {Store().currentRide?.transportationType == TransportationType.Drive &&
          <PrimaryButton text="Become a Driver for this Date and Time" onClick={onBecomeDriverClick} />
        }
        {drivers.length > 0 &&
          <div>Hello Drivers</div>
        }
      </Stack>
    </div>
  )
}

);