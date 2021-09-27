import { User } from './User';

export enum RideType {
    'Arrivel',
    'Departure',
}

export enum TransportationType {
    'Carpool',
    'Drive',
}

export enum DriverPassengerState {
    'Accepted',
    'Denied',
    'Pending',
}

export interface RideDetails {
    rideType: RideType | null,
    date: Date,
    transportationType: TransportationType,
    driver: [User, DriverPassengerState] | null,
    passenger: Map<User, DriverPassengerState> | null
}
