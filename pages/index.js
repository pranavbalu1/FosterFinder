import Head from "next/head";
import Navbar from "../components/navbar";
import { Flex, Text, Center } from "@chakra-ui/react";
import styles from "../styles/index.module.css";
import GoogleButton from "react-google-button";
import { useSession, signIn, signOut } from "next-auth/react";
import ProfileComponent from "../components/profileComp";
import Search from "../components/search";

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <div>
          <ProfileComponent />
          <Navbar />
        </div>
        <div>
          Signed in as {session?.user.email} <br />
          {console.log(session)}
          <button onClick={() => signOut()}>Sign out</button>
        </div>
        <div>
          <Search />
        </div>
      </>
    );
  }
  return (
    <>
      <div id={styles.centered}>
        {/* Not signed in <br />  */}
        <div id={styles.container}>
          <div>
            <Text fontSize="6xl">Welcome to FosterFinder</Text>
          </div>
          <div>
            <GoogleButton type="dark" onClick={() => signIn()}>
              Sign in
            </GoogleButton>
          </div>
        </div>
      </div>
    </>
  );
}
