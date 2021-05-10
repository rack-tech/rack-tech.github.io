import React from 'react';

import ToggleMenu from "../Toggle-Color-mode/toggle-color-mode-menuitem"

import { chakra, Box, useColorModeValue, Flex } from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai"
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import '../browser-home.css'

import {
    Link
} from "react-router-dom";
import ToggleButton from '../Toggle-Color-mode/toggle-color-mode-button';

export default function Navbar() {
    const bg = useColorModeValue("gray.200", "#25282c")
    const brand_1 = "Rack"
    const brand_2 = "Tech"

    const nav_info = [
        {
            link: "/",
            text: "Home"
        },
        {
            link: "/demos",
            text: "Demos"
        },
        {
            link: "/team",
            text: "Team"
        },
        {
            link: "/aboutus",
            text: "About Us"
        },
        {
            link: "/contact",
            text: "Contact"
        },
    ]

    var curr_color = useColorModeValue("gray.700", "gray.200")

    return (
        <chakra.nav bg={bg} shadow="base" zIndex={3}>
            <Box mx="auto" px={6} py={3} maxW="full">
                <Box
                    display={{ md: "flex" }}
                    alignItems={{ md: "center" }}
                    justifyContent={{ md: "space-between" }}>
                    <Flex alignItems="center" justifyContent="space-between">
                        <Box fontSize="xl" fontWeight="semibold" color="gray.700">
                            <chakra.span
                                fontSize={["xl", "xl", "3xl"]}
                                fontWeight="bold"
                                fontFamily="Comfortaa"
                                color={useColorModeValue("gray.800", "white")}>
                                {brand_1}
                            </chakra.span>
                            <chakra.span
                                fontSize={["xl", "xl", "3xl"]}
                                fontWeight="bold"
                                fontFamily="Comfortaa"
                                color={useColorModeValue("red.600", "red.200")}>
                                {brand_2}
                            </chakra.span>
                        </Box>

                        <Box
                            display={{ md: 'none' }}>
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
                                    _focus={{ boxShadow: "outline" }}>

                                    <AiOutlineMenu />
                                </MenuButton>
                                <MenuList>
                                    {
                                        nav_info.map((object) =>
                                            <Link to={object.link}>
                                                <MenuItem>
                                                    {object.text}
                                                </MenuItem>
                                            </Link>
                                        )}
                                    <ToggleMenu />
                                </MenuList>
                            </Menu>
                        </Box>
                    </Flex>

                    <Box display={["none", "flex", "flex"]} alignItems={{ md: "center" }}>
                        {
                            nav_info.map((object) =>
                                <chakra.button
                                    display="block"
                                    mx={4}
                                    mt={[2, 2, 0]}
                                    fontSize="md"
                                    color={curr_color}
                                    textTransform="capitalize"
                                    _hover={{ color: "red.400" }}>
                                    <Link to={object.link}>
                                        {object.text}
                                </Link>
                                </chakra.button>
                            )
                        }

                        <ToggleButton />
                    </Box>
                </Box>
            </Box>
        </chakra.nav>
    )
}
