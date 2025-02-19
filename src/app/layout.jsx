import "./globals.css";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import Navigation from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <MantineProvider>
          <Navigation />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
