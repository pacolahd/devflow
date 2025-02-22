import Image from "next/image";
import Link from "next/link";

import NavLinks from "@/components/navigation/navbar/NavLinks";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ROUTES from "@/constants/routes";

const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/icons/hamburger.svg"
          alt="Menu"
          width={36}
          height={36}
          className="invert-colors sm:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="background-light900_dark200 border-none"
      >
        {/* Instead of hidden class for the sheet title I used tailwind 'sr-only' class. It will hide it visually but will be available for screen readers */}
        <SheetTitle className="sr-only">Navigation</SheetTitle>
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/images/site-logo.svg"
            width={23}
            height={23}
            alt="DevFlow Logo"
          />
          <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900">
            Ashesi<span className="text-primary-500">Overflow</span>
          </p>
        </Link>

        {/* Navigation Links and Auth Buttons Container */}

        <div className="no-scrollbar flex h-full flex-col justify-between overflow-y-auto">
          {/* Navigation Links */}
          <SheetClose asChild>
            <section className="flex flex-col gap-6 pt-16">
              <NavLinks isMobileNav />
            </section>
          </SheetClose>

          {/* Auth Buttons positioned at the bottom */}
          <div className="flex flex-col gap-3 py-6">
            <SheetClose asChild>
              <Link href={ROUTES.SIGN_IN}>
                <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                  <span className="primary-text-gradient">Log In</span>
                </Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href={ROUTES.SIGN_UP}>
                <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full  rounded-lg border px-4 py-3 shadow-none">
                  <span>Sign Up</span>
                </Button>
              </Link>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default MobileNavigation;
