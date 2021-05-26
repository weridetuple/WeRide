import React from 'react';
import { Stack, Text, Link, FontWeights, IStackTokens } from '@fluentui/react';
import logo from './logo.svg';
import './App.css';
import { isConstructorTypeNode } from 'typescript';

const boldStyle = { root: { fontWeight: FontWeights.semibold } };
const stackTokens: IStackTokens = { childrenGap: 15 };



export const App: React.FunctionComponent = () => {
  function fetchDummyData()
  {
    fetch(process.env.REACT_APP_API+"Test").then(Response => Response.json())
    .then(data => {
      return data;
    })
  }

  return (
    <Stack
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
      <div>
        {fetchDummyData}
      </div>
    </Stack>
  );
};
