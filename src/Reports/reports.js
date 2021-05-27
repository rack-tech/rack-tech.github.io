import { Text, Box, useColorModeValue, chakra, Center } from "@chakra-ui/react"
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
} from "@chakra-ui/react"
import PlayerStatsReport from "./Player-Stats-Report.pdf"
import '../browser-home.css'

export default function Reports() {

    const bg = useColorModeValue("gray.100", "#25282c");

    const reports = [
        {
            title: "Player Movement Statistics",
            src: PlayerStatsReport,
        }
    ];

    const vid_text_color = useColorModeValue("gray.900", "gray.100")

    return (
        <Center bg={bg}>
            <Box w="90%" marginTop={5} h='full'>
                <chakra.div
                    rounded='2xl'
                    h={window.innerHeight * 0.9}
                    bg={useColorModeValue("gray.200", "gray.900")}
                    p={2}
                    textAlign='center'
                    justifyContent="center"
                >
                    <chakra.div w='100%'>
                        <Text color={vid_text_color} fontSize={['lg', '4xl']} fontFamily='Montserrat' w='100%'>
                            These are some sample reports of players and their statistics in pdf format.
                                </Text>
                    </chakra.div>

                    <Center>
                        <Table variant='unstyled' marginTop='5%' w={['full', '50%']}>
                            <Thead>
                                <Tr>
                                    <Th>
                                        <Text color={vid_text_color} fontSize={['md', '2xl']}>
                                            ID
                                        </Text>
                                    </Th>
                                    <Th>
                                        <Text color={vid_text_color} fontSize={['md', '2xl']}>
                                            Description
                                        </Text>
                                    </Th>
                                    <Th>
                                        <Text color={vid_text_color} fontSize={['md', '2xl']}>
                                            Link
                                        </Text>
                                    </Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {
                                    reports.map((report, r_id) => (
                                        <Tr>
                                            <Td>
                                                <Text
                                                    color={vid_text_color}
                                                    fontSize={['md', '2xl']}
                                                >
                                                    {r_id + 1}
                                                </Text>
                                            </Td>
                                            <Td>
                                                <Text
                                                    color={vid_text_color}
                                                    fontSize={['md', '2xl']}
                                                >
                                                    {report.title}
                                                </Text>
                                            </Td>
                                            <Td>
                                                <chakra.a
                                                    href={report.src}
                                                    target="_blank"
                                                    rel="noerror noreferrer"
                                                    color={vid_text_color}
                                                    fontSize={['md', '2xl']}
                                                >
                                                    <Text as='u'>
                                                        Download
                                            </Text>
                                                </chakra.a>
                                            </Td>
                                        </Tr>

                                    ))}
                            </Tbody>
                        </Table>
                    </Center>

                </chakra.div>
            </Box>
        </Center>)
}