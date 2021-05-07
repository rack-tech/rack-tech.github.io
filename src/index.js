import React from 'react';
import ReactDOM from 'react-dom';

import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import Homepage from "./Homepage/browser-home"
import Contact from "./Contact/contact"
import Demos from "./Demos/demos"
import AboutUs from "./AboutUs/aboutus"
import Team from "./Team/team"

import { chakra, Box, useColorModeValue, Flex } from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai"
import { Menu, MenuButton, MenuList, MenuDivider, MenuItem } from '@chakra-ui/react'
import './browser-home.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


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
  // initialColorMode: "dark",
  // useSystemColorMode: false
};

const theme = extendTheme({ colors, config });

function LandingPage() {

  const bg = useColorModeValue("gray.200", "#25282c");
  return (
    <ChakraProvider theme={theme}>
      <Router>
        {/* Nav Bar for Routing */}
        <chakra.nav bg={bg} shadow="base" zIndex={3}>
          <Box mx="auto" px={6} py={3} maxW="full">
            <Box
              display={{ md: "flex" }}
              alignItems={{ md: "center" }}
              justifyContent={{ md: "space-between" }}>
              <Flex alignItems="center" justifyContent="space-between">
                <Box fontSize="xl" fontWeight="semibold" color="gray.700">
                  <chakra.span
                    fontSize={["xl", , "3xl"]}
                    fontWeight="bold"
                    fontFamily="Comfortaa"
                    color={useColorModeValue("gray.800", "white")}>
                    Rack
                                </chakra.span>
                  <chakra.span
                    fontSize={["xl", , "3xl"]}
                    fontWeight="bold"
                    fontFamily="Comfortaa"
                    color={useColorModeValue("red.600", "red.200")}>
                    Tech
                                </chakra.span>
                </Box>

                <Box display={{ md: 'none' }}>
                  <Menu hidden={{ md: true, lg: true }}>
                    <MenuButton
                      px={4}
                      py={2}
                      transition="all 0.2s"
                      borderRadius="lg"
                      borderWidth="1px"
                      color={useColorModeValue('#25282c', 'gray.100')}
                      _hover={{ bg: "gray.100" }}
                      _expanded={{ bg: "gray.300" }}
                      _focus={{ boxShadow: "outline" }}
                    >
                      <AiOutlineMenu />
                    </MenuButton>
                    <MenuList>
                      <Link to="/">
                        <MenuItem>
                          Home
                    </MenuItem>
                      </Link>
                      <Link to="/demos">
                        <MenuItem>
                          Demos
                      </MenuItem>
                      </Link>
                      <MenuDivider />
                      <Link to="/team">
                        <MenuItem>
                          Team
                      </MenuItem>
                      </Link>
                      <MenuDivider />
                      <Link to="/aboutus">
                        <MenuItem>
                          About Us
                      </MenuItem>
                      </Link>
                      <Link to="/contact">
                        <MenuItem>
                          Contact
                      </MenuItem>
                      </Link>
                    </MenuList>
                  </Menu>
                </Box>
              </Flex>

              <Box display={["none", , "flex"]} alignItems={{ md: "center" }}>
                <chakra.button
                  display="block"
                  mx={4}
                  mt={[2, , 0]}
                  fontSize="md"
                  color={useColorModeValue("gray.700", "gray.200")}
                  textTransform="capitalize"
                  _hover={{ color: useColorModeValue("red.400", "red.400") }}>
                  <Link to="/">
                    Home
                                </Link>
                </chakra.button>
                <chakra.button
                  display="block"
                  mx={4}
                  mt={[2, , 0]}
                  fontSize="md"
                  color={useColorModeValue("gray.700", "gray.200")}
                  textTransform="capitalize"
                  _hover={{ color: useColorModeValue("red.400", "red.400") }}>
                  <Link to="/demos">
                    Demos
                                </Link>
                </chakra.button>
                <chakra.button
                  display="block"
                  mx={4}
                  mt={[2, , 0]}
                  fontSize="md"
                  color={useColorModeValue("gray.700", "gray.200")}
                  textTransform="capitalize"
                  _hover={{ color: useColorModeValue("red.400", "red.400") }}>
                  <Link to="/team">
                    Team
                                </Link>
                </chakra.button>
                <chakra.button
                  display="block"
                  mx={4}
                  mt={[2, , 0]}
                  fontSize="md"
                  color={useColorModeValue("gray.700", "gray.200")}
                  textTransform="capitalize"
                  _hover={{ color: useColorModeValue("red.400", "red.400") }}>
                  <Link to="/aboutus">
                    About Us
                                </Link>
                </chakra.button>
                <chakra.button
                  display="block"
                  mx={4}
                  mt={[2, , 0]}
                  fontSize="md"
                  color={useColorModeValue("gray.700", "gray.200")}
                  textTransform="capitalize"
                  _hover={{ color: useColorModeValue("red.400", "red.400") }}>
                  <Link to="/contact">
                    Contact
                                </Link>
                </chakra.button>
              </Box>
            </Box>
          </Box>
        </chakra.nav>
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
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  )
}

const root_element = document.getElementById('root')
ReactDOM.render(<LandingPage />, root_element)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
