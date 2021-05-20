import React from 'react';
import { NavigationBar } from "./components/NavigationBar"
import './App.css';

// Also available from @uifabric/icons (7 and earlier) and @fluentui/font-icons-mdl2 (8+)
import { initializeIcons } from '@fluentui/react/lib/Icons';

initializeIcons(/* optional base url */);

export const App: React.FunctionComponent = () => {
  return (
    <div className="App">
        <NavigationBar></NavigationBar>
    </div>
  );
};
