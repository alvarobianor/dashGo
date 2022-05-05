import { Box, Button, Flex, Stack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
  return (
    <Flex
      flexDirection={["column", "row"]}
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>

      <Stack direction="row" spacing="2">
        <PaginationItem numberItem={1} isCurrent />
        <PaginationItem numberItem={2} />
        <PaginationItem numberItem={3} />
        <PaginationItem numberItem={4} />
        <PaginationItem numberItem={5} />
        <PaginationItem numberItem={6} />
        <PaginationItem numberItem={7} />
      </Stack>
    </Flex>
  );
}
