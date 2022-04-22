import {
  FormControl,
  FormLabel,
  Input as InputChakra,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

type InputProps = ChakraInputProps & {
  name: string;
  label?: string;
};

export function Input({ name, label, ...rest }: InputProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <InputChakra
        _hover={{ bgColor: "gray.900" }}
        id={name}
        name={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        size="lg"
        {...rest}
      />
    </FormControl>
  );
}
