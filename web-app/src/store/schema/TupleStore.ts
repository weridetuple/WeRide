import { modalState } from "./ModalState";
import { RideDetails } from "./RideDetails";

export interface TupleStore {
    modalState: modalState,
    currentDate: Date,
    currentRide: RideDetails,
    currentWeek: Date[],
    rides: RideDetails[],
}
