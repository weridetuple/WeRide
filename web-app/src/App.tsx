import React from 'react';
import { Stack, Text, Link, FontWeights, IStackTokens } from '@fluentui/react';
import logo from './logo.svg';
import './App.css';
import { isConstructorTypeNode } from 'typescript';
import './Components/styles.css';
import Home from './Components/Home';
const boldStyle = { root: { fontWeight: FontWeights.semibold } };




export const App: React.FunctionComponent = () => {
  return (
    <div style={{
      backgroundColor: '#d1f0eb',
      width: '100%',
      height: '100%'
    }}>
      <Home />
    </div>
  );
};
