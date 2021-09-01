import { createStore } from 'satcheljs';
import { TupleStore } from './schema/TupleStore';

import '../mutators';

var Store = createStore<TupleStore>('TupleStore', {
    modalState : {createModal: false},
});


export default Store;