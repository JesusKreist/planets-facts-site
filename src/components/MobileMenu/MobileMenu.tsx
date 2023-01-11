import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Icon,
  createIcon,
  IconProps,
  OmitCommonProps,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { SVGProps, useEffect, useState } from "react";
import { useMobileMenuStore } from "../../store/state";

const planetsWithIconsColor = [
  ["mercury", "#DEF4FC"],
  ["venus", "#F7CC7F"],
  ["earth", "#545BFE"],
  ["mars", "#FF6A45"],
  ["jupiter", "#ECAD7A"],
  ["saturn", "#FCCB6B"],
  ["uranus", "#65F0D5"],
  ["neptune", "#497EFA"],
];

const MenuItemIcon = (
  props: JSX.IntrinsicAttributes &
    OmitCommonProps<SVGProps<SVGSVGElement>, keyof IconProps> &
    IconProps & { as?: "svg" | undefined }
) => (
  <Icon viewBox="0 0 200 200" {...props}>
    <path
      fill="currentColor"
      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
    />
  </Icon>
);

interface MenuItemProps {
  planetName: string;
  iconColour: string;
}
const MenuItem: React.FC<MenuItemProps> = ({ planetName, iconColour }) => {
  return (
    <Flex
      gridColumn="2 / -2"
      alignItems="center"
      gap="1rem"
      className="menu-item"
    >
      <MenuItemIcon boxSize={"20px"} color={iconColour} />

      <Text
        as="h3"
        fontWeight="bold"
        fontSize="1rem"
        lineHeight="1.36px"
        color="white"
      >
        {planetName.toUpperCase()}
      </Text>

      <Box marginLeft="auto" as={Link} href={`/${planetName}`}>
        <ChevronRightIcon boxSize={5} color="gray.500" />
      </Box>
    </Flex>
  );
};

const MobileMenu = () => {
  const isMobileMenuOpen = useMobileMenuStore((state) => state.isOpen);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(isMobileMenuOpen);
  }, [isMobileMenuOpen]);

  return (
    <Grid
      className="mobile-menu"
      templateColumns="repeat(14, 1fr)"
      position="absolute"
      height="487px"
      width="100%"
      border="2px solid green"
      display={{ base: `${isMenuOpen ? "grid" : "none"}`, md: "none" }}
    >
      {planetsWithIconsColor.map((planet) => (
        <MenuItem
          key={Math.random() * 1000}
          planetName={planet[0]}
          iconColour={planet[1]}
        ></MenuItem>
      ))}
    </Grid>
  );
};

export default MobileMenu;
