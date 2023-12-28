import dynamic from "next/dynamic";
// import Instagram from "@/app/component/Instagram";
import Loading from "./loading";

const View = dynamic(() => import("../../component/View"), {
  loading: () => <Loading />,
  ssr: false,
});

export default function Page() {
  return <View />;
}
