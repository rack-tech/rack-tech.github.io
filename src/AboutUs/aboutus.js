import {
    Flex,
    Text,
    useColorModeValue,
    chakra,
    Center
} from "@chakra-ui/react";
import '../browser-home.css'
import { Link } from 'react-router-dom'

export default function AboutUs() {
    const bg = useColorModeValue("gray.100", "#25282c");
    const title = "Our Story"
    const content = "We are college batchmates of Computer Sc. and Engg. from Pune, India. " +
        "All of us love sports and want to see Indian athletes perform at Global Level. " +
        "We think that the most effective way is to improve standard of athletes is from the grassroot level, " +
        "hence we have come up with a solution that helps all athletes improve their game. " +
        "We help athletes by providing their coaches softwares and machines which will boost the training process, " +
        "help coaches get more insights in athlete's perfromance and take progressive measures accordingly. " +
        ""
    const content2 = "We are guided by a very capable team of Technical Mentors, such as Society of Innovation and Entrepreneurship, IIT Bombay (SINE) " +
                    " who have pre-incubated us in their Incubation Cell and various IT Engineers who are enthusiastic about Racket Games, Domain Experts from Racket Sports such as " +
        "Badminton, Table Tennis and Tennis and have come up with solutions to improve performance of athletes of all levels. " +
        "These softwares can be used by a wide range of players from Intermediate level to Seasoned Professionals for their in game analysis, we also " +
        "provide readymade analysis reports with analysis tools for players and coaches. You can have a look at our offerings " +
        "as well as their demonstrations in the "
    const content3 = " page."

    return (
        <chakra.div h={window.outerHeight} bg={bg}>
            <Flex
                direction='row'
                // align={'center'}
                justify={'center'}
                minH={window.outerHeight}
                bg={useColorModeValue('white', '#25282d')}>
                <chakra.span
                    rounded='2xl'
                    direction='row'
                    marginTop="5%"
                    justify={'center'}
                    w='90%'
                    bg={useColorModeValue('gray.100', 'gray.900')}>

                    {/** Center tag is used for aligning items in center */}
                    <Center> 
                        <Text fontFamily={'Comfortaa'}
                            fontStyle={'bold'}
                            fontSize={'50px'}
                            margin={10}>

                            {title}

                        </Text>
                    </Center>

                    <Center>
                        <chakra.p w='90%' alignContent='center'>
                            <Text fontFamily={'Zilla Slab'}
                                fontStyle={'bold'}
                                fontSize={'2xl'}>

                                {content}
                                <br></br>
                                <br></br>

                                {content2}
                                <Link to="/demos" >
                                    <chakra.span fontStyle='italic' as='u'>
                                        Demos
                                        </chakra.span>
                                </Link>
                                {content3}
                            </Text>
                        </chakra.p>
                    </Center>
                </chakra.span>
            </Flex>
        </chakra.div>)
}