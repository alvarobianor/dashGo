import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import { NavLink } from "./NavLink";

type Props = {
  title: string;
  children: ReactNode;
};

export function NavSection({ title, children }: Props) {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">
        {title}
      </Text>
      {children}
    </Box>
  );
}
