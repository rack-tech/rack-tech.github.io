import React from "react";
import { chakra, Box, useColorModeValue, Text, Center } from "@chakra-ui/react";
import '../browser-home.css'

export default function Demos() {
    const bg = useColorModeValue("gray.100", "#25282c");
    return (
        <chakra.div h={window.innerHeight} bg={bg}>
            <Center>
                <Box w="90%" marginTop={5}>
                    <Text fontFamily="Comfortaa" fontSize="4xl" textAlign="center" color={useColorModeValue("red.600", "red.300")}>
                        Oops!, Still under development!!!!!
                </Text>
                </Box>
            </Center>
        </chakra.div>)
}