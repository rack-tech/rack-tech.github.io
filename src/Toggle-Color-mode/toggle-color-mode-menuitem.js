import { MenuItem } from "@chakra-ui/react"
import { useColorMode } from "@chakra-ui/react"

export default function ToggleMenu() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <MenuItem onClick={toggleColorMode}>
            {colorMode === "light" ? "Dark" : "Light"} mode
        </MenuItem>
    )
}