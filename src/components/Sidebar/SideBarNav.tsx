import { Stack } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SideBarnav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <Stack spacing="4" mt="8" align="stretch">
          <NavLink
            key={0}
            name="Dashboard"
            href="/dashboard"
            icon={RiDashboardLine}
          />
          <NavLink
            key={1}
            name="Usuários"
            href="/users"
            icon={RiContactsLine}
          />
        </Stack>
      </NavSection>

      <NavSection title="AUTOMAÇÃO">
        <Stack spacing="4" mt="8" align="stretch">
          <NavLink
            key={0}
            name="Formulários"
            href="/forms"
            icon={RiInputMethodLine}
          />
          <NavLink
            key={1}
            name="Automação"
            href="/automation"
            icon={RiGitMergeLine}
          />
        </Stack>
      </NavSection>
    </Stack>
  );
}
