import React from "react";
import NavLinks from "./navbar/NavLinks";
import { SheetClose } from "@/components/ui/sheet";
import Link from "next/link";
import ROUTES from "@/constants/routes";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import TooltipImage from "@/components/ui/tooltip-image";

const LeftSidebar = () => {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky left-0 top-0 h-screen flex flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266pxx]">
      <div className="flex flex-1 flex-col gap-6">
        <NavLinks />
      </div>

      <div className="flex flex-col gap-3">
        <Button
          className="small-medium btn-secondary min-h-[41px] w-full rounded px-4 py-3 shadow-none"
          asChild
        >
          <Link href={ROUTES.SIGN_IN}>
            <TooltipImage
              imgSrc="icons/account.svg"
              altText="Sign in"
              tooltipText="Sign in"
              imgWidth={20}
              imgHeight={20}
              className="invert-colors lg:hidden"
            />
            <span className="primary-text-gradient max-lg:hidden">Log In</span>
          </Link>
        </Button>

        <Button
          className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full  rounded-lg border px-4 py-3 shadow-none"
          asChild
        >
          <Link href={ROUTES.SIGN_UP}>
            <TooltipImage
              imgSrc="icons/sign-up.svg"
              altText="Sign up"
              tooltipText="Sign up"
              imgWidth={20}
              imgHeight={20}
              className="invert-colors lg:hidden"
            />

            <span className="max-lg:hidden">Sign Up</span>
          </Link>
        </Button>
      </div>
    </section>
  );
};
export default LeftSidebar;
