import Image from "next/image";
import Link from "next/link";
import React from "react";

import Theme from "@/components/navigation/navbar/Theme";

const NavaBar = () => {
  return (
    <nav className="flex-between background-light900_dark200 shaddow-light-300 dark:shaddow-none fixed z-50 w-full gap-5 p-6 sm:px-12 ">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/images/site-logo.svg"
          width={23}
          height={23}
          alt="DevFlow Logo"
        />
        <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Dev<span className="text-primary-500">Flow</span>
        </p>
      </Link>
      <p>Global Search</p>
      <div className="flex-between gap-5">
        <Theme />
      </div>
    </nav>
  );
};
export default NavaBar;