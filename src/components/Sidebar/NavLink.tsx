import {
  Icon,
  Link,
  LinkProps,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ElementType } from "react";

type Props = LinkProps & {
  name: string;
  icon: ElementType;
};

export function NavLink({ name, icon, ...rest }: Props) {
  return (
    <Link display="flex" alignItems="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {name}
      </Text>
    </Link>
  );
}
