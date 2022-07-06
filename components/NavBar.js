import { Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { BsXLg } from "react-icons/bs";
import { GrMenu } from "react-icons/gr";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Flex
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={8}
      bg="yellow.800"
      color="white"
      fontSize={24}
    >
      <Box>
        <Image
          height="40px"
          src="https://raw.githubusercontent.com/chakra-ui/chakra-ui/main/logo/logo-colored@2x.png?raw=true"
          alt="logo"
        />
      </Box>
      <Box display={{ base: "block", md: "none" }}>
        <Button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <BsXLg /> : <GrMenu />}
        </Button>
      </Box>
      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Stack direction={{ base: "column", md: "row" }}>
          <Text>Home</Text>
          <Text>Features</Text>
          <Text>About</Text>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Navbar;
