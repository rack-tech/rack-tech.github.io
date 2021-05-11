import React, { useState } from "react";
import { Text, Box, Flex, useColorModeValue, chakra, Center, SimpleGrid, GridItem, UnorderedList, ListItem } from "@chakra-ui/react";
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
            src: CombinedShuttleTracking,
            content_title: "Finding flying object in Image",
            content_technology: ["Computer Vision", "Morphology", "Segmentation"],
            content: "Our State of the Art Algorithms detect flying objects like Shuttlecocks, Tennis/Table Tennis Balls, etc for tracking " +
                ", we know the importance of trajectory plotting and estimating paths of flying objects, as it helps players to understand " +
                "their position as well as footwork for each movement better. It also helps coaches and players to identify object trajectories " +
                "to target as well as object trajectories to avoid."
        },
        {
            title: "Machine Detects and Tracks Players",
            src: PlayerStats,
            content_title: "Calculating Statistics",
            content_technology: ["Pure Statistics", "Deep Learning", "Projective Transformations"],
            content: "To determine physical performance of a player, we need to analyse player's movements, one simple way is to determine " + 
                    "Distance covered by the player, here on the left hand side, in red color, we can see the distance travelled by players." + 
                    " Solution is not as simple as it seems as we have to convert the 3D space of court into 2D floor to get accurate results, " + 
                    " results given by our software have a mean shift of 0.05%, which leads to extremely accurate results. " +
                    "To know more about benchmarks about distance covered by the player, contact us, or to see full reports of player's performance" +
                    ", go to reports <TBD> section."
        },
        {
            title: "Machine categorizes between Hit and not a Hit",
            src: HitNoHit,
            content_title: "Automatic Detection of a Hit",
            content_technology: ["Deep Learning", "Custom Model Training", "Quantization"],
            content: "For every Racket Sport, each player can benefit in one form or the other if player gets detailed reports for no of hits, " +
                    " how many shots he played as attacking strokes, how many were played as defensive strokes, average length of rallies, detailed analysis of " + 
                    "player's hitting zones, accuracy of hits, effectiveness of hits and so on. This is the first step in the same direction and we are coming up with " + 
                    "detailed analysis reports for every game/match with our products. If you want to see benchmarks about the same, please do contact us " + 
                    " or if you want to see full reports of Hits of a player, go to reports <TBD> section."
        },
        {
            title: "Machine Tracks the Shuttlecock",
            src: ShuttleTracking,
            content_title: "Filtering the Best from the Rest",
            content_technology: ["Pure Algorithms", "Computer Vision", "Segmentation methods", "Complex Derived Morph Operations"],
            content: "It is not just important to track the shuttlecock in real time, it needs to be very accurate, hence our State of the Art algorithm " + 
                    "picks outputs from the previous 3 demostrations and builds a very accurate path that has been travelled by the shuttlecock, giving a single, " + 
                    "errorfree path for shuttlecock that can be used for plotting, mapping and even integrated with results of other algorithms " + 
                    "to get extremely detailed, microscopic analysis of a game played by any player."
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
        transition: "all .5s",
        ml: `-${currentSlide * 100}%`,
    };

    const vid_text_color = useColorModeValue("gray.900", "gray.100")
    const title_color = useColorModeValue('red.700', 'red.300')

    return (
            <Center bg={bg}>
                <Box w="90%" marginTop={5} h='full'>
                    <Flex
                        rounded='2xl'
                        bg={useColorModeValue("gray.200", "#25282c")}
                        p={2}
                        alignItems="center"
                        justifyContent="center">
                        <Flex w="full" overflow="hidden" pos="relative">
                            <Flex h="full" w="full" {...carouselStyle}>
                                {
                                    videos.map((video, v_id) => (
                                        <Box key={`slide-${v_id}`} boxSize="full" flex="none">
                                            <SimpleGrid alignItems='center' columns={{ base: 1, md: 3, lg: 4 }}>
                                                <GridItem colSpan={[1, 3, 4]}>
                                                <Center>
                                                    <Text
                                                        color={vid_text_color}
                                                        fontSize={['md', '2xl']}
                                                        >

                                                        Demo {v_id + 1}
                                                    </Text>
                                                </Center>
                                                </GridItem>
                                                <GridItem colSpan={3}>

                                                    <video key="" height="100%" width="100%" src={video.src} controls loop autoPlay
                                                        alt="Video Could not be loaded">
                                                    </video>
                                                    <Center>
                                                        <Text fontFamily="Zilla Slab" fontSize={["2xl", "4xl"]}>
                                                            {video.title}
                                                        </Text>
                                                    </Center>
                                                </GridItem>

                                                <Flex mt={[10, 0]} pl={[0, 5]}>
                                                    <Text fontFamily="Zilla Slab" w="full" fontSize={["2xl", '4xl']}>
                                                        <Text color={title_color} alignContent='center' fontSize={["3xl", '4xl']}>
                                                            {video.content_title}
                                                        </Text>
                                                        <Text mt={['', '5']} fontFamily='Montserrat' fontStyle='bold' fontSize='xl'>
                                                            Technology
                                                        </Text>
                                                        <UnorderedList >
                                                            {
                                                                (() => {
                                                                    var techs = []
                                                                    for (var tech in video.content_technology) {
                                                                        techs.push(<ListItem fontFamily='Montserrat' fontSize={['xl', 'xl']} ml="10%">{video.content_technology[tech]}</ListItem>)
                                                                    }
                                                                    return techs
                                                                })()
                                                            }
                                                        </UnorderedList>
                                                        <br />
                                                        <Text h={['full', '40%']} fontFamily='Poppins' overflowY={['none', 'scroll']} justifyContent="space-between" fontSize='lg'>
                                                            {video.content}
                                                        </Text>
                                                    </Text>
                                                </Flex>
                                            </SimpleGrid>
                                        </Box>

                                    ))}
                            </Flex>
                        </Flex>
                        <chakra.div {...arrowStyles} left="2%" onClick={prevSlide}>
                            <VscTriangleLeft />
                        </chakra.div>
                        <chakra.div {...arrowStyles} right="2%" onClick={nextSlide}>
                            <VscTriangleRight />
                        </chakra.div>
                    </Flex>
                </Box>
            </Center>)
}