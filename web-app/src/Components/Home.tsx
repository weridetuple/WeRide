import React from 'react';
import './styles.css';
import store from '../store/Store';
import { showPassengerModal, showWeekPicker } from './../actions';
import { observer } from 'mobx-react';
import { Modal } from '@fluentui/react';
import { setNewRideModal, setCurrentWeek } from './../actions';
import NewDayModal from './NewDayModal';
import Day from './Day';
import { Stack, Text, Link, FontWeights, IStackTokens } from '@fluentui/react';
import { DayPickerStrings } from '../Utils/CalendarString'
import { ActionButton } from '@fluentui/react/lib/Button';
import {
    DatePicker,
    DayOfWeek,
    mergeStyles,
    DateRangeType,
    Calendar,
    IDatePickerStrings,
    IIconProps
} from '@fluentui/react';
import Store from '../store/Store';
import { Image, IImageProps, ImageFit } from '@fluentui/react/lib/Image';
import PassengerModal from './PassengerModal';

const stackTokens: IStackTokens = { childrenGap: 15 };
const imageProps: IImageProps = {
    imageFit: ImageFit.center,
    width: 350,
    height: 60,
    // Show a border around the image (just for demonstration purposes)
    styles: props => ({ root: { border: '1px solid ' + props.theme.palette.neutralSecondary } }),
};
const workWeekDays = [DayOfWeek.Monday, DayOfWeek.Tuesday, DayOfWeek.Wednesday, DayOfWeek.Thursday, DayOfWeek.Friday];

export default observer(function Home() {

    function onDismiss(ev: any) {
        setNewRideModal(false);
    }

    function onDismissWeekModal(ev: any) {
        showWeekPicker(false);
    }

    function onDismissPassengerModal(ev: any) {
        showPassengerModal(false);
    }

    function onCalendarClick(ev: any) {
        showWeekPicker(true);
    }
    const dateRangeType = DateRangeType.WorkWeek;
    const [selectedDate, setSelectedDate] = React.useState<Date>();

    const onSelectDate = React.useCallback((date: Date, dateRangeArray: Date[] | undefined): void => {
        if (dateRangeArray) {
            setCurrentWeek(dateRangeArray);
        }


    }, []);
    let dateRangeString = 'Not set';
    if (Store().currentWeek.length > 0) {
        const rangeStart = Store().currentWeek[0];
        const rangeEnd = Store().currentWeek[Store().currentWeek.length - 1];
        dateRangeString = rangeStart.toLocaleDateString() + '-' + rangeEnd.toLocaleDateString();
    }

    const emojiIcon: IIconProps = { iconName: 'Calendar' };
    return (
        <>

            {store().modalState.createModal && (
                <Modal
                    isOpen={store().modalState.createModal}
                    onDismiss={onDismiss}
                    isBlocking={false}
                >
                    <NewDayModal />
                </Modal>
            )}
            {store().modalState.showPassengerModal && (
                <Modal
                    isOpen={store().modalState.showPassengerModal}
                    onDismiss={onDismiss}
                    isBlocking={true}
                >
                    <PassengerModal />
                </Modal>
            )}
            {store().modalState.showWeekPicker &&
                <Modal
                    isOpen={store().modalState.showWeekPicker}
                    onDismiss={onDismissWeekModal}
                    isBlocking={false}
                >
                    <Calendar
                        dateRangeType={dateRangeType}
                        workWeekDays={workWeekDays}
                        firstDayOfWeek={DayOfWeek.Monday}
                        highlightSelectedMonth
                        showGoToToday
                        onSelectDate={onSelectDate}
                        value={selectedDate}
                        strings={DayPickerStrings}
                    />
                </Modal>
            }
            < Stack
                horizontalAlign="center"
                tokens={stackTokens} >
                <div className="datePickerHeader">
                    < Stack
                        horizontal={true}
                        horizontalAlign="center"
                        tokens={stackTokens} >
                        {/* <Image {...imageProps} src="./images/tupleLogo_adobespark.png" /> */}
                        <ActionButton iconProps={emojiIcon} allowDisabledFocus onClick={onCalendarClick}>
                            {dateRangeString}
                        </ActionButton>
                    </Stack >
                </div>
                <Stack
                    horizontal={true}
                    tokens={stackTokens}
                    verticalAlign="center"

                >
                    <Day Day={"Monday"} />
                    <Day Day={"Tuesday"} />
                    <Day Day={"Wednesday"} />
                    <Day Day={"Thursday"} />
                    <Day Day={"Friday"} />
                </Stack>
            </Stack >
        </>
    )
});