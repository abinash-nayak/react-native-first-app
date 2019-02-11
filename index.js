/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import React from "react";
import { AppRegistry } from "react-native";
import Header from "./src/components/header";

const App = () => {
  return <Header />;
};

AppRegistry.registerComponent("albums", () => App);
