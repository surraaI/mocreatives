"use client";
import { useState, useEffect } from "react";
import { Drawer, Burger, ScrollArea } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [pageLoading, setPageLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setPageLoading(true);
    setOpened(false);

    const timer = setTimeout(() => setPageLoading(false), 500);
    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/home", label: "Home", Icon: Home },
    { href: "/about", label: "About", Icon: Info },
    { href: "/services", label: "Services", Icon: Briefcase },
    { href: "/portfolio", label: "Portfolio", Icon: LayoutDashboard },
    { href: "/blog", label: "Blog", Icon: BookOpen },
    { href: "/contact", label: "Contact", Icon: Mail },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/30 backdrop-blur-md h-20 shadow-md" : "h-40"
        }`}
      >
        <div className="flex justify-between items-center px-6 h-full">
          <Link href="/" className="-mt-2">
            <Image
              src="/assets/logo.png"
              alt="Company Logo"
              width={150}
              height={60}
            />
          </Link>

          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            aria-label="Toggle sidebar"
            className="mr-4"
          />
        </div>
      </header>

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
        size="240px"
        withCloseButton
        overlayProps={{ opacity: 0.5, blur: 2 }}
        position="right"
        className="bg-cultural-red text-black"
        classNames={{
          close: "text-black hover:text-cultural-red font-bold",
        }}
      >
        <ScrollArea>
          <nav className="flex flex-col space-y-4">
            {links.map(({ href, label, Icon }) => (
              <Link
                key={href}
                href={href}
                className="p-2 hover:bg-cultural-red rounded-xl flex items-center gap-2"
              >
                <Icon size={20} />
                {label}
              </Link>
            ))}
          </nav>
        </ScrollArea>
      </Drawer>

      <main
        className={`transition-opacity duration-500 ${
          pageLoading ? "opacity-0" : "opacity-100"
        }`}
      ></main>
    </>
  );
}
