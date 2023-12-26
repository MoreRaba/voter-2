import dynamic from "next/dynamic";

import Loading from "@/app/voter/instagram/loading";

const Instagram = dynamic(() => import("@/component/Instagram"), {
  loading: () => <Loading />,
  ssr: false,
});

export default function Page() {
  return <Instagram />;
}
