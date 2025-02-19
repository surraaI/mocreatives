import { useState, useEffect } from "react";
import { Drawer, Burger, ScrollArea } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  const [opened, setOpened] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Add effect when scrolled 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center">
        {/* Company Logo (Left) */}
        <Link href="/">
          <Image src="/logo.png" alt="Company Logo" width={120} height={40} />
        </Link>

        {/* Hamburger Button (Right) */}
        <Burger
          opened={opened}
          onClick={() => setOpened((o) => !o)}
          aria-label="Toggle sidebar"
          className="md:hidden"
        />
      </div>

      {/* Sidebar Drawer */}
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Menu"
        padding="md"
        size="md"
        withCloseButton
        overlayProps={{ opacity: 0.5, blur: 2 }}
        hiddenFrom="md"
      >
        <ScrollArea>
          <nav className="flex flex-col space-y-4">
            <Link href="/home" className="p-2 hover:bg-gray-200">
              Home
            </Link>
            <Link href="/about" className="p-2 hover:bg-gray-200">
              About
            </Link>
            <Link href="/services" className="p-2 hover:bg-gray-200">
              Services
            </Link>
            <Link href="/contact" className="p-2 hover:bg-gray-200">
              Contact
            </Link>
          </nav>
        </ScrollArea>
      </Drawer>
    </header>
  );
}
