"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const MobileNav = ({ MobileNavLinks, isOpen, handleClose }) => {
  const pathname = usePathname();
  const menuRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    gsap.set(menuRef.current, { opacity: 0, scale: 0, display: "none" });
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
        transformOrigin: "100% 0%",
        display: "flex",
      });

      gsap.fromTo(
        linksRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.5,
          ease: "power2.out",
        }
      );
    } else {
      gsap.to(menuRef.current, {
        opacity: 0,
        scale: 0,
        duration: 0.4,
        ease: "power2.in",
        transformOrigin: "100% 0%",
        onComplete: () => {
          gsap.set(menuRef.current, { display: "none" });
        },
      });
    }
  }, [isOpen]);

  return (
    <div
      ref={menuRef}
      className="fixed md:hidden  h-[100dvh] w-full -z-10 overflow-y-auto overflow-x-hidden bg-altermain inset-0 my-20"
      id="mblMenu"
    >
      <nav className="py-20 w-full">
        <ul className="md:hidden w-full flex flex-col items-center justify-center gap-y-10">
          {MobileNavLinks &&
            MobileNavLinks?.map((link, index) => {
              const isActive =
                link.url === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.url);
              return (
                <li key={link.id} ref={(el) => (linksRef.current[index] = el)}>
                  <Link
                    className={`text-2xl uppercase relative transition-all duration-300 ${
                      isActive
                        ? "text-white after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-9px] after:w-[17px] after:h-[1px] after:bg-white"
                        : ""
                    }`}
                    href={link.url}
                    onClick={() => handleClose()}
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
