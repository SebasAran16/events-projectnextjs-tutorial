import { SingleEvent } from "../../../src/components/events/single-event";

const SingleEventPage = ({ data }) => {
  return <SingleEvent data={data} />;
};

export default SingleEventPage;

export async function getStaticPaths() {
  const { allEvents } = await import("../../../data/data.json");
  const allPaths = allEvents.map((ev) => {
    return {
      params: {
        cat: ev.city.toString(),
        // This id below will be what we set inside of the [] on the dynamic pages/folders
        id: ev.id.toString(),
      },
    };
  });
  return { paths: allPaths, fallback: false };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const { allEvents } = await import("../../../data/data.json");
  const eventData = allEvents.find((ev) => ev.id == id);
  return {
    props: { data: eventData },
  };
}
