import { chakra, useColorMode, useColorModeValue } from "@chakra-ui/react"

export default function ToggleButton() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <chakra.button
            display="block"
            mx={4}
            mt={[2, 2, 0]}
            fontSize="md"
            color={useColorModeValue("gray.700", "gray.200")}
            textTransform="capitalize"
            onClick={toggleColorMode}
            _hover={{ color: useColorModeValue("red.400", "red.400") }}>
            {colorMode === "light" ? "Dark" : "Light"} mode
        </chakra.button>
    )
}