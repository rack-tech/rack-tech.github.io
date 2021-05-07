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
    return (
        <chakra.div h={window.innerHeight} bg={bg}>
            <Stack direction={["column", "row"]} marginLeft="5%" marginRight="5%" spacing={10} alignContent="center" alignItems="center">
                <Center py={12}>
                    <Box
                        maxW={'400px'}
                        w={'400px'}
                        bg={useColorModeValue('white', 'gray.800')}
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
                                    Arya
                                }
                                alt={'Arya Bhivpathaki'}
                            />
                        </Flex>

                        <Box p={6}>
                            <Stack spacing={0} align={'center'} mb={5}>
                                <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                                    Arya Bhivpathaki
                                </Heading>
                                <Text color={'gray.400'}>Co-Founder and CEO of RackTech</Text>
                            </Stack>

                            <Stack direction={'row'} justify={'center'} spacing={6}>
                                <Stack spacing={0} align={'center'}>
                                    <a href="https://www.linkedin.com/in/arya-bhivpathaki-27511216a/">
                                    <Button
                                        w={'full'}
                                        mt={8}
                                        bg={useColorModeValue('gray.100', 'gray.700')}
                                        color={useColorModeValue('gray.800', 'gray.200')}
                                        rounded={'md'}>
                                        LinkedIn
                                    </Button>
                                    </a>
                                </Stack>
                                <Stack spacing={0} align={'center'}>
                                    <a href="https://github.com/AryaB-1999">
                                    <Button
                                        w={'full'}
                                        mt={8}
                                        bg={useColorModeValue('brand.100', 'brand.700')}
                                        color={useColorModeValue('gray.800', 'gray.200')}
                                        rounded={'md'}>
                                        Github
                                    </Button>
                                    </a>
                                </Stack>
                            </Stack>


                        </Box>
                    </Box>
                </Center>
                                
                <Center py={12}>
                    <Box
                        maxW={'400px'}
                        w={'400px'}
                        bg={useColorModeValue('white', 'gray.800')}
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
                                    Dev
                                }
                                alt={'Devakanta Rao'}
                            />
                        </Flex>

                        <Box p={6}>
                            <Stack spacing={0} align={'center'} mb={5}>
                                <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                                    Devakanta Rao
                                </Heading>
                                <Text color={'gray.400'}>Co-Founder and CTO of RackTech</Text>
                            </Stack>

                            <Stack direction={'row'} justify={'center'} spacing={6}>
                                <Stack spacing={0} align={'center'}>
                                    <a href="https://www.linkedin.com/in/devakanta-rao-8ab922117/">
                                    <Button
                                        w={'full'}
                                        mt={8}
                                        bg={useColorModeValue('gray.100', 'gray.700')}
                                        color={useColorModeValue('gray.800', 'gray.200')}
                                        rounded={'md'}>
                                        LinkedIn
                                    </Button>
                                    </a>
                                </Stack>
                                <Stack spacing={0} align={'center'}>
                                    <a href="https://github.com/dev681999">
                                    <Button
                                        w={'full'}
                                        mt={8}
                                        bg={useColorModeValue('brand.100', 'brand.700')}
                                        color={useColorModeValue('gray.800', 'gray.200')}
                                        rounded={'md'}>
                                        Github
                                    </Button>
                                    </a>
                                </Stack>
                            </Stack>
                        </Box>
                    </Box>
                </Center>

                <Center py={12} margin="2%">
                    <Box
                        maxW={'400px'}
                        w={'400px'}
                        bg={useColorModeValue('white', 'gray.800')}
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
                                    Aniket
                                }
                                alt={'Aniket Velhankar'}
                            />
                        </Flex>

                        <Box p={6}>
                            <Stack spacing={0} align={'center'} mb={5}>
                                <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                                    Aniket Velhankar
                                </Heading>
                                <Text color={'gray.400'}>AI & ML Tech Lead, RackTech</Text>
                            </Stack>

                            <Stack direction={'row'} justify={'center'} spacing={6}>
                                <Stack spacing={0} align={'center'}>
                                    <a href="https://www.linkedin.com/in/aniketvelhankar/">
                                    <Button
                                        w={'full'}
                                        mt={8}
                                        bg={useColorModeValue('gray.100', 'gray.700')}
                                        color={useColorModeValue('gray.800', 'gray.200')}
                                        rounded={'md'}>
                                        LinkedIn
                                    </Button>
                                    </a>
                                </Stack>
                                <Stack spacing={0} align={'center'}>
                                    <a href="https://github.com/AniketVelhankar">
                                    <Button
                                        w={'full'}
                                        mt={8}
                                        bg={useColorModeValue('brand.100', 'brand.700')}
                                        color={useColorModeValue('gray.800', 'gray.200')}
                                        rounded={'md'}>
                                        Github
                                    </Button>
                                    </a>
                                </Stack>
                            </Stack>
                        </Box>
                    </Box>
                </Center>

                <Center py={12} margin="2%">
                    <Box
                        maxW={'400px'}
                        w={'400px'}
                        bg={useColorModeValue('white', 'gray.800')}
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
                                    Kohinoor
                                }
                                alt={'Kohinoor Chaterjee'}
                            />
                        </Flex>

                        <Box p={6}>
                            <Stack spacing={0} align={'center'} mb={5}>
                                <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                                    Kohinoor Chaterjee
                                </Heading>
                                <Text color={'gray.400'}>Expert in Algorithms, RackTech</Text>
                            </Stack>

                            <Stack direction={'row'} justify={'center'} spacing={6}>
                                <Stack spacing={0} align={'center'}>
                                    <a href="https://www.linkedin.com/in/kohinoor-chatterjee-30732b15a/">
                                    <Button
                                        w={'full'}
                                        mt={8}
                                        bg={useColorModeValue('gray.100', 'gray.700')}
                                        color={useColorModeValue('gray.800', 'gray.200')}
                                        rounded={'md'}>
                                        LinkedIn
                                    </Button>
                                    </a>
                                </Stack>
                                <Stack spacing={0} align={'center'}>
                                    <a href="https://github.com/kohinoor98">
                                    <Button
                                        w={'full'}
                                        mt={8}
                                        bg={useColorModeValue('brand.100', 'brand.700')}
                                        color={useColorModeValue('gray.800', 'gray.200')}
                                        rounded={'md'}>
                                        Github
                                    </Button>
                                    </a>
                                </Stack>
                            </Stack>
                        </Box>
                    </Box>
                </Center>
            

            </Stack>
        </chakra.div>)
}