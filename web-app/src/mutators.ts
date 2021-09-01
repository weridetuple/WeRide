import { mutator } from 'satcheljs';
import { setNewRideModal } from './actions';
import store from './store/Store';

mutator (setNewRideModal, (actionMessage) => {
    store().modalState.createModal = actionMessage.value;
})