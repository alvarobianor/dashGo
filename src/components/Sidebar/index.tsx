import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useSidebarDrawer } from "../../context/SideBarDrawerContext";
import { SideBarnav } from "./SideBarNav";

export function Sidebar() {
  const { isOpen, onClose } = useSidebarDrawer();

  const isDrawerSideBar = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (isDrawerSideBar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.800" p="4" paddingBottom="0">
            <DrawerCloseButton mt="3" />
            <DrawerHeader>Navegação</DrawerHeader>
            <DrawerBody
              sx={{
                "&::-webkit-scrollbar": {
                  width: "6px",
                  borderRadius: "8px",
                  backgroundColor: `gray.900`,
                },
                "&::-webkit-scrollbar-thumb": {
                  borderRadius: "8px",
                  backgroundColor: "gray.500",
                },
              }}
            >
              <SideBarnav />
            </DrawerBody>
            <DrawerFooter placeContent="flex-start" p="0" m="0" marginTop="2">
              <Text fontSize="small" color="gray.600">
                By: Álvaro Bianor
              </Text>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }

  return (
    <Box as="aside" w="64" mr="8">
      <SideBarnav />
    </Box>
  );
}
