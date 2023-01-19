import { useRouter } from "next/router";
import { useEffect } from "react";

const Homepage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/mercury");
  }, [router]);

  return (
    // <Box
    //   position="relative"
    //   border="2px solid blue"
    //   width="100vw"
    //   minHeight="100vh"
    //   bgImage="/assets/background-stars.svg"
    //   bgColor="#070724"
    // >
    //   <NavBar />
    //   <MobileMenu />
    //   {/* <Box>Testing to see if the text shows under</Box> */}
    // </Box>
    null
  );
};

export default Homepage;
