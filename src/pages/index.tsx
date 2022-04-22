import type { NextPage } from "next";
import {
  Button,
  Flex,
  Input,
  Stack,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p={8}
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing={4}>
          <FormControl>
            <FormLabel htmlFor="email">Email:</FormLabel>
            <Input
              _hover={{ bgColor: "gray.900" }}
              id="email"
              name="email"
              type="email"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              size="lg"
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password">Senha:</FormLabel>
            <Input
              _hover={{ bgColor: "gray.900" }}
              id="password"
              name="password"
              type="password"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              size="lg"
            />
          </FormControl>
          <Button type="submit" colorScheme="pink" size="lg">
            Entrar
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default Home;
