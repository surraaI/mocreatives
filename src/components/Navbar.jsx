"use client";
import { useState } from "react";
import { Drawer, Burger, ScrollArea } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import {
  Home,
  Info,
  Briefcase,
  LayoutDashboard,
  BookOpen,
  Mail,
} from "lucide-react";

export default function Navigation() {
  const [opened, setOpened] = useState(false);

  return (
    <header className="flex justify-between items-center px-6 py-0 bg-transparent  fixed top-0 left-0 w-full z-50">
      <Link href="/" className="-mt-10">
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
        className="block -mt-10 mr-4"
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
        size="160px"
        withCloseButton
        overlayProps={{ opacity: 0.5, blur: 2 }}
        position="right"
        hiddenFrom="lg"
        className="bg-cultural-red text-black"
        classNames={{
          close: "text-black hover:text-cultural-red font-bold", // Change to desired hover color
        }}
      >
        <ScrollArea>
          <nav className="flex flex-col space-y-4">
            <Link
              href="/home"
              className="p-2 hover:bg-cultural-red rounded-xl flex items-center gap-2"
            >
              <Home size={20} />
              Home
            </Link>
            <Link
              href="/about"
              className="p-2 hover:bg-cultural-red rounded-xl flex items-center gap-2"
            >
              <Info size={20} />
              About
            </Link>
            <Link
              href="/services"
              className="p-2 hover:bg-cultural-red rounded-xl flex items-center gap-2"
            >
              <Briefcase size={20} />
              Services
            </Link>
            <Link
              href="/portfolio"
              className="p-2 hover:bg-cultural-red rounded-xl flex items-center gap-2"
            >
              <LayoutDashboard size={20} />
              Portfolio
            </Link>
            <Link
              href="/blog"
              className="p-2 hover:bg-cultural-red rounded-xl flex items-center gap-2"
            >
              <BookOpen size={20} />
              Blog
            </Link>
            <Link
              href="/contact"
              className="p-2 hover:bg-cultural-red rounded-xl flex items-center gap-2"
            >
              <Mail size={20} />
              Contact
            </Link>
          </nav>
        </ScrollArea>
      </Drawer>
    </header>
  );
}
