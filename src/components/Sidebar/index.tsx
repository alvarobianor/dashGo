import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="GERAL">
          <Stack spacing="4" mt="8" align="stretch">
            <NavLink key={0} name="Dashboard" icon={RiDashboardLine} />
            <NavLink key={1} name="Usuários" icon={RiContactsLine} />
          </Stack>
        </NavSection>

        <NavSection title="AUTOMAÇÃO">
          <Stack spacing="4" mt="8" align="stretch">
            <NavLink key={0} name="Formulários" icon={RiInputMethodLine} />
            <NavLink key={1} name="Automação" icon={RiGitMergeLine} />
          </Stack>
        </NavSection>
      </Stack>
    </Box>
  );
}
