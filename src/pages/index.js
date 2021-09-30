import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Member from "../components/Member";
import Blog from "../components/Blog";
import Join from "../components/Join";
import Head from "next/head";
import CardAbout from "../components/molecules/CardAbout";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <>
      <Head>
        <title>Travel-One-Page</title>
      </Head>
      <Layout>
        <Hero />
        <Member />
        <Blog />
        <div className="bg-primary px-5 sm:px-10 pt-10 sm:pt-20 pb-36">
          <CardAbout />
        </div>
        <Join />
        <FAQ />
      </Layout>
    </>
  );
}
