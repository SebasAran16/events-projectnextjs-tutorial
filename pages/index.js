import Head from "next/head";
import { HomePage } from "/src/components/home/home-page";

export default function Home({ data }) {
  return (
    <div className="initial-grid">
      <Head>
        <title>Events App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage data={data} />
    </div>
  );
}

// Return an object that has props
// This will be available within the Page props above
export async function getServerSideProps() {
  const { events_categories } = await import("../data/data.json");
  return {
    props: {
      data: events_categories,
    },
  };
}
