import React from "react";
import { Heading, Center, chakra, Box, useColorModeValue, Image, Flex, Stack, Text, Avatar } from "@chakra-ui/react";
import '../browser-home.css'

import Arya from "./arya.jpeg"
import Dev from "./dev.jpeg"
import Aniket from "./aniket.jpeg"
import Kohinoor from "./kohinoor.jpeg"
import Bg from "./background.jpg"


import {
    Button,
} from "@chakra-ui/react";

export default function Team() {
    const bg = useColorModeValue("gray.100", "#25282c");
    const details = [
        {
            name: "Arya Bhivpathaki",
            desg: "Co-Founder and CEO of RackTech",
            linkedin: "https://www.linkedin.com/in/arya-bhivpathaki-27511216a/",
            github: "https://github.com/AryaB-1999",
            img: Arya
        },
        {
            name: "Devakanta Rao",
            desg: "Co-Founder and CTO of RackTech",
            linkedin: "https://www.linkedin.com/in/devakanta-rao-8ab922117/",
            github: "https://github.com/dev681999",
            img: Dev
        },
        {
            name: "Aniket Velhankar",
            desg: "AI & ML Tech Lead, RackTech",
            linkedin: "https://www.linkedin.com/in/aniketvelhankar/",
            github: "https://github.com/AniketVelhankar",
            img: Aniket
        },
        {
            name: "Kohinoor Chaterjee",
            desg: "Expert in Algorithms, RackTech",
            linkedin: "https://www.linkedin.com/in/kohinoor-chatterjee-30732b15a/",
            github: "https://github.com/kohinoor98",
            img: Kohinoor
        }
    ]

    var bg_color = useColorModeValue('white', 'gray.800')
    var linkedin_bg_color = useColorModeValue('gray.100', 'gray.700')
    var linkedin_text_color = useColorModeValue('gray.800', 'gray.200')
    var github_bg_color = useColorModeValue('brand.100', 'brand.700')
    var github_text_color = useColorModeValue('gray.800', 'gray.200')



    return (
        <chakra.div h={window.innerHeight} bg={bg}>
            <Stack direction={["column", "row"]}
                marginLeft="5%" marginRight="5%" spacing={10} alignContent="center" alignItems="center">

                {
                    details.map((object) =>
                        <Center py={12}>
                            <Box
                                maxW={'400px'}
                                w={'400px'}
                                bg={bg_color}
                                boxShadow={'2xl'}
                                rounded={'md'}
                                overflow={'hidden'}>
                                <Image
                                    h={'200px'}
                                    w={'full'}
                                    src={
                                        Bg
                                    }
                                    objectFit={'fill'}
                                />
                                <Flex justify={'center'} mt={-50}>
                                    <Avatar
                                        size={'xl'}
                                        src={
                                            object.img
                                        }
                                        alt={object.name}
                                    />
                                </Flex>

                                <Box p={6}>
                                    <Stack spacing={0} align={'center'} mb={5}>
                                        <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                                            {object.name}
                                        </Heading>
                                        <Text color={'gray.400'}>{object.desg}</Text>
                                    </Stack>

                                    <Stack direction={'row'} justify={'center'} spacing={6}>
                                        <Stack spacing={0} align={'center'}>
                                            <Button
                                                w={'full'}
                                                mt={8}
                                                bg={linkedin_bg_color}
                                                color={linkedin_text_color}
                                                rounded={'md'}>
                                                <a href={object.linkedin}>
                                                    LinkedIn
                                                    </a>
                                            </Button>
                                        </Stack>
                                        <Stack spacing={0} align={'center'}>
                                            <Button
                                                w={'full'}
                                                mt={8}
                                                bg={github_bg_color}
                                                color={github_text_color}
                                                rounded={'md'}>
                                                <a href={object.github}>
                                                    Github
                                            </a>
                                            </Button>
                                        </Stack>
                                    </Stack>


                                </Box>
                            </Box>
                        </Center>
                    )
                }

            </Stack>
        </chakra.div>)
}