import { useRouter } from "next/router";
import { useEffect } from "react";

const Homepage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/mercury");
  }, [router]);

  return null;
};

export default Homepage;
