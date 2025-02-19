"use client";
import { useState } from "react";
import { Drawer, Burger, ScrollArea } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  const [opened, setOpened] = useState(false);

  return (
    <header className="flex justify-between items-center px-6 py-0  bg-transparent fixed top-0 left-0 w-full z-50">
      <Link href="/">
        <Image
          src="/assets/logo.png"
          alt="Company Logo"
          width={200}
          height={80}
        />
      </Link>

      <Burger
        opened={opened}
        onClick={() => setOpened((o) => !o)}
        aria-label="Toggle sidebar"
        className="block"
      />

      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title={
          <div className="flex items-center gap-2">
            <Image
              src="/assets/logo.png"
              alt="Drawer Logo"
              width={200}
              height={80}
            />
          </div>
        }
        padding="md"
        size="md"
        withCloseButton
        overlayProps={{ opacity: 0.5, blur: 2 }}
        position="right"
        hiddenFrom="lg"
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
            <Link href="/portfolio" className="p-2 hover:bg-gray-200">
              Portfolio
            </Link>
            <Link href="/blog" className="p-2 hover:bg-gray-200">
              Blog
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
