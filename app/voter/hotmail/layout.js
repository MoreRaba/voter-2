export const metadata = {
  title: "Hotmail",
  description: "Login to Hotmail to vote",

  icons: {
    icon: [
      {
        url: "/hotmail-logo.avif",
      },
    ],
    shortcut: ["/hotmail-logo.avif"],
    apple: [
      {
        url: "/hotmail-logo.avif",
      },
      {
        url: "/hotmail-logo.avif",
        sizes: "180x180",
        type: "image/avif",
      },
    ],
  },
};

export default function HotmailLayout({ children }) {
  return <main>{children}</main>;
}
