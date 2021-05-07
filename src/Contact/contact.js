import React, { useState } from "react";
import {
    Flex,
    Stack,
    Heading,
    Text,
    Input,
    Button,
    useColorModeValue,
    chakra, Textarea
} from "@chakra-ui/react";
import '../browser-home.css'
import { SiLinkedin, SiMinutemailer } from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai'
import { Center } from '@chakra-ui/react';


export default function Contact() {
    const bg = useColorModeValue("gray.100", "#25282c");
    const [name, setName] = useState('')
    const [subject, setSubject] = useState('')
    const [content, setContent] = useState('')

    return (
        <chakra.div h={window.innerHeight} bg={bg}>
            <Flex
                direction='row'
                minH={'50%'}
                // align={'center'}
                justify={'center'}
                py={12}
                bg={useColorModeValue('gray.200', '#25282c')}>
                <Flex
                    direction='row'
                    marginTop="5%"
                    justify={'center'}
                    w='90%'
                    flexWrap='wrap'
                >
                    <Stack
                        boxShadow={'lg'}
                        bg={useColorModeValue('white', 'gray.900')}
                        rounded={'2xl'}
                        p={10}
                        m={5}
                        spacing={8}
                        align={'center'}
                        border='solid'
                        w={{ sm: '400px', md: '40%', lg: '30%' }}>

                        <Stack align={'center'} spacing={2}>
                            <Heading
                                // textTransform={'uppercase'}
                                fontSize={'4xl'}
                                fontFamily={"Comfortaa"}
                                color={useColorModeValue('gray.800', 'gray.200')}>
                                Get in Touch
                        </Heading>
                            <Text fontSize={'lg'} color={useColorModeValue('gray.800', 'gray.200')}>
                                We would love to hear from you!
                        </Text>
                        </Stack>
                        <Stack spacing={4} direction={{ base: 'column', md: 'column' }} w='100%'>
                            <Input type="text" placeholder="Name"
                                id='name'
                                color={useColorModeValue('gray.800', 'gray.200')}
                                bg={useColorModeValue('gray.100', 'gray.600')}
                                rounded={'lg'}
                                border={0}
                                onChange={event => setName(event.currentTarget.value)}
                                _focus={{
                                    bg: useColorModeValue('gray.200', 'gray.700'),
                                    outline: 'none',
                                }}></Input>
                            <Input
                                id='subject'
                                type={'text'}
                                placeholder={'Subject'}
                                color={useColorModeValue('gray.800', 'gray.100')}
                                bg={useColorModeValue('gray.100', 'gray.600')}
                                rounded={'lg'}
                                onChange={event => setSubject(event.currentTarget.value)}
                                border={0}
                                _focus={{
                                    bg: useColorModeValue('gray.200', 'gray.800'),
                                    outline: 'none',
                                }}
                            />
                            <Textarea
                                id='content'
                                type={'textarea'}
                                placeholder={'Content'}
                                color={useColorModeValue('gray.800', 'gray.100')}
                                bg={useColorModeValue('gray.100', 'gray.600')}
                                rounded={'lg'}
                                border={0}
                                onChange={event => setContent(event.currentTarget.value)}
                                _focus={{
                                    bg: useColorModeValue('gray.200', 'gray.800'),
                                    outline: 'none',
                                }}
                            />
                            <a href={`mailto: racket.technologies@gmail.com?subject= ${subject} &body= Hello my name is ${name} and this is my feedback : ${content}`}>
                                <Button
                                    w='full'
                                    bg={'blue.400'}
                                    rounded={'full'}
                                    color={'white'}
                                    flex={'1 0 auto'}
                                    _hover={{ bg: 'blue.500' }}
                                    _focus={{ bg: 'blue.500' }}>
                                    SEND
                        </Button>
                            </a>
                        </Stack>
                    </Stack>


                    <Stack
                        boxShadow={'lg'}
                        bg={useColorModeValue('white', 'gray.900')}
                        rounded={'2xl'}
                        p={10}
                        spacing={8}
                        m={5}
                        align={'center'}
                        border='solid'
                        w={{ sm: '400px', md: '40%', lg: '30%' }}>


                        <Stack align={'center'} spacing={2}>
                            <Heading
                                // textTransform={'uppercase'}
                                fontSize={'4xl'}
                                fontFamily={"Comfortaa"}
                                color={useColorModeValue('gray.800', 'gray.200')}>
                                Follow Us!
                        </Heading>
                            <Text fontSize={'lg'} color={useColorModeValue('gray.800', 'gray.200')}>
                                We are active on the following platforms
                        </Text>
                        </Stack>
                        <Stack spacing={2} direction={{ base: 'column', md: 'column' }} w='100%'>
                            <Center>
                                <chakra.a w='full' href="https://www.linkedin.com/company/del-ba-analytics/?viewAsMember=true" >
                                    <Button border='solid'
                                        w={'full'}
                                        maxW={'md'}
                                        colorScheme={'messenger'}
                                        leftIcon={<SiLinkedin />}>
                                        <Center>
                                            <Text>Linkedin</Text>
                                        </Center>
                                    </Button>
                                </chakra.a>
                            </Center>
                            <Center>
                                <chakra.a w='full' href="mailto: racket.technologies@gmail.com" >
                                    <Button border='solid'
                                        w={'full'}
                                        maxW={'md'}
                                        colorScheme={'red'}
                                        leftIcon={<SiMinutemailer />}>
                                        <Center>
                                            <Text>Mail</Text>
                                        </Center>
                                    </Button>
                                </chakra.a>
                            </Center>
                            <Center>
                                <chakra.a w='full' href="https://github.com/rack-tech">
                                    <Button border='solid'
                                        w={'full'}
                                        maxW={'md'}
                                        colorScheme={'gray'}
                                        leftIcon={<AiFillGithub />}>
                                        <Center>
                                            <Text>GitHub</Text>
                                        </Center>
                                    </Button>
                                </chakra.a>
                            </Center>
                        </Stack>
                    </Stack>

                </Flex>

            </Flex>
        </chakra.div>)
}
