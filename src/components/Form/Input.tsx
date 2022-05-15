import {
  FormControl,
  FormLabel,
  Input as InputChakra,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";

type InputProps = ChakraInputProps & {
  name: string;
  label?: string;
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, ...rest },
  ref
) => {
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
        ref={ref}
        {...rest}
      />
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
