export const metadata = {
  title: "Vote",
  description: "Support businesses through mutual voting",

  icons: {
    icon: [
      {
        url: "/logo.png",
      },
    ],
    shortcut: ["/logo.png"],
    apple: [
      {
        url: "/logo.png",
      },
      {
        url: "/logo.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export default function VoteLayout({ children }) {
  return <main>{children}</main>;
}
