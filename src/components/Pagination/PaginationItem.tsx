import { Button } from "@chakra-ui/react";

type Props = {
  numberItem: number;
  isCurrent?: boolean;
};

export function PaginationItem({ numberItem, isCurrent = false }: Props) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bg: "pink.500",
          cursor: "default",
        }}
      >
        {numberItem}
      </Button>
    );
  }
  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg="gray.700"
      disabled
      _disabled={{
        bg: "gray.500",
        cursor: "default",
      }}
    >
      {numberItem}
    </Button>
  );
}
