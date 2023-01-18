import { Flex, Text } from "@chakra-ui/react";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";

interface PlanetInfoButtonProps {
  planetColour: string;
  isActive: boolean;
  infoNumber: number;
  infoTitle: string;
  onClick: () => void;
}

const PlanetInfoButtonMobile: React.FC<PlanetInfoButtonProps> = ({
  planetColour,
  isActive,
  infoTitle,
  onClick,
}) => {
  return (
    <Flex
      alignItems="center"
      borderBottomWidth="2px"
      borderBottomColor={`${isActive ? planetColour : "transparent"}`}
      as="button"
      onClick={onClick}
    >
      <Text
        display={{ base: "block", md: "none" }}
        fontFamily="spartan"
        fontWeight="bold"
        fontSize="0.5725rem"
        lineHeight="auto"
        letterSpacing="1.93px"
      >
        {infoTitle}
      </Text>
    </Flex>
  );
};

export default PlanetInfoButtonMobile;
