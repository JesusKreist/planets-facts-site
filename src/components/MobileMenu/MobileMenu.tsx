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
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { SVGProps, useEffect, useState } from "react";
import {
  childMobileMenu,
  parentMobileMenu,
  slideInCard,
} from "../../../animation/animationVariants";
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
  onClick?: () => void;
}
const MenuItem: React.FC<MenuItemProps> = ({
  planetName,
  iconColour,
  onClick,
}) => {
  return (
    <Flex
      alignItems="center"
      gap="1rem"
      height="100%"
      as={Link}
      href={`/${planetName}`}
      onClick={onClick}
      borderBottomWidth={
        planetName.toLocaleLowerCase() === "neptune" ? "0px" : "1px"
      }
      borderBottomColor="rgb(151, 151, 151, 0.1)"
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

      <Box marginLeft="auto">
        <ChevronRightIcon boxSize={5} color="gray.500" />
      </Box>
    </Flex>
  );
};

const MobileMenu = () => {
  const isMobileMenuOpen = useMobileMenuStore((state) => state.isOpen);
  const toggleMobileMenu = useMobileMenuStore((state) => state.toggle);

  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <Box
          display={{ base: "grid", md: "none" }}
          width="100%"
          position="absolute"
          height="100vh"
          bgImage="/assets/background-stars.svg"
          bgColor="#070724"
          zIndex="100"
          as={motion.div}
          variants={slideInCard}
          // initial="offscreen"
          // animate="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          exit="exit"
        >
          <Grid
            className="mobile-menu"
            gridTemplateColumns="repeat(14, 1fr)"
            display="grid"
            height="487px"
            as={motion.div}
            initial="hidden"
            animate="visible"
            variants={parentMobileMenu}
          >
            {planetsWithIconsColor.map((planet) => (
              <Box
                key={Math.random() * 1000}
                gridColumn="2 / -2"
                className="menu-item"
                as={motion.div}
                variants={childMobileMenu}
              >
                {
                  <MenuItem
                    planetName={planet[0]}
                    iconColour={planet[1]}
                    onClick={() => toggleMobileMenu()}
                  ></MenuItem>
                }
              </Box>
            ))}

            {/* {planetsWithIconsColor.map((planet) => (
              <MenuItem
                key={Math.random() * 1000}
                planetName={planet[0]}
                iconColour={planet[1]}
                onClick={() => toggleMobileMenu()}
              ></MenuItem>
            ))} */}
          </Grid>
        </Box>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
