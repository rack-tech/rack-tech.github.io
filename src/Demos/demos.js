import React, { useState } from "react";
import { Text, Box, Flex, useColorModeValue, chakra, Center } from "@chakra-ui/react";
import { VscTriangleLeft, VscTriangleRight } from 'react-icons/vsc'

import CombinedShuttleTracking from './Shuttle-Tracking.mp4'
import PlayerStats from './Player-Stats.mp4'
import HitNoHit from './Hit-NoHit.mp4'
import ShuttleTracking from './MS_video_output.mp4'

import '../browser-home.css'

export default function Demos() {

    const bg = useColorModeValue("gray.100", "#25282c");

    const arrowStyles = {
        cursor: "pointer",
        pos: "absolute",
        top: "50%",
        w: "auto",
        mt: "-22px",
        p: "16px",
        color: "black",
        bg: "gray.400",
        opacity: 0.4,
        fontWeight: "bold",
        fontSize: "2xl",
        transition: "0.4s ease",
        borderRadius: "0 3px 3px 0",
        userSelect: "none",
        _hover: {
            opacity: 0.8,
            bg: "gray.300",
        },
    };

    const videos = [
        {
            title: "Machine looks for Shuttlecock",
            src: CombinedShuttleTracking
        },
        {
            title: "Machine Detects and Tracks Players",
            src: PlayerStats
        },
        {
            title: "Machine categorizes between Hit and not a Hit",
            src: HitNoHit
        },
        {
            title: "Machine Tracks the Shuttlecock",
            src: ShuttleTracking
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const videoCount = videos.length;

    const prevSlide = () => {
        setCurrentSlide((s) => (s === 0 ? videoCount - 1 : s - 1));
    };
    const nextSlide = () => {
        setCurrentSlide((s) => (s === videoCount - 1 ? 0 : s + 1));
    };

    const carouselStyle = {
        transition: "all .2s",
        ml: `-${currentSlide * 100}%`,
    };

    return (
        <chakra.div h={window.innerHeight} bg={bg}>
            <Center>
                <Box w="90%" marginTop={5}>
                    <Flex
                        w={{ sm: "full", md: "70%" }}
                        bg={useColorModeValue("gray.200", "gray.600")}
                        p={2}
                        alignItems="center"
                        justifyContent="center">
                        <Flex w="full" overflow="hidden" pos="relative">
                            <Flex h={window.innerWidth >= 760 ? window.innerWidth * 0.35 : window.innerWidth * 0.50} w="full" {...carouselStyle}>
                                {
                                    videos.map((video, v_id) => (
                                    <Box key={`slide-${v_id}`} boxSize="full" flex="none" border='solid'>
                                        <chakra.span>
                                            <Text
                                                color="white"
                                                fontSize="md"
                                                p="1% 2%"
                                                pos="absolute"
                                                top="0">

                                                {v_id + 1} / {videoCount}
                                            </Text>
                                        </chakra.span>
                                        <video key="" height="100%" width="100%" src={video.src} controls loop autoPlay
                                            alt="Video Could not be loaded">
                                        </video>
                                    </Box>

                                ))}
                            </Flex>
                            <chakra.div {...arrowStyles} left="0" onClick={prevSlide}>
                                <VscTriangleLeft />
                            </chakra.div>
                            <chakra.div {...arrowStyles} right="0" onClick={nextSlide}>
                                <VscTriangleRight />
                            </chakra.div>
                            <Flex>
                                {/* Hello, here goes the {video.title} */}
                            </Flex>
                        </Flex>
                    </Flex>
                </Box>
            </Center>
        </chakra.div>)
}