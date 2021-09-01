import { action } from 'satcheljs';

export let setNewRideModal = action(
    'setNewRideModal',
    (value: boolean) => ({value: value})
);