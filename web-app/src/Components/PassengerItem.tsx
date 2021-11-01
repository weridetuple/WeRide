import * as React from 'react';
import { observer } from 'mobx-react';
import { Stack, Text, Link, FontWeights, IStackTokens, Label, PrimaryButton, DefaultButton, Persona, IIconProps, IconButton, Icon, FontIcon } from '@fluentui/react';
import './styles.css';
import { User } from '../store/schema/User';


interface PassengerItemProps {
    passengar: User
}

const stackTokens: IStackTokens = { childrenGap: 10 };



export default observer(function PassengerItem(props: PassengerItemProps) {
    const [expanded, setExpanded] = React.useState<boolean>(false);

    var cancelIcon: IIconProps = { iconName: 'ChevronRight' };

    //Make these API's
    var phoneNumber = '9562417300';
    var address = '19423 22nd Ave SE unit A Bothell, Wa 98012';

    if (expanded) {
        cancelIcon.iconName = 'ChevronDown';
    }
    else {
        cancelIcon.iconName = 'ChevronRight';
    }

    function onClick() {
        if (!expanded) {
            setExpanded(true);
            cancelIcon.iconName = 'ChevronDown';
        }
        else {
            setExpanded(false);
            cancelIcon.iconName = 'ChevronRight';
        }
    }

    function onPhoneCopy() {
        navigator.clipboard.writeText(phoneNumber);
    }

    function onAddressCopy() {
        navigator.clipboard.writeText(address);
    }

    const copyIcon: IIconProps = { iconName: 'Copy' };

    return (
        <div className="passengerDetails" >
            <Stack className="modalStack" tokens={stackTokens}>
                <Stack horizontal={true} horizontalAlign="space-between">
                    <Persona
                        imageInitials={props.passengar.firstName.charAt(0) + props.passengar.lastName.charAt(0)}
                        text={props.passengar.firstName + " " + props.passengar.lastName}
                        secondaryText={props.passengar.role}
                    />
                    <IconButton
                        iconProps={cancelIcon}
                        ariaLabel="Close popup modal"
                        onClick={onClick}
                    />
                </Stack>
                {expanded &&
                    <>
                        <Stack tokens={stackTokens} horizontal className="passengerAttributes" verticalAlign="center">
                            <FontIcon aria-label="Home" iconName="Home" />
                            <Label>{address}</Label>
                            <IconButton iconProps={copyIcon} title="Copy" ariaLabel="CopyHomeAddress" onClick={onAddressCopy} />
                        </Stack>
                        <Stack tokens={stackTokens} horizontal className="passengerAttributes" verticalAlign="center" horizontalAlign="space-between">
                            <Stack.Item >
                                <Stack horizontal verticalAlign="center" tokens={stackTokens}>
                                    <FontIcon aria-label="Phone Number" iconName="Phone" />
                                    <Label>{phoneNumber}</Label>
                                </Stack>
                            </Stack.Item>
                            <IconButton iconProps={copyIcon} title="Copy" ariaLabel="CopyHomeAddress" onClick={onPhoneCopy} />
                        </Stack>
                        <Stack tokens={stackTokens} horizontal className="passengerAttributes" verticalAlign="center">
                            <FontIcon aria-label="Money" iconName="Money" />
                            <Label>Gas Fee : $5</Label>
                        </Stack>
                    </>
                }
            </Stack>
        </div>
    );
});


