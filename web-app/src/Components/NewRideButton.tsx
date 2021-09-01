import React from 'react';
import  './styles.css';
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';
import {setNewRideModal} from './../actions';
import store from '../store/Store';
import { observer } from 'mobx-react';

function onClick(ev: any) {
    setNewRideModal(!store().modalState.createModal);
}

export default observer(function NewRideButton(){
    return (
        <DefaultButton className="newRideButton" text="+" onClick={onClick}/>
    )
});

