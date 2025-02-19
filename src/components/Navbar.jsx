"use client";
import { useState } from "react";
import { Drawer, Burger, ScrollArea } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  const [opened, setOpened] = useState(false);

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-transparent fixed top-0 left-0 w-full z-50">
      {/* Company Logo (Left) */}
      <Link href="/">
        <Image src="/logo.png" alt="Company Logo" width={120} height={40} />
      </Link>

      {/* Hamburger Button (Visible on all screens) */}
      <Burger
        opened={opened}
        onClick={() => setOpened((o) => !o)}
        aria-label="Toggle sidebar"
        className="lg:hidden" // Make it visible on all sizes
      />

      {/* Sidebar Drawer (Appears on the right side) */}
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Menu"
        padding="md"
        size="md"
        withCloseButton
        overlayProps={{ opacity: 0.5, blur: 2 }}
        position="right" // Move the drawer to the right
        hiddenFrom="lg" // Hide the drawer on large and above screens
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
