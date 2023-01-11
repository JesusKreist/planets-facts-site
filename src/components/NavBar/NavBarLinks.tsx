// import { HamburgerIcon } from "@chakra-ui/icons";
import { Flex, Heading, IconButton, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import customHamburger from "../../../public/assets/icon-hamburger.svg";
import { useMobileMenuStore } from "../../store/state";

const planets = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];

interface HamburgerIconProps {
  isMenuOpen: boolean;
}
const HamburgerIcon: React.FC<HamburgerIconProps> = ({ isMenuOpen }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17">
      <g fill={isMenuOpen ? "#718096" : "#FFF"} fillRule="evenodd">
        <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
      </g>
    </svg>
  );
};

interface MobileMenuIconProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenuIcon: React.FC<MobileMenuIconProps> = ({
  isMenuOpen,
  setIsMenuOpen,
}) => (
  <IconButton
    onClick={() => setIsMenuOpen(!isMenuOpen)}
    gridColumn="span 2 / -2"
    justifyContent="end"
    alignItems="center"
    variant="unstyled"
    // icon={
    //   <HamburgerIcon boxSize="8" color={isMobileOpen ? "gray.500" : "white"} />
    // }
    icon={<HamburgerIcon isMenuOpen={isMenuOpen} />}
    aria-label="Open Menu"
    display={{ base: "inline-flex", md: "none" }}
  />
);

const NavBarLinks = () => {
  const isMobileMenuOpen = useMobileMenuStore((state) => state.isOpen);
  const toggleMobileMenu = useMobileMenuStore((state) => state.toggle);

  return (
    <>
      <Flex
        gridRow={{ base: "1 / 2", md: "unset" }}
        display={{ base: "none", md: "flex" }}
        justifyContent="space-between"
        gridColumn={{ md: "2 / -2", lg: "18 / -2", xl: "20 / -2" }}
        alignItems="center"
      >
        {planets.map((planet) => (
          <Heading
            as="h4"
            fontSize="0.6875rem"
            fontFamily="Spartan"
            lineHeight="1.5625rem"
            letterSpacing="1px"
            key={Math.random() * 1000}
          >
            {planet.toUpperCase()}
          </Heading>
        ))}
      </Flex>
      <MobileMenuIcon
        isMenuOpen={isMobileMenuOpen}
        setIsMenuOpen={toggleMobileMenu}
      />
    </>
  );
};

export default NavBarLinks;
