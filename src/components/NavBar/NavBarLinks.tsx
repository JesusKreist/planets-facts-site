import { Flex, Heading, IconButton } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { slideFromRight } from "../../../animation/animationVariants";
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
    icon={<HamburgerIcon isMenuOpen={isMenuOpen} />}
    aria-label="Open Menu"
    display={{ base: "inline-flex", md: "none" }}
  />
);

const NavBarLinks = () => {
  const isMobileMenuOpen = useMobileMenuStore((state) => state.isOpen);
  const toggleMobileMenu = useMobileMenuStore((state) => state.toggle);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(isMobileMenuOpen);
  }, [isMobileMenuOpen]);

  return (
    <>
      <Flex
        gridRow={{ base: "1 / 2", md: "unset" }}
        display={{ base: "none", md: "flex" }}
        justifyContent="space-between"
        gridColumn={{ md: "2 / -2", lg: "span 20 / -3", xl: "20 / -2" }}
        alignItems="center"
        as={motion.div}
        variants={slideFromRight()}
        initial="start"
        animate="end"
      >
        {planets.map((planet) => (
          <Link href={`/${planet.toLowerCase()}`} key={Math.random() * 1000}>
            <Heading
              as="h4"
              fontSize="0.6875rem"
              fontFamily="Spartan"
              lineHeight="1.5625rem"
              letterSpacing="1px"
            >
              {planet.toUpperCase()}
            </Heading>
          </Link>
        ))}
      </Flex>
      <MobileMenuIcon
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={toggleMobileMenu}
      />
    </>
  );
};

export default NavBarLinks;
