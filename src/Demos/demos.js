import React from "react";
import { chakra, Box, useColorModeValue, Image, Flex, IconButton } from "@chakra-ui/react";
import '../browser-home.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function Demos() {
    const bg = useColorModeValue("gray.100", "#25282c");
    return (
        <chakra.div h={window.innerHeight} bg={bg}>
            In Progress, to be done
        </chakra.div>)
}