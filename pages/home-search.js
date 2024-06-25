import IDX from "@/components/global/IDX";
import { NextSeo } from "next-seo";

export default function HomeSearch() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  return (
    <> 
      <NextSeo
        title="Home Search | SOBIREALTY"
        description="Home Search | SOBIREALTY"
      />
      <IDX />
    </>
  );
}
