import { action } from 'satcheljs';
import { RideDetails, RideType, TransportationType } from './store/schema/RideDetails';

export let setNewRideModal = action(
    'setNewRideModal',
    (value: boolean) => ({ value: value })
);

export let showPassengerModal = action(
    'showPassengerModal',
    (value: boolean) => ({ value: value })
);

export let showWeekPicker = action(
    'showWeekPicker',
    (value: boolean) => ({ value: value })
)

export let setCurrentWeek = action(
    'setCurrentWeek',
    (week: Date[]) => ({ week: week })
)

export let setCurrentRide = action(
    'setCurrentRide',
    (ride: RideDetails) => ({ ride: ride })
)

export let updateCurrentDate = action(
    'updateCurrentDate',
    (date: Date) => ({ date: date })
)

export let updateCurrentTime = action(
    'updateCurrentTime',
    (hours: number, minutes: number, timeOfDay: string) => ({ hours: hours, minutes: minutes, timeOfDay: timeOfDay })
)

export let updateCurrentTransportationType = action(
    'updateCurrentTransportationType',
    (transportationType: TransportationType) => ({ transportationType: transportationType })
)

export let addRideToSchedule = action(
    'addRideToSchedule',
    (rideDetails: RideDetails) => ({ rideDetails: rideDetails })
)

export let updateCurrentRideType = action(
    'updateCurrentRideType',
    (rideType: RideType) => ({ rideType: rideType })
)

export let updateCurrentRide = action(
    'updateCurrentRideType',
    (ride: RideDetails) => ({ ride: ride })
)

export let findAvailableDrivers = action(
    'findAvailableDrivers'
)
