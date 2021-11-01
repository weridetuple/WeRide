import { modalState } from "./ModalState";
import { RideDetails } from "./RideDetails";
import { User } from "./User";

export interface TupleStore {
    modalState: modalState,
    user: User | null,
    currentDate: Date,
    currentRide: RideDetails,
    currentWeek: Date[],
    rides: RideDetails[],
    availableDrivers: User[],
}
