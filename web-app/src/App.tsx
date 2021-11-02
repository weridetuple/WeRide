import React from 'react';
import { Stack, Text, Link, FontWeights, IStackTokens } from '@fluentui/react';
import logo from './logo.svg';
import './App.css';
import { isConstructorTypeNode } from 'typescript';
import './Components/styles.css';
import Home from './Components/Home';
import { useAuth0 } from '@auth0/auth0-react';

const boldStyle = { root: { fontWeight: FontWeights.semibold } };

export const App: React.FunctionComponent = () => {
  const {
    isLoading,
    isAuthenticated,
    error,
    user,
    loginWithRedirect,
    logout,
  } = useAuth0<{ name: string }>();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isAuthenticated) {
    return (
      <div>
        <div style={{
          backgroundColor: '#d1f0eb',
          width: '100%',
          height: '100%'
        }}>
          <Home />
        </div>
      </div>
    );
  } else {
    return (
      <div style={{
        backgroundColor: '#1AB39D',
        width: '100%',
        height: '100%'
      }}>
      </div>
    )
  }
};
