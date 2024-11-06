import { ReactNode } from "react";

import NavaBar from "@/components/navigation/navbar";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <NavaBar />
      {children}
    </main>
  );
};
export default RootLayout;
