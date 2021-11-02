import ReactDOM from 'react-dom';
import { App } from './App';
import { mergeStyles } from '@fluentui/react';
import reportWebVitals from './reportWebVitals';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import { loadTheme } from 'office-ui-fabric-react';
import { Auth0Provider } from '@auth0/auth0-react';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as dotenv from "dotenv";

loadTheme({
  palette: {
    themePrimary: '#1ab39d',
    themeLighterAlt: '#f3fcfb',
    themeLighter: '#d2f3ee',
    themeLight: '#ade8df',
    themeTertiary: '#66d1c1',
    themeSecondary: '#2fbca7',
    themeDarkAlt: '#18a18c',
    themeDark: '#148876',
    themeDarker: '#0f6457',
    neutralLighterAlt: '#faf9f8',
    neutralLighter: '#f3f2f1',
    neutralLight: '#edebe9',
    neutralQuaternaryAlt: '#e1dfdd',
    neutralQuaternary: '#d0d0d0',
    neutralTertiaryAlt: '#c8c6c4',
    neutralTertiary: '#a19f9d',
    neutralSecondary: '#605e5c',
    neutralPrimaryAlt: '#3b3a39',
    neutralPrimary: '#323130',
    neutralDark: '#201f1e',
    black: '#000000',
    white: '#ffffff',
  }
});

initializeIcons();

// Inject some global styles
mergeStyles({
  ':global(body,html,#root)': {
    margin: 0,
    padding: 0,
    height: '100vh',
  },
});

// Load dotenv
dotenv.config({path: '../.env'});

ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN!}
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID!}
    redirectUri={window.location.origin}
  >
    <NavBar />
    <App />
  </Auth0Provider>,
  document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
