import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Flex align="center">
        <Box mr="4" textAlign="right">
          <Text>Álvaro Bianor</Text>
          <Text color="gray.300">bianor.alvaro12@gmail.com</Text>
        </Box>
        <Avatar
          size="md"
          name="Álvaro Bianor"
          src="https://github.com/alvarobianor.png"
        />
      </Flex>
    </Flex>
  );
}
