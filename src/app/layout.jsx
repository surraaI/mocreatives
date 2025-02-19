import "./globals.css";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import Navigation from "../components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <MantineProvider>
          <Navigation />
          <main className="pt-20">{children}</main>{" "}
        </MantineProvider>
      </body>
    </html>
  );
}
