import React from "react";
import { chakra, Box, useColorModeValue, Image } from "@chakra-ui/react";
import '../browser-home.css'
import Img from "./Homepage-1.png"
import { Link } from "react-router-dom";

export default function App() {
    const bg = useColorModeValue("gray.100", "#25282c");
    return (
        <chakra.div h={window.innerHeight} bg={bg}>
            <Box pos="relative" overflow="hidden" >
                <Box mx="auto">
                    <Box
                        pos="relative"
                        pb={{ base: 8, sm: 16, md: 20, lg: 28, xl: 32 }}
                        maxW={{ lg: "50%" }}
                        w={{ lg: "full" }}

                        bg={bg}
                        border="solid 1px transparent"
                    >
                        <Box
                            mx="auto"
                            maxW={{ base: "7xl" }}
                            px={{ base: 4, sm: 6, lg: 8 }}
                            mt={{ base: 10, sm: 12, md: 16, lg: 20, xl: 28 }}>
                            <Box
                                w="full"
                                textAlign={{ sm: "center", lg: "left" }}
                                justifyContent="center"
                                alignItems="center">
                                <chakra.h1
                                    fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
                                    letterSpacing="tight"
                                    lineHeight="short"
                                    fontWeight="extrabold"
                                    color={useColorModeValue("gray.800", "white")}>

                                    <chakra.span display={{ base: "block", xl: "inline" }}>
                                        Revolutionize your Game
                                    </chakra.span>
                                    <chakra.span
                                        display={{ base: "block", xl: "inline" }}
                                        color={useColorModeValue("red.700", "red.400")}
                                    >
                                        {" using Data Analytics"}
                                    </chakra.span>
                                </chakra.h1>
                                <chakra.p
                                    mt={{ base: 3, sm: 5, md: 5 }}
                                    maxW={{ sm: "xl" }}
                                    mx={{ sm: "auto", lg: 0 }}
                                    fontFamily="Comfortaa"
                                    fontStyle="oblique"
                                    color={useColorModeValue("black", "red.50")}
                                    fontSize="35px">
                                    {"\"He who can see the invisible can do the impossible\""} <br></br>
                                </chakra.p>
                                <chakra.p
                                    mt={{ base: 3, sm: 5, md: 5 }}
                                    maxW={{ sm: "xl" }}
                                    mx={{ sm: "auto", lg: 0 }}
                                    fontFamily="Zilla Slab"
                                    fontStyle="normal"
                                    color={useColorModeValue("black", "red.50")}
                                    fontSize="25px">
                                    {"-FRANK L. GAINES"} <br></br>
                                </chakra.p>
                                <Box
                                    mt={{ base: 5, sm: 8 }}
                                    display={{ sm: "flex" }}
                                    justifyContent={{ sm: "center", lg: "start" }}
                                    fontWeight="extrabold"
                                    fontFamily="Comfortaa"
                                >
                                    <Box rounded="full" shadow="md">
                                        <Link to="/demos">
                                            <chakra.button
                                                w="full"
                                                display="flex"
                                                alignItems="center"
                                                justifyContent="center"
                                                border="solid 1px transparent"
                                                fontSize={{ base: "md", md: "lg" }}
                                                rounded="md"
                                                color="white"
                                                bg="red.600"
                                                _hover={{ bg: "red.900" }}
                                                px={{ base: 8, md: 10 }}
                                                py={{ base: 3, md: 4 }}>
                                                Demos
                                        </chakra.button>
                                        </Link>
                                    </Box>
                                    <Box mt={[3, 0]} ml={[null, 3]}>
                                        <Link to="/team">
                                            <chakra.button
                                                w="full"
                                                display="flex"
                                                alignItems="center"
                                                justifyContent="center"
                                                px={{ base: 8, md: 10 }}
                                                py={{ base: 3, md: 4 }}
                                                border="solid 1px transparent"
                                                fontSize={{ base: "md", md: "lg" }}
                                                rounded="md"
                                                color="gray.200"
                                                bg="gray.600"
                                                _hover={{ bg: "gray.400" }}>
                                                Team
                                        </chakra.button>
                                        </Link>
                                    </Box>
                                    <Box mt={[3, 0]} ml={[null, 3]}>
                                        <Link to="/aboutus">
                                            <chakra.button
                                                w="full"
                                                display="flex"
                                                alignItems="center"
                                                justifyContent="center"
                                                px={{ base: 8, md: 10 }}
                                                py={{ base: 3, md: 4 }}
                                                border="solid 1px transparent"
                                                fontSize={{ base: "md", md: "lg" }}
                                                rounded="md"
                                                color="brand.700"
                                                bg="brand.100"
                                                _hover={{ bg: "gray.400" }}>
                                                About Us
                                        </chakra.button>
                                        </Link>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box
                    padding="1%"
                    position={{ lg: "absolute" }}
                    top={{ lg: 0 }}
                    bottom={{ lg: 0 }}
                    right={{ lg: 0 }}
                    w={{ lg: "50%", md: "100%", sm: "100%" }}
                    rounded="md"
                >
                    <Image
                        h="full"
                        w="full"
                        fit="cover"
                        src={Img}
                        alt="Loading..."
                        loading="eager"
                        boxShadow="dark-lg"
                        rounded="3xl"
                    />
                </Box>
            </Box>
        </chakra.div>
    );
};

