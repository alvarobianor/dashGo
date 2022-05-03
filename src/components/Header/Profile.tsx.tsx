import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
type Props = {
  showProfileData?: boolean;
};
export function Profile({ showProfileData = true }: Props) {
  return (
    <>
      <Flex align="center">
        {showProfileData && (
          <Box mr="4" textAlign="right">
            <Text>Álvaro Bianor</Text>
            <Text color="gray.300">bianor.alvaro12@gmail.com</Text>
          </Box>
        )}

        <Avatar
          size="md"
          name="Álvaro Bianor"
          src="https://github.com/alvarobianor.png"
        />
      </Flex>
    </>
  );
}
