import React from 'react';
import observer from 'mobx'
import { Stack, Text, Link, FontWeights, IStackTokens } from '@fluentui/react';
import { TextField, MaskedTextField } from '@fluentui/react/lib/TextField';
import { Dropdown, DropdownMenuItemType, IDropdownOption, IDropdownStyles } from '@fluentui/react/lib/Dropdown';
import  './styles.css';
import { Label } from '@fluentui/react/lib/Label';
import { ChoiceGroup, IChoiceGroupOption } from '@fluentui/react/lib/ChoiceGroup';
import {
  Calendar,
  DefaultButton,
  Callout,
  FocusTrapZone,
} from '@fluentui/react';
import { useBoolean } from '@fluentui/react-hooks';
const stackTokens: IStackTokens = { childrenGap: 15 };

interface NewDayModalProps {
    rideType: string;
  }

  const options: IChoiceGroupOption[] = [
    { key: 'drive', text: 'drive'},
    { key: 'carpool', text: 'carpool'},
  ];

const NewDayModal = (props: NewDayModalProps) => {

    return (
        <div className="tileContent">
            <Stack tokens={stackTokens}>
                <div >{props.rideType}</div>
                <div className="rideAttributes">
                </div>
                <div className="rideAttributes">
                <Label disabled>Arrival Time</Label>
                        <Stack horizontal={true}>
                        <div className="timeTextField">                       
                        <MaskedTextField mask="** : **" maskChar="0"/>
                        </div>
                        <Dropdown
                        placeholder="AM"
                            options={[
                                { key: 'AM', text: 'AM' },
                                { key: 'PM', text: 'PM' },
                              ]}
                            />  
                            </Stack>                        
                </div>
                <div className="rideAttributes">
                <ChoiceGroup label="Pick method of transportation" defaultSelectedKey="day" options={options} />
                </div>
            </Stack>
        </div>
    )
}

export {NewDayModal};