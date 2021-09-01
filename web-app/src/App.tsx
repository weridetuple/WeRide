import React from 'react';
import { Stack, Text, Link, FontWeights, IStackTokens } from '@fluentui/react';
import logo from './logo.svg';
import './App.css';
import { isConstructorTypeNode } from 'typescript';
import {Day} from './Components/Day';
import  './Components/styles.css';
import Home from './Components/Home';
const boldStyle = { root: { fontWeight: FontWeights.semibold } };
const stackTokens: IStackTokens = { childrenGap: 15 };



export const App: React.FunctionComponent = () => {
  return (
    <div className="stack">
      <Home/>
    <Stack
    horizontal={true}
      horizontalAlign="center"
      verticalAlign="center"
      verticalFill
      styles={{
        root: {
          width: '960px',
          margin: '0 auto',
          textAlign: 'center',
          color: '#605e5c',
        },
      }}
      tokens={stackTokens}
    >
    <Day Day={"Monday"}/>
    <Day Day={"Tuesday"}/>
    <Day Day={"Wednesday"}/>
    <Day Day={"Thursday"}/>
    <Day Day={"Friday"}/>
    </Stack>
    </div>
  );
};
