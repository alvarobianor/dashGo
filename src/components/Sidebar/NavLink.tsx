import {
  Icon,
  Link as ChakraLink,
  LinkProps,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ElementType } from "react";

import Link from "next/link";
import { ActiveLink } from "../ActiveLink";

type Props = LinkProps & {
  name: string;
  icon: ElementType;
  href: string;
};

export function NavLink({ name, icon, href, ...rest }: Props) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" alignItems="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {name}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
