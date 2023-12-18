import { Button, ButtonGroup, Text, Flex } from '@chakra-ui/react';
import { Box, Center } from "@chakra-ui/react";

export function Header() {
    return (
        <>
            <Center >
                <Box w="1300px" h="750px" bgImage="url('https://www.vivemasvidas.com/uploads/vacaciones-bicicleta-espana.jpg')" bgPosition="center">
                    <Center h="900px">
                        <Flex direction="column">
                            <Box>
                                <Text color="white" fontSize="25px" align="center">DOMINA EL TERRENO</Text>
                            </Box>
                            <Box>
                                <ButtonGroup variant="outline" size="md">
                                    <Button color="white">VER DETALLES</Button>
                                    <Button color="white">VER VIDEO</Button>
                                </ButtonGroup>
                            </Box>
                        </Flex>
                    </Center>
                </Box>
            </Center>
        </>
    )
}