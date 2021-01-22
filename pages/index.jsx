import Head from "next/head";
import { Layout } from "../layouts";
import { Top } from "../components/top";
import { Profile } from "../components/profile";
import { Works } from "../components/works";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Top />
      <Profile />
      <Works />
    </Layout>
  );
}
