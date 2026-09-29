"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import clsx from "clsx";
import Button from "@/components/ui/Button";
import { useBreakPoint } from "@/hooks/useBreakPoint";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const width = useBreakPoint();

  function getClosedHeight(width: number | null) {
    if (width === null) return 90;
    if (width < 640) return 70;
    if (width < 768) return 80;
    return 90;
  }

  const closedHeight = getClosedHeight(width);
  const padding = 8;

  const outerHeight = isOpen ? "100vh" : closedHeight + padding * 2;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <motion.div
      animate={{
        height: outerHeight,
        padding: isOpen ? 0 : padding,
      }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={clsx(
        "fixed inset-x-0 top-0 z-50 box-border transition-colors duration-300",
        scrolled && !isOpen ? "backdrop-blur-sm" : "bg-transparent",
      )}>
      <motion.header
        animate={{
          borderRadius: isOpen ? 0 : 2,
          backgroundColor: isOpen
            ? "var(--color-light)"
            : "var(--color-primary)",
        }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex h-full w-full flex-col overflow-hidden justify-center">
        <div className="flex shrink-0 items-center container-page justify-between px-4 w-full">
          <Link href="/" className="relative z-10 flex items-center gap-2">
            <span className="relative block h-10 w-10 shrink-0 sm:h-12 sm:w-12">
              <Image
                src="/assets/irokoai5.png"
                alt="irokoai logo"
                fill
                sizes="52px"
                priority
                className="object-contain"
              />
            </span>
            <span className="text-xl font-semibold text-white sm:text-2xl">
              irokoAI.ng
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <div
              className={clsx(
                "hidden items-center gap-4 md:flex",
                isOpen && "lg:invisible lg:opacity-0",
              )}>
              <Button
                href="tel:*347*282#"
                text="Dial *347*282#"
                bg="bg-transparent border border-white/30"
                px="px-6"
                py="py-3"
              />
            </div>
            <div>
              <Button
                href="tel:+7149"
                text="Call 7149"
                bg="bg-light"
                px="px-6"
                py="py-3"
              />
            </div>
          </div>
        </div>
      </motion.header>
    </motion.div>
  );
}
