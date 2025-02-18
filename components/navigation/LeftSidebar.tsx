import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";
import TooltipImage from "@/components/ui/tooltip-image";
import TooltipWrapper from "@/components/ui/tooltip-wrapper";
import ROUTES from "@/constants/routes";

import NavLinks from "./navbar/NavLinks";

const LeftSidebar = () => {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">

      {/* Navigation Links */}
      <div className="flex flex-1 flex-col gap-6">
        <NavLinks />
      </div>

      {/* Auth Buttons positioned at the bottom */}
      <div className="flex flex-col gap-3 py-6">
        <TooltipWrapper   hideAboveScreenSize='lg' tooltipText="Sign in" tooltipSideOffset={20}>
          <Button
            className="small-medium btn-secondary min-h-[41px] w-full rounded px-4 py-3 shadow-none"
            asChild
          >
              <Link href={ROUTES.SIGN_IN}>
                <Image
                    src="icons/account.svg"
                    alt="Sign in"
                    width={20}
                    height={20}
                    className="invert-colors lg:hidden"
                />

                <span className="primary-text-gradient max-lg:hidden">Log In</span>
              </Link>

          </Button>
        </TooltipWrapper>

        <TooltipWrapper   hideAboveScreenSize='lg' tooltipText="Sign up" tooltipSideOffset={20}>
          <Button
            className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full  rounded-lg border px-4 py-3 shadow-none"
            asChild
          >
            <Link href={ROUTES.SIGN_UP}>
              <Image
                src="icons/sign-up.svg"
                alt="Sign up"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
              />

              <span className="max-lg:hidden">Sign Up</span>
            </Link>
          </Button>
        </TooltipWrapper>

      </div>
    </section>
  );
};
export default LeftSidebar;
