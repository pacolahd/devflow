"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { SheetClose } from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import TooltipImage from "@/components/ui/tooltip-image";

const NavLinks = ({ isMobileNav = false }: { isMobileNav?: boolean }) => {
  const pathName = usePathname();
  const userId = 1;

  return (
    <>
      {sidebarLinks.map((item) => {
        const isActive =
          (pathName.includes(item.route) && item.route.length > 1) ||
          pathName === item.route;

        if (item.route === "/profile") {
          if (userId) item.route = `${item.route}/${userId}`;
          else return null;
        }
        const LinkComponent = (
          <Link
            href={item.route}
            key={item.label}
            className={cn(
              isActive
                ? "primary-gradient rounded-lg text-light-900"
                : "text-dark300_light900",
              "flex items-center justify-start gap-4 bg-transparent p-4"
            )}
          >
            <TooltipImage
              imgSrc={item.imgURL}
              altText={item.label}
              tooltipText={item.label}
              className={cn({ "invert-colors": !isActive })}
            />
            {/*<Image*/}
            {/*  src={item.imgURL}*/}
            {/*  alt={item.label}*/}
            {/*  width={20}*/}
            {/*  height={20}*/}
            {/*  // This is using the cn() function to conditionally apply the "invert-colors" class only when isActive is false.*/}
            {/*  className={cn({ "invert-colors": !isActive })}*/}
            {/*/>*/}
            <p
              className={cn(
                isActive ? "base-bold" : "base-medium",
                !isMobileNav && "max-lg:hidden"
              )}
            >
              {item.label}
            </p>
          </Link>
        );
        return isMobileNav ? (
          <SheetClose asChild key={item.route}>
            {LinkComponent}
          </SheetClose>
        ) : (
          <React.Fragment key={item.route}>{LinkComponent}</React.Fragment>
        );
      })}
    </>
  );
};
export default NavLinks;
