import { Button, Flex, Stack } from "@chakra-ui/react";
import type { NextPage } from "next";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../components/Form/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("Formato inválido"),
  password: yup.string().required("Senha obrigatória"),
});

function SigIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const router = useRouter();

  const { errors } = formState;

  const handleSingIn: SubmitHandler<SignInFormData> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    router.push("/users");
  };

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
        onSubmit={handleSubmit(
          handleSingIn as unknown as SubmitHandler<{ [x: string]: string }>
        )}
      >
        <Stack spacing={4}>
          <Input
            label="E-mail:"
            type="email"
            error={errors.email}
            {...register("email")}
          />

          <Input
            label="Senha:"
            type="password"
            error={errors.password}
            {...register("password")}
          />

          <Button
            type="submit"
            colorScheme="pink"
            size="lg"
            isLoading={formState.isSubmitting}
          >
            Entrar
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
}

export default React.forwardRef(SigIn);
