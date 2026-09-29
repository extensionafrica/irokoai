"use client";

import HoverLink from "@/components/ui/HoverLink";

const socials = [
  {
    label: "WhatsApp",
    href: "https://wa.me/",
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com",
  },
];

export default function Footer() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white text-primary">
      <div className="container-page pt-5 pb-5 md:pt-10">
        <div className="mt-8 flex flex-col items-center gap-4 border-t border-black/10  pt-4 md:mt-10 md:flex-row md:justify-between">
          <p className="text-sm text-black/60 md:order-1 order-2 [@media(min-width:450px)]:text-start text-center">
            © {new Date().getFullYear()} Extension Africa Consulting Limited.{" "}
            <br className="[@media(min-width:450px)]:hidden flex" />
            All Rights Reserved
          </p>

          <div className="flex flex-row items-center gap-3 md:gap-5 lg:gap-7 md:order-2 order-1">
            {/* <div className="flex flex-row items-center gap-3 md:gap-5 lg:gap-7">
              {socials.map((social) => (
                <HoverLink
                  key={social.href}
                  href={social.href}
                  hoverColor="text-light"
                  textColor="text-black/60"
                  className="text-sm font-semibold">
                  {social.label}
                </HoverLink>
              ))}
            </div> */}

            <div className="relative group inline-block">
              <button
                className="p-1 text-sm font-semibold rounded-full group-hover:-translate-y-0.5 ease-in-out transition-transform duration-200"
                onClick={scrollToTop}
                aria-label="Back to top">
                <svg
                  xmlns="http://w3.org"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                  />
                </svg>
              </button>

              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-neutral-900 text-white text-xs px-2 py-1 rounded shadow-md whitespace-nowrap pointer-events-none">
                Back to top
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
