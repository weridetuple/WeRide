import React from 'react';
import  './styles.css';
import store from '../store/Store';
import { observer } from 'mobx-react';
import {Modal} from '@fluentui/react';
import {setNewRideModal} from './../actions';
import { NewDayModal } from './NewDayModal';
export default observer(function Home(){

    function onDismiss(ev: any) {
        setNewRideModal(false);
    }

    return (
        <>
        {store().modalState.createModal && (
            <Modal
                //titleAriaId={titleId}
                isOpen={store().modalState.createModal}
                onDismiss={onDismiss}
                isBlocking={false}
            >
            <NewDayModal rideType="Departure"/>
            </Modal>
        )}
        </>
    )
});