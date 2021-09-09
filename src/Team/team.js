import React from "react";
import { Heading, Center, chakra, Box, useColorModeValue, Image, Flex, Stack, Text, Avatar, SimpleGrid } from "@chakra-ui/react";
import '../browser-home.css'

import Arya from "./arya.jpeg"
import Dev from "./dev.jpeg"
import Aniket from "./aniket.jpeg"
import Raghav from "./raghav.jpeg"
import Mitrajeet from "./mitrajeet.jpeg"
import Vedant from "./vedant.jpeg"
import Mandar from "./mandar.jpeg"
import Bg from "./background.jpg"


import {
    Button,
} from "@chakra-ui/react";

export default function Team() {
    const bg = useColorModeValue("gray.100", "#25282c");
    const details = [
        {
            name: "Arya Bhivpathaki",
            desg: "Co-Founder and CEO of Reticulo",
            linkedin: "https://www.linkedin.com/in/arya-bhivpathaki-27511216a/",
            github: "https://github.com/AryaB-1999",
            img: Arya
        },
        {
            name: "Devakanta Rao",
            desg: "Co-Founder and CTO of Reticulo",
            linkedin: "https://www.linkedin.com/in/devakanta-rao-8ab922117/",
            github: "https://github.com/dev681999",
            img: Dev
        },
        {
            name: "Aniket Velhankar",
            desg: "AI & ML Tech Lead, Reticulo",
            linkedin: "https://www.linkedin.com/in/aniketvelhankar/",
            github: "https://github.com/AniketVelhankar",
            img: Aniket
        },
        {
            name: "Raghav Khare",
            desg: "Customer Discovery and Management, Reticulo",
            linkedin: "https://in.linkedin.com/in/raghav-khare-7868201b5?trk=people-guest_people_search-card",
            github: "",
            img: Raghav
        },
        {
            name: "Mitrajeet Golsangi",
            desg: "Summer Intern, Reticulo",
            linkedin: "https://www.linkedin.com/in/mitrajeet-golsangi-b939611ab/",
            github: "https://github.com/Mitrajeet-Golsangi",
            img: Mitrajeet
        },
        {
            name: "Vedant Gokhale",
            desg: "Summer Intern, Reticulo",
            linkedin: "https://www.linkedin.com/in/Vedant-Gokhale",
            github: "https://github.com/gokhalevedant06",
            img: Vedant
        },
        {
            name: "Mandar Ambulkar",
            desg: "Summer Intern, Reticulo",
            linkedin: "https://www.linkedin.com/in/mandar-ambulkar-419ab11ab/",
            github: "",
            img: Mandar
        }
    ]

    var bg_color = useColorModeValue('white', 'gray.800')
    var linkedin_bg_color = useColorModeValue('gray.100', 'gray.700')
    var linkedin_text_color = useColorModeValue('gray.800', 'gray.200')
    var github_bg_color = useColorModeValue('brand.100', 'brand.700')
    var github_text_color = useColorModeValue('gray.800', 'gray.200')



    return (
        <chakra.div minH={window.innerHeight} h={'100%'} bg={bg}>
            <Box>
                <SimpleGrid columns={[1, 4, 4]}
                    marginLeft="5%" marginRight="5%" spacing={10} alignContent="center" alignItems="center">

                    {
                        details.map((object) =>
                            <Center py={12}>
                                <Box
                                    maxW={['90vw', '50vw', '30vw']}
                                    w={['90vw', '50vw', '30vw']}
                                    minH={'60vh'}
                                    maxH={'80vh'}
                                    bg={bg_color}
                                    boxShadow={'2xl'}
                                    rounded={'md'}
                                    overflow={'auto'}>
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

                </SimpleGrid>
            </Box>
        </chakra.div>)
}
