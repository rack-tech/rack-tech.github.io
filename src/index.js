import React from 'react';
import ReactDOM from 'react-dom';

import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import Homepage from "./Homepage/browser-home"
import Contact from "./Contact/contact"
import Demos from "./Demos/demos"
import AboutUs from "./AboutUs/aboutus"
import Team from "./Team/team"
import Reports from './Reports/reports'
import ProductLayout from './Products/layout';

import './browser-home.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './Navbar/navbar';


const colors = {
  brand: {
    50: "#ecefff",
    100: "#cbceeb",
    200: "#a9aed6",
    300: "#888ec5",
    400: "#666db3",
    500: "#4d5499",
    600: "#3c4178",
    700: "#2a2f57",
    800: "#181c37",
    900: "#080819"
  }
};
const config = {
  initialColorMode: "dark",
};

const theme = extendTheme({ colors, config });

function LandingPage() {

  return (
    <ChakraProvider theme={theme}>
        <Router>
          <Navbar/>
          <Switch>
            <Route path="/team">
              <Team />
            </Route>
            <Route path="/demos">
              <Demos />
            </Route>
            <Route path="/aboutus">
              <AboutUs />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/reports">
              <Reports />
            </Route>
            <Route path="/products">
              <ProductLayout/>
            </Route>
            <Route path="/" exact>
              <Homepage />
            </Route>
          </Switch>
        </Router>
    </ChakraProvider>
  )
}

const root_element = document.getElementById('root')
ReactDOM.render(<LandingPage />, root_element)